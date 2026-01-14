# SmartConnect CRM - Vercel Deployment Guide

## 🚀 Quick Deploy

### Option 1: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration

1. Push code to GitHub repository
2. Import project in Vercel Dashboard
3. Configure environment variables
4. Deploy automatically on push to `main` branch

---

## 📋 Pre-Deployment Checklist

### ✅ Code Verification

- [x] Production build successful (`npm run build`)
- [x] TypeScript compilation passed
- [x] ESLint validation passed
- [x] No hydration warnings
- [x] Hero3D component configured with `ssr: false`
- [x] CSP middleware compiled successfully

### ✅ Configuration Files

- [x] `vercel.json` - Deployment configuration
- [x] `next.config.mjs` - Next.js optimization
- [x] `.env.example` - Environment variable template
- [x] `.env.production.example` - Production variables template

### ✅ Runtime Configuration

- [x] **Edge Runtime**: `/api/csp-report` (CSP violation reporting)
- [x] **Node.js Runtime**: `/api/contact`, `/api/admin/contact-logs`
- [x] **Middleware**: CSP enforcement with nonce support

---

## 🔧 Environment Variables Configuration

### Required Variables

Configure these in **Vercel Dashboard → Settings → Environment Variables**:

| Variable | Value | Scope | Description |
|----------|-------|-------|-------------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.smartconnectcrm.eu` | Production | Public site URL (no trailing slash) |
| `CSP_MODE` | `enforce` | Production | CSP enforcement mode |
| `NODE_ENV` | `production` | Production | Node environment (auto-set by Vercel) |

### Optional Variables

| Variable | Example | Description |
|----------|---------|-------------|
| `DATABASE_URL` | `postgresql://user:pass@host:5432/db` | Database connection string |
| `SMTP_HOST` | `smtp.eu.mailgun.org` | SMTP server for email notifications |
| `SMTP_PORT` | `587` | SMTP port |
| `SMTP_USER` | `postmaster@mg.smartconnectcrm.eu` | SMTP username |
| `SMTP_PASSWORD` | `your-password` | SMTP password |
| `SMTP_FROM` | `noreply@smartconnectcrm.eu` | Email sender address |
| `SMTP_TO` | `contact@smartconnectcrm.eu` | Email recipient address |
| `ADMIN_API_KEY` | `generate-with-openssl` | Admin panel authentication |

### CSP Mode Options

```bash
# Development: No CSP enforcement
CSP_MODE=off

# Testing: Log violations without blocking
CSP_MODE=report

# Production: Block CSP violations (recommended)
CSP_MODE=enforce
```

---

## 🌍 Domain Configuration

### Custom Domain Setup

1. **Add Domain in Vercel Dashboard**
   - Navigate to: Project → Settings → Domains
   - Add: `www.smartconnectcrm.eu`
   - Add: `smartconnectcrm.eu` (redirect to www)

