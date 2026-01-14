# SmartConnect CRM - Corporate Website

Official corporate website for **SmartConnect CRM UG (haftungsbeschränkt)** - A B2B and public-sector qualification/credibility asset for Mittelstand, enterprises, and tender-adjacent public bodies.

## 🎯 Project Overview

**Target Audience**: Mittelstand IT & Operations, Enterprises, Public-sector procurement bodies

**Brand Identity**: Corporate, sober, compliant, premium, structured

**Tech Stack**:
- Next.js 15+ (App Router)
- React 18
- TypeScript
- Tailwind CSS (dark mode enabled)
- shadcn/ui component system
- @react-three/fiber + drei (3D hero visualization)
- CSP middleware with nonce support

---

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deployment

```bash
# Quick deploy to Vercel
./deploy.sh preview    # Preview deployment
./deploy.sh production # Production deployment
```

📖 **Full deployment guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)  
⚡ **Quick start guide**: [QUICKSTART.md](./QUICKSTART.md)

---

## 📁 Project Structure

```
/vercel/sandbox/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── services/          # Services page
│   │   └── api/               # API routes
│   ├── components/            # React components
│   │   ├── hero/              # 3D hero components
│   │   ├── Header.tsx         # Site header
│   │   ├── Footer.tsx         # Site footer
│   │   └── ServiceCard.tsx    # Service card with accordion
│   ├── lib/                   # Utilities
│   │   └── branding.ts        # Brand identity constants
│   └── middleware.ts          # CSP enforcement
├── public/                    # Static assets
│   ├── brand/                 # Logo and brand assets
│   └── hero/                  # Hero poster images
├── vercel.json               # Vercel deployment config
├── .env.example              # Environment variables template
├── deploy.sh                 # Automated deployment script
├── DEPLOYMENT.md             # Full deployment guide
└── QUICKSTART.md             # Quick start guide
```

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` for development:

```bash
# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# CSP Mode: "off" | "report" | "enforce"
CSP_MODE=off
```

For production, configure in Vercel Dashboard:

```bash
NEXT_PUBLIC_SITE_URL=https://www.smartconnectcrm.eu
CSP_MODE=enforce
```

📄 **Full configuration**: [.env.example](./.env.example)

---

## 🎨 Features

### 3D Hero Visualization
- Three interlocked rings (gold/silver/diamond)
- Synchronized rotation animation
- Responsive camera positioning
- Graceful fallback with error boundary

### Content Security Policy (CSP)
- Nonce-based script/style injection
- Three.js worker and blob support
- CSP violation reporting endpoint
- Configurable enforcement modes

### Dark Mode
- System preference detection
- Manual toggle
- Persistent user preference
- Full component support

### Responsive Design
- Mobile-first approach
- Optimized for all device sizes
- Touch-friendly interactions
- Accessible navigation

---

## 🔒 Security

### CSP Configuration

Current CSP directives (in `src/middleware.ts`):

```typescript
script-src 'self' 'nonce-X' https: blob: data:
style-src 'self' 'nonce-X' https:
worker-src 'self' blob: data:
connect-src 'self' https: wss: blob: data:
```

### Security Headers

- ✅ Strict-Transport-Security (HSTS)
- ✅ X-Frame-Options: DENY
- ✅ X-Content-Type-Options: nosniff
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy

---

## 📊 Performance

### Build Metrics
- **Build Time**: ~2 minutes
- **Bundle Size**: 87.3 kB (First Load JS)
- **Static Pages**: 17 pages generated
- **Middleware**: 27.4 kB

### Optimization
- AVIF/WebP image formats
- Automatic code splitting
- Static page generation
- Aggressive caching (production)
- Edge runtime for CSP reporting

---

## 🧪 Testing & Validation

### Build Validation

```bash
# TypeScript validation
npx tsc --noEmit

# Linting
npm run lint

# Production build test
npm run build
```

### Runtime Testing

```bash
# Start production server
npm start

# Test endpoints
curl http://localhost:3000/
curl http://localhost:3000/services
curl http://localhost:3000/api/csp-report
```

---

## 📚 Documentation

- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Complete deployment guide
- **[QUICKSTART.md](./QUICKSTART.md)** - Quick start deployment
- **[.env.example](./.env.example)** - Environment variables
- **[vercel.json](./vercel.json)** - Vercel configuration

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Configured with Next.js rules
- **Prettier**: (Configure as needed)
- **Conventions**: Follow existing project patterns

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

### Manual Deployment

1. Build: `npm run build`
2. Upload `.next/` directory
3. Set environment variables
4. Start: `npm start`

---

## 📞 Support

### Resources
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com

### Project Info
- **Production URL**: https://www.smartconnectcrm.eu
- **Framework**: Next.js 15+
- **Deployment**: Vercel (Frankfurt region)
- **License**: (Add license information)

---

## 🔄 Continuous Deployment

**Production Branch**: `main`
- Automatic deployment on push
- Preview deployments for pull requests
- Rollback available in Vercel dashboard

**Workflow**:
1. Create feature branch
2. Make changes and commit
3. Push to GitHub
4. Create pull request → Preview deployment
5. Merge to main → Production deployment

---

## ⚠️ Important Notes

### Communication Rules
- ❌ No SaaS funnels or free trials
- ❌ No unverifiable claims or certifications
- ❌ No client names or testimonials
- ✅ Corporate, compliant, structured tone
- ✅ Tender-grade documentation
- ✅ GDPR compliance

### Technical Constraints
- Hero3D requires `ssr: false` (client-only)
- CSP must allow `blob:` and `data:` for Three.js
- Edge runtime for `/api/csp-report` only
- Node.js runtime for database/SMTP routes

---

**Last Updated**: January 14, 2026  
**Version**: 1.0.0  
**Maintained by**: SmartConnect CRM UG (haftungsbeschränkt)
