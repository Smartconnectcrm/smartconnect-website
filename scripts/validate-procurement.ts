#!/usr/bin/env tsx
/**
 * Procurement Validation Script
 * 
 * Validates that the SmartConnect CRM website maintains procurement-friendly,
 * compliance-oriented, and public-sector appropriate content.
 * 
 * This script checks for:
 * - Absence of hype language and unverified claims
 * - Presence of compliance and transparency language
 * - Proper use of legal entity names
 * - GDPR and data protection references
 * - Absence of tracking without consent
 * - Tender-appropriate terminology
 */

import * as fs from "fs"
import * as path from "path"

// ============================================================================
// CONFIGURATION
// ============================================================================

const CONTENT_DIRS = [
  "src/app",
  "src/components",
  "src/lib",
]

const FILE_EXTENSIONS = [".tsx", ".ts", ".jsx", ".js", ".md"]

// ============================================================================
// FORBIDDEN PATTERNS (Marketing Hype / Unverified Claims)
// ============================================================================

const FORBIDDEN_PATTERNS = [
  // Hype language
  { pattern: /\b(revolutionary|game-changing|disruptive|cutting-edge|world-class|best-in-class|industry-leading|market-leading)\b/gi, reason: "Marketing hype language" },
  { pattern: /\b(amazing|incredible|awesome|fantastic|phenomenal|extraordinary)\b/gi, reason: "Exaggerated adjectives" },
  { pattern: /\b(guaranteed|promise|ensure|100%)\b/gi, reason: "Absolute guarantees (not procurement-appropriate)" },
  
  // Unverified metrics
  { pattern: /\b\d+%\s+(faster|better|more efficient|increase|improvement)\b/gi, reason: "Unverified performance claims" },
  { pattern: /\b(thousands|millions)\s+of\s+(customers|users|clients)\b/gi, reason: "Unverified customer numbers" },
  { pattern: /\b(trusted by|used by)\s+\d+/gi, reason: "Unverified trust claims" },
  
  // SaaS funnel language
  { pattern: /\b(free trial|sign up now|get started|limited time|special offer|pricing plans)\b/gi, reason: "SaaS marketing funnel language" },
  { pattern: /\b(testimonial|case study|success story|client logo)\b/gi, reason: "Marketing testimonials (not verified)" },
  
  // Startup pitch language
  { pattern: /\b(unicorn|rocket ship|scale fast|growth hacking|viral|exponential growth)\b/gi, reason: "Startup pitch language" },
  { pattern: /\b(AI-powered|blockchain|web3|metaverse)\b/gi, reason: "Buzzword without context" },
  
  // Tracking without consent
  { pattern: /google-analytics|gtag|facebook pixel|mixpanel|segment\.io/gi, reason: "Tracking tool without consent mechanism" },
]

// ============================================================================
// REQUIRED PATTERNS (Compliance & Transparency)
// ============================================================================

const REQUIRED_PATTERNS = [
  { pattern: /DSGVO|GDPR/i, reason: "GDPR/DSGVO reference", files: ["src/app/contact/page.tsx", "src/app/privacy"] },
  { pattern: /Datenschutz|privacy|data protection/i, reason: "Data protection reference", files: ["src/app/contact/page.tsx"] },
  { pattern: /SmartConnect CRM UG \(haftungsbeschränkt\)/i, reason: "Legal entity name", files: ["src/lib/branding.ts", "src/components/Footer.tsx"] },
  { pattern: /öffentliche Auftraggeber|public sector|procurement|tender/i, reason: "Public sector / procurement reference", files: ["src/app/page.tsx", "src/app/services/page.tsx"] },
  { pattern: /Compliance|compliance-orientiert/i, reason: "Compliance reference", files: ["src/app/page.tsx", "src/app/services/page.tsx"] },
  { pattern: /Dokumentation|documentation/i, reason: "Documentation reference", files: ["src/app/page.tsx", "src/app/services/page.tsx"] },
]

// ============================================================================
// VALIDATION LOGIC
// ============================================================================

interface ValidationIssue {
  type: "forbidden" | "missing_required"
  severity: "error" | "warning"
  file: string
  line?: number
  pattern: string
  reason: string
  context?: string
}

interface ValidationResult {
  passed: boolean
  issues: ValidationIssue[]
  filesScanned: number
  summary: {
    errors: number
    warnings: number
  }
}

