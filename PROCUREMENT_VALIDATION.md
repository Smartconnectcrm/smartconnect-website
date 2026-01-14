# Procurement Validation System

## Overview

The SmartConnect CRM website includes an automated procurement validation system to ensure all content maintains procurement-friendly, compliance-oriented language appropriate for public sector and EU tender contexts.

This system prevents the introduction of:
- Marketing hype and unverified claims
- SaaS funnel language
- Startup pitch terminology
- Tracking tools without consent mechanisms
- Absolute guarantees and exaggerated adjectives

And ensures the presence of:
- GDPR/DSGVO references
- Data protection language
- Legal entity names
- Public sector and procurement terminology
- Compliance and documentation references

## Usage

### Local Validation

Run the validation script locally before committing:

```bash
npm run validate:procurement
```

Or directly with tsx:

```bash
tsx scripts/validate-procurement.ts
```

### Automated Validation

The validation runs automatically on:
- **Pull Requests** to `main` or `develop` branches
- **Pushes** to `main` branch
- **Manual trigger** via GitHub Actions workflow dispatch

### Validation Report

After running validation, a detailed report is generated at:
```
PROCUREMENT_VALIDATION_REPORT.md
```

This report includes:
- Summary of files scanned
- Pass/fail status
- List of errors (forbidden patterns found)
- List of warnings (missing required patterns)
- Full validation criteria

## Validation Criteria

### Forbidden Patterns

The following content patterns are **not allowed** and will cause validation to fail:

#### 1. Marketing Hype Language
- ❌ revolutionary, game-changing, disruptive, cutting-edge
- ❌ world-class, best-in-class, industry-leading, market-leading
- **Why:** These terms are subjective and not appropriate for procurement contexts

#### 2. Exaggerated Adjectives
- ❌ amazing, incredible, awesome, fantastic, phenomenal, extraordinary
- **Why:** Procurement requires factual, measured language

#### 3. Absolute Guarantees
- ❌ guaranteed, promise, ensure, 100%
- **Why:** No service can provide absolute guarantees; procurement requires realistic commitments

#### 4. Unverified Performance Claims
- ❌ "50% faster", "3x more efficient", "200% increase"
- **Why:** Performance claims must be verified and documented; unverified metrics are not procurement-appropriate

#### 5. Unverified Customer Numbers
- ❌ "thousands of customers", "millions of users", "trusted by 500+ companies"
- **Why:** Customer numbers must be verifiable; unverified claims undermine credibility

#### 6. SaaS Marketing Funnel Language
- ❌ free trial, sign up now, get started, limited time, special offer, pricing plans
- **Why:** This is a corporate website, not a SaaS product funnel

#### 7. Marketing Testimonials
- ❌ testimonial, case study, success story, client logo
- **Why:** Testimonials must be verified and documented; unverified testimonials are not procurement-appropriate

#### 8. Startup Pitch Language
- ❌ unicorn, rocket ship, scale fast, growth hacking, viral, exponential growth
- **Why:** Procurement contexts require stable, established language

#### 9. Buzzwords Without Context
- ❌ AI-powered, blockchain, web3, metaverse (without proper context)
- **Why:** Buzzwords without technical context are not procurement-appropriate

#### 10. Tracking Without Consent
- ❌ google-analytics, gtag, facebook pixel, mixpanel, segment.io
- **Why:** GDPR compliance requires consent mechanisms for tracking

### Required Patterns

The following content patterns **must be present** in appropriate files:

#### 1. GDPR/DSGVO Reference
- ✅ Must appear in: `src/app/contact/page.tsx`, `src/app/privacy`
- **Why:** Legal requirement for EU-based services

#### 2. Data Protection Reference
- ✅ Must appear in: `src/app/contact/page.tsx`
- **Why:** Transparency requirement for data processing

#### 3. Legal Entity Name
- ✅ Must appear in: `src/lib/branding.ts`, `src/components/Footer.tsx`
- **Format:** "SmartConnect CRM UG (haftungsbeschränkt)"
- **Why:** Legal requirement for German limited liability companies

#### 4. Public Sector / Procurement Reference
- ✅ Must appear in: `src/app/page.tsx`, `src/app/services/page.tsx`
- **Examples:** "öffentliche Auftraggeber", "public sector", "procurement", "tender"
- **Why:** Establishes target audience and context

#### 5. Compliance Reference
- ✅ Must appear in: `src/app/page.tsx`, `src/app/services/page.tsx`
- **Examples:** "Compliance", "compliance-orientiert"
- **Why:** Demonstrates commitment to regulatory requirements

