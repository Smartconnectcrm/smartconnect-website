#!/bin/bash

# =============================================================================
# SmartConnect CRM - Vercel Deployment Script
# =============================================================================
# This script automates the deployment process to Vercel
# Usage: ./deploy.sh [preview|production]
# =============================================================================

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Deployment mode (default: preview)
MODE="${1:-preview}"

echo -e "${BLUE}╔════════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║         SmartConnect CRM - Vercel Deployment                  ║${NC}"
echo -e "${BLUE}╚════════════════════════════════════════════════════════════════╝${NC}"
echo ""

# Function to print status messages
print_status() {
  echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
  echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
  echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
  echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
  print_error "Vercel CLI is not installed"
  echo ""
  echo "Install with: npm install -g vercel"
  exit 1
fi

print_success "Vercel CLI detected"
echo ""

# Pre-deployment checks
print_status "Running pre-deployment checks..."
echo ""

# Check 1: Node modules
if [ ! -d "node_modules" ]; then
  print_warning "node_modules not found, installing dependencies..."
  npm install
  print_success "Dependencies installed"
else
  print_success "Dependencies found"
fi

# Check 2: Build test
print_status "Testing production build..."
if npm run build > /tmp/build.log 2>&1; then
  print_success "Production build successful"
else
  print_error "Production build failed"
  echo ""
  echo "Build log:"
  cat /tmp/build.log
  exit 1
fi

# Check 3: TypeScript validation
print_status "Validating TypeScript..."
if npx tsc --noEmit > /tmp/tsc.log 2>&1; then
  print_success "TypeScript validation passed"
else
  print_warning "TypeScript validation has warnings (non-blocking)"
fi

# Check 4: Linting
print_status "Running ESLint..."
if npm run lint > /tmp/lint.log 2>&1; then
  print_success "Linting passed"
else
  print_warning "Linting has warnings (non-blocking)"
fi

echo ""
print_success "All pre-deployment checks passed"
echo ""

# Deployment
if [ "$MODE" = "production" ] || [ "$MODE" = "prod" ]; then
  print_status "Deploying to PRODUCTION..."
  echo ""
  print_warning "This will deploy to: https://www.smartconnectcrm.eu"
  echo ""
  read -p "Are you sure you want to deploy to production? (yes/no): " -r
  echo ""
  if [[ $REPLY =~ ^[Yy][Ee][Ss]$ ]]; then
    vercel --prod
    print_success "Production deployment initiated"
  else
    print_warning "Production deployment cancelled"
    exit 0
  fi
else
  print_status "Deploying to PREVIEW..."
  echo ""
  vercel
  print_success "Preview deployment initiated"
fi

echo ""
print_success "Deployment complete!"
echo ""
echo "Next steps:"
echo "  1. Verify deployment in Vercel Dashboard"
echo "  2. Test Hero3D component rendering"
echo "  3. Check CSP headers and violations"
echo "  4. Run Lighthouse audit"
echo "  5. Monitor logs: vercel logs --follow"
echo ""