function getAllFiles(dir: string, extensions: string[]): string[] {
  const files: string[] = []
  
  function walk(currentPath: string) {
    if (!fs.existsSync(currentPath)) return
    
    const entries = fs.readdirSync(currentPath, { withFileTypes: true })
    
    for (const entry of entries) {
      const fullPath = path.join(currentPath, entry.name)
      
      // Skip node_modules, .next, .git
      if (entry.isDirectory()) {
        if (!["node_modules", ".next", ".git", "dist", "build"].includes(entry.name)) {
          walk(fullPath)
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name)
        if (extensions.includes(ext)) {
          files.push(fullPath)
        }
      }
    }
  }
  
  walk(dir)
  return files
}

function validateFile(filePath: string): ValidationIssue[] {
  const issues: ValidationIssue[] = []
  const content = fs.readFileSync(filePath, "utf-8")
  const lines = content.split("\n")
  const relativePath = path.relative(process.cwd(), filePath)
  
  // Check for forbidden patterns
  for (const { pattern, reason } of FORBIDDEN_PATTERNS) {
    const matches = content.matchAll(pattern)
    
    for (const match of matches) {
      // Find line number
      const position = match.index || 0
      const lineNumber = content.substring(0, position).split("\n").length
      const lineContent = lines[lineNumber - 1]?.trim() || ""
      
      issues.push({
        type: "forbidden",
        severity: "error",
        file: relativePath,
        line: lineNumber,
        pattern: pattern.source,
        reason,
        context: lineContent.substring(0, 100),
      })
    }
  }
  
  return issues
}

function checkRequiredPatterns(allFiles: string[]): ValidationIssue[] {
  const issues: ValidationIssue[] = []
  
  for (const { pattern, reason, files: requiredFiles } of REQUIRED_PATTERNS) {
    let found = false
    
    for (const filePath of allFiles) {
      const relativePath = path.relative(process.cwd(), filePath)
      
      // Check if this file should contain the pattern
      const shouldCheck = requiredFiles.some(rf => relativePath.includes(rf))
      
      if (shouldCheck) {
        const content = fs.readFileSync(filePath, "utf-8")
        if (pattern.test(content)) {
          found = true
          break
        }
      }
    }
    
    if (!found) {
      issues.push({
        type: "missing_required",
        severity: "warning",
        file: requiredFiles.join(", "),
        pattern: pattern.source,
        reason: `Missing required pattern: ${reason}`,
      })
    }
  }
  
  return issues
}

function runValidation(): ValidationResult {
  const allIssues: ValidationIssue[] = []
  let filesScanned = 0
  
  // Scan all content directories
  for (const dir of CONTENT_DIRS) {
    const dirPath = path.join(process.cwd(), dir)
    const files = getAllFiles(dirPath, FILE_EXTENSIONS)
    
    for (const file of files) {
      filesScanned++
      const issues = validateFile(file)
      allIssues.push(...issues)
    }
  }
  
  // Check required patterns
  const allFiles = CONTENT_DIRS.flatMap(dir => 
    getAllFiles(path.join(process.cwd(), dir), FILE_EXTENSIONS)
  )
  const requiredIssues = checkRequiredPatterns(allFiles)
  allIssues.push(...requiredIssues)
  
  const errors = allIssues.filter(i => i.severity === "error").length
  const warnings = allIssues.filter(i => i.severity === "warning").length
  
  return {
    passed: errors === 0,
    issues: allIssues,
    filesScanned,
    summary: { errors, warnings },
  }
}

// ============================================================================
// REPORTING
// ============================================================================