#### 6. Documentation Reference
- ✅ Must appear in: `src/app/page.tsx`, `src/app/services/page.tsx`
- **Examples:** "Dokumentation", "documentation"
- **Why:** Documentation is critical for procurement and audit contexts

## GitHub Actions Integration

The validation is integrated into the CI/CD pipeline via GitHub Actions:

**Workflow File:** `.github/workflows/procurement-validation.yml`

**Triggers:**
- Pull requests to `main` or `develop`
- Pushes to `main`
- Manual workflow dispatch

**Actions:**
1. Checkout code
2. Setup Node.js 20
3. Install dependencies
4. Install tsx globally
5. Run validation script
6. Upload validation report as artifact
7. Comment on PR with validation results (if PR)
8. Fail workflow if validation fails

**Artifacts:**
- Validation reports are stored as GitHub Actions artifacts for 30 days
- Reports are also commented directly on pull requests

## Pre-Merge Checklist

Before merging any PR that modifies content files (`src/**`), ensure:

- [ ] Local validation passes: `npm run validate:procurement`
- [ ] GitHub Actions validation workflow passes
- [ ] No forbidden patterns introduced
- [ ] All required patterns still present
- [ ] Validation report reviewed and approved

## Extending Validation

To add new validation rules:

1. **Edit:** `scripts/validate-procurement.ts`
2. **Add forbidden patterns:** Update `FORBIDDEN_PATTERNS` array
3. **Add required patterns:** Update `REQUIRED_PATTERNS` array
4. **Test locally:** Run `npm run validate:procurement`
5. **Commit changes:** Include updated validation script

### Example: Adding a New Forbidden Pattern

```typescript
const FORBIDDEN_PATTERNS = [
  // ... existing patterns
  { 
    pattern: /\b(new-forbidden-term)\b/gi, 
    reason: "Explanation of why this term is not procurement-appropriate" 
  },
]
```

### Example: Adding a New Required Pattern

```typescript
const REQUIRED_PATTERNS = [
  // ... existing patterns
  { 
    pattern: /required-term/i, 
    reason: "Explanation of why this term is required", 
    files: ["src/app/page.tsx"] 
  },
]
```

## Troubleshooting

### Validation Fails Locally But Passes in CI

**Cause:** Different file states between local and remote
**Solution:** 
```bash
git pull origin main
npm run validate:procurement
```

### False Positive Detection

**Cause:** Pattern matches legitimate content
**Solution:** 
1. Review the context in the validation report
2. If legitimate, refine the regex pattern in `scripts/validate-procurement.ts`
3. Add comments in code to explain why the term is appropriate

### Missing Required Pattern

**Cause:** Required content was removed or moved
**Solution:**
1. Check the validation report for which pattern is missing
2. Restore the required content in the appropriate file
3. Re-run validation

## Best Practices

### Content Writing Guidelines

When writing content for the SmartConnect CRM website:

1. **Use factual, measured language**
   - ✅ "Structured implementation"
   - ❌ "Revolutionary approach"

2. **Avoid absolute claims**
   - ✅ "Designed to support compliance requirements"
   - ❌ "Guaranteed 100% compliance"

3. **Use procurement-appropriate terminology**
   - ✅ "Deliverables", "scope", "documentation", "audit-ready"
   - ❌ "Game-changing", "disruptive", "viral"

4. **Reference compliance and regulations**
   - ✅ "GDPR-compliant data processing"
   - ✅ "Documented for audit contexts"

5. **Maintain transparency**
   - ✅ "No unverified claims or metrics"
   - ✅ "Clear scope and boundaries"

### Code Review Guidelines

When reviewing PRs that modify content:

1. **Check validation status** in GitHub Actions
2. **Review validation report** for any warnings
3. **Verify tone** matches procurement context
4. **Ensure compliance language** is maintained
5. **Confirm legal entity names** are correct

## Support

For questions or issues with the procurement validation system:

1. **Review this documentation** first
2. **Check validation report** for specific issues
3. **Review validation script** (`scripts/validate-procurement.ts`) for pattern definitions
4. **Contact:** admin@smartclientcrm.com

## Version History

- **v1.0.0** (2026-01-14): Initial procurement validation system
  - Forbidden patterns for marketing hype and unverified claims
  - Required patterns for compliance and transparency
  - GitHub Actions integration
  - Automated PR comments

---

**Last Updated:** 2026-01-14  
**Maintained By:** SmartConnect CRM UG (haftungsbeschränkt)