2. **Configure DNS Records**

   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600

   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600
   ```

3. **SSL Certificate**
   - Automatically provisioned by Vercel
   - Renewal handled automatically

### Redirect Configuration

The following redirects are configured in `vercel.json`:

- `smartconnectcrm.eu` → `www.smartconnectcrm.eu` (automatic)
- `/home` → `/` (permanent redirect)

---

## 🔒 Security Configuration

### Content Security Policy (CSP)

**Current Configuration** (in `src/middleware.ts`):

```typescript
script-src 'self' 'nonce-X' https: blob: data:
style-src 'self' 'nonce-X' https:
worker-src 'self' blob: data:
connect-src 'self' https: wss: blob: data:
```

**Why These Directives?**

- `blob:` - Required for Three.js Web Workers
- `data:` - Required for Three.js inline shaders
- `'nonce-X'` - Secure inline script/style injection
- `wss:` - WebSocket support for dev tools

### Security Headers

Configured in `vercel.json` and `next.config.mjs`:

- ✅ `Strict-Transport-Security` (HSTS)
- ✅ `X-Frame-Options: DENY`
- ✅ `X-Content-Type-Options: nosniff`
- ✅ `X-XSS-Protection: 1; mode=block`
- ✅ `Referrer-Policy: strict-origin-when-cross-origin`
- ✅ `Permissions-Policy` (camera, microphone, geolocation disabled)

---

## 📊 Performance Optimization

### Vercel Configuration

**Region**: `fra1` (Frankfurt, Germany)
- Optimal for European B2B/public-sector audience
- Low latency for Mittelstand and enterprise clients

**Function Configuration**:

| Route | Runtime | Memory | Max Duration |
|-------|---------|--------|--------------|
| `/api/contact` | Node.js | 1024 MB | 10s |
| `/api/admin/contact-logs` | Node.js | 1024 MB | 10s |
| `/api/csp-report` | Edge | 128 MB | 10s |

### Image Optimization

Configured in `next.config.mjs`:

- **Formats**: AVIF, WebP (automatic conversion)
- **Cache TTL**: 7 days
- **Device Sizes**: 360px - 1920px (responsive)
- **Lazy Loading**: Automatic for all images

### Caching Strategy

**Static Assets** (`/_next/static/*`):
```
Cache-Control: public, max-age=31536000, immutable
```

**Images** (`*.png, *.jpg, *.webp`):
```
Cache-Control: public, max-age=604800, immutable
```

---

## 🧪 Post-Deployment Validation

### 1. Verify Deployment

```bash
# Check deployment status
vercel ls

# View deployment logs
vercel logs <deployment-url>
```

### 2. Test Critical Paths

- [ ] **Homepage**: `https://www.smartconnectcrm.eu/`
  - Hero3D loads and animates
  - Company name displays correctly
  - Dark mode toggle works

- [ ] **Services Page**: `https://www.smartconnectcrm.eu/services`
  - ServiceCard accordion expands/collapses
  - All services render correctly
  - Mobile responsive layout

- [ ] **Contact Form**: `https://www.smartconnectcrm.eu/contact`
  - Form validation works
  - Submission succeeds (if configured)
  - Email notifications sent (if configured)

### 3. Security Validation

```bash
# Check CSP headers
curl -I https://www.smartconnectcrm.eu/ | grep -i "content-security-policy"

# Check security headers
curl -I https://www.smartconnectcrm.eu/ | grep -i "x-frame-options\|x-content-type"

# Check HSTS
curl -I https://www.smartconnectcrm.eu/ | grep -i "strict-transport-security"
```

### 4. Performance Testing

- **Lighthouse Audit**: Target scores
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 100

- **Core Web Vitals**:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

### 5. CSP Monitoring

Monitor CSP violations at:
```
https://www.smartconnectcrm.eu/api/csp-report
```

Check Vercel logs for CSP violation reports:
```bash
vercel logs --follow
```

---

## 🐛 Troubleshooting

### Hero3D Not Loading

**Symptoms**: 3D visualization doesn't render, shows loading state indefinitely

**Solutions**:
1. Check CSP mode: `CSP_MODE=report` (temporarily disable enforcement)
2. Verify `blob:` and `data:` are allowed in CSP
3. Check browser console for CSP violations
4. Ensure `ssr: false` is set in dynamic import

### Hydration Errors

**Symptoms**: "Text content does not match" warnings in console

**Solutions**:
1. Verify all client components have `"use client"` directive
2. Check for server/client timestamp mismatches
3. Ensure dynamic imports use `ssr: false` for client-only components

### CSP Violations

**Symptoms**: Resources blocked, console shows CSP errors

**Solutions**:
1. Set `CSP_MODE=report` to log violations without blocking
2. Review `/api/csp-report` logs in Vercel dashboard
3. Add necessary directives to `src/middleware.ts`
4. Redeploy after CSP updates

### Build Failures

**Symptoms**: Deployment fails during build phase

**Solutions**:
1. Run `npm run build` locally to reproduce
2. Check TypeScript errors: `npx tsc --noEmit`
3. Verify all dependencies installed: `npm install`
4. Check Vercel build logs for specific errors

---

## 📞 Support & Resources

### Vercel Documentation
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)

### Project Resources
- **Repository**: (Add GitHub URL)
- **Production URL**: https://www.smartconnectcrm.eu
- **Staging URL**: (Configure in Vercel)

### Contact
- **Technical Issues**: (Add support email)
- **Deployment Support**: (Add DevOps contact)

---

## 🔄 Continuous Deployment

### Automatic Deployments

**Production Branch**: `main`
- Automatic deployment on push
- Preview deployments for pull requests
- Rollback available in Vercel dashboard

**Deployment Workflow**:
```bash
# 1. Create feature branch
git checkout -b feature/new-feature

# 2. Make changes and commit
git add .
git commit -m "feat: add new feature"

# 3. Push to GitHub
git push origin feature/new-feature

# 4. Create pull request
# → Vercel creates preview deployment

# 5. Merge to main
# → Vercel deploys to production
```

### Manual Deployments

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Deploy specific branch
vercel --prod --branch=staging
```

---

## 📝 Deployment Checklist

### Before First Deployment

- [ ] Configure environment variables in Vercel Dashboard
- [ ] Set `CSP_MODE=enforce` for production
- [ ] Add custom domain `www.smartconnectcrm.eu`
- [ ] Configure DNS records
- [ ] Test contact form (if using email/database)
- [ ] Generate admin API key (if using admin panel)

### Before Each Deployment

- [ ] Run `npm run build` locally
- [ ] Run `npm run lint` to check code quality
- [ ] Test Hero3D component in production mode
- [ ] Verify dark mode functionality
- [ ] Check mobile responsive design
- [ ] Review git diff for unintended changes

### After Each Deployment

- [ ] Verify deployment succeeded in Vercel Dashboard
- [ ] Test homepage Hero3D rendering
- [ ] Test services page accordion
- [ ] Check CSP headers with curl
- [ ] Monitor CSP violation reports
- [ ] Run Lighthouse audit
- [ ] Test contact form submission

---

**Last Updated**: January 14, 2026  
**Version**: 1.0.0  
**Deployment Target**: Vercel (Frankfurt Region)
