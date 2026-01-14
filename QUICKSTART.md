# SmartConnect CRM - Quick Start Deployment

## 🚀 Deploy in 5 Minutes

### Prerequisites

- Node.js 18+ installed
- Vercel account (free tier works)
- Git repository (GitHub, GitLab, or Bitbucket)

---

## Method 1: Automated Script (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Run deployment script
./deploy.sh preview    # Deploy to preview
./deploy.sh production # Deploy to production
```

---

## Method 2: Manual Deployment

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Test Build Locally

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to verify everything works.

### Step 3: Deploy to Vercel

```bash
# Preview deployment
vercel

# Production deployment
vercel --prod
```

---

## Method 3: GitHub Integration (Zero Config)

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### Step 2: Import in Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Click "Deploy" (no configuration needed)

### Step 3: Configure Environment Variables

In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://www.smartconnectcrm.eu
CSP_MODE=enforce
```

---

## 🔧 Essential Configuration

### Required Environment Variables

| Variable | Value | Where to Set |
|----------|-------|--------------|
| `NEXT_PUBLIC_SITE_URL` | `https://www.smartconnectcrm.eu` | Vercel Dashboard |
| `CSP_MODE` | `enforce` | Vercel Dashboard |

### Optional: Custom Domain

1. **Vercel Dashboard** → Your Project → Settings → Domains
2. Add domain: `www.smartconnectcrm.eu`
3. Configure DNS:
   ```
   CNAME: www → cname.vercel-dns.com
   A: @ → 76.76.21.21
   ```

---

## ✅ Post-Deployment Checklist

After deployment, verify:

- [ ] Site loads: `https://your-project.vercel.app`
- [ ] Hero3D animates (three interlocked rings)
- [ ] Dark mode toggle works
- [ ] Services page accordion expands
- [ ] Mobile responsive design
- [ ] No console errors

---

## 🐛 Common Issues

### Issue: Hero3D Not Loading

**Solution**: Check CSP mode
```bash
# In Vercel Dashboard, set:
CSP_MODE=report  # Temporarily disable enforcement
```

### Issue: Build Fails

**Solution**: Test locally first
```bash
npm run build
# Fix any TypeScript or build errors
```

### Issue: Environment Variables Not Working

**Solution**: Redeploy after setting variables
```bash
vercel --prod --force
```

---

## 📚 Full Documentation

For detailed deployment instructions, see:
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment guide
- [.env.example](./.env.example) - All environment variables
- [vercel.json](./vercel.json) - Vercel configuration

---

## 🆘 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Project Issues**: (Add GitHub issues URL)

---

**Deployment Time**: ~3-5 minutes  
**Build Time**: ~2 minutes  
**Region**: Frankfurt (fra1)