function generateReport(result: ValidationResult): string {
  const lines: string[] = []
  
  lines.push("# Procurement Validation Report")
  lines.push("")
  lines.push(`**Date:** ${new Date().toISOString()}`)
  lines.push(`**Files Scanned:** ${result.filesScanned}`)
  lines.push(`**Status:** ${result.passed ? "✅ PASSED" : "❌ FAILED"}`)
  lines.push("")
  lines.push("## Summary")
  lines.push("")
  lines.push(`- **Errors:** ${result.summary.errors}`)
  lines.push(`- **Warnings:** ${result.summary.warnings}`)
  lines.push("")
  
  if (result.issues.length === 0) {
    lines.push("## ✅ No Issues Found")
    lines.push("")
    lines.push("All procurement compliance checks passed:")
    lines.push("- No marketing hype or unverified claims detected")
    lines.push("- All required compliance patterns present")
    lines.push("- Content is procurement-friendly and public-sector appropriate")
    lines.push("")
  } else {
    lines.push("## Issues Detected")
    lines.push("")
    
    // Group by severity
    const errors = result.issues.filter(i => i.severity === "error")
    const warnings = result.issues.filter(i => i.severity === "warning")
    
    if (errors.length > 0) {
      lines.push("### ❌ Errors (Must Fix)")
      lines.push("")
      for (const issue of errors) {
        lines.push(`**${issue.file}${issue.line ? `:${issue.line}` : ""}**`)
        lines.push(`- **Reason:** ${issue.reason}`)
        lines.push(`- **Pattern:** \`${issue.pattern}\``)
        if (issue.context) {
          lines.push(`- **Context:** \`${issue.context}\``)
        }
        lines.push("")
      }
    }
    
    if (warnings.length > 0) {
      lines.push("### ⚠️ Warnings (Should Review)")
      lines.push("")
      for (const issue of warnings) {
        lines.push(`**${issue.file}**`)
        lines.push(`- **Reason:** ${issue.reason}`)
        lines.push(`- **Pattern:** \`${issue.pattern}\``)
        lines.push("")
      }
    }
  }
  
  lines.push("## Validation Criteria")
  lines.push("")
  lines.push("### Forbidden Patterns")
  lines.push("The following patterns are not allowed in procurement-friendly content:")
  lines.push("")
  for (const { reason } of FORBIDDEN_PATTERNS) {
    lines.push(`- ${reason}`)
  }
  lines.push("")
  
  lines.push("### Required Patterns")
  lines.push("The following patterns must be present:")
  lines.push("")
  for (const { reason } of REQUIRED_PATTERNS) {
    lines.push(`- ${reason}`)
  }
  lines.push("")
  
  return lines.join("\n")
}

function generateConsoleOutput(result: ValidationResult): void {
  console.log("\n" + "=".repeat(80))
  console.log("PROCUREMENT VALIDATION REPORT")
  console.log("=".repeat(80) + "\n")
  
  console.log(`Files Scanned: ${result.filesScanned}`)
  console.log(`Status: ${result.passed ? "✅ PASSED" : "❌ FAILED"}`)
  console.log(`Errors: ${result.summary.errors}`)
  console.log(`Warnings: ${result.summary.warnings}`)
  console.log("")
  
  if (result.issues.length === 0) {
    console.log("✅ All procurement compliance checks passed!")
    console.log("")
    console.log("✓ No marketing hype or unverified claims detected")
    console.log("✓ All required compliance patterns present")
    console.log("✓ Content is procurement-friendly and public-sector appropriate")
  } else {
    const errors = result.issues.filter(i => i.severity === "error")
    const warnings = result.issues.filter(i => i.severity === "warning")
    
    if (errors.length > 0) {
      console.log("❌ ERRORS (Must Fix):\n")
      for (const issue of errors) {
        console.log(`  ${issue.file}${issue.line ? `:${issue.line}` : ""}`)
        console.log(`  → ${issue.reason}`)
        if (issue.context) {
          console.log(`  → Context: ${issue.context.substring(0, 80)}...`)
        }
        console.log("")
      }
    }
    
    if (warnings.length > 0) {
      console.log("⚠️  WARNINGS (Should Review):\n")
      for (const issue of warnings) {
        console.log(`  ${issue.file}`)
        console.log(`  → ${issue.reason}`)
        console.log("")
      }
    }
  }
  
  console.log("=".repeat(80) + "\n")
}

// ============================================================================
// MAIN
// ============================================================================

function main() {
  console.log("Running procurement validation...\n")
  
  const result = runValidation()
  
  // Generate console output
  generateConsoleOutput(result)
  
  // Generate markdown report
  const report = generateReport(result)
  const reportPath = path.join(process.cwd(), "PROCUREMENT_VALIDATION_REPORT.md")
  fs.writeFileSync(reportPath, report, "utf-8")
  console.log(`📄 Full report saved to: ${reportPath}\n`)
  
  // Exit with appropriate code
  process.exit(result.passed ? 0 : 1)
}

main()
