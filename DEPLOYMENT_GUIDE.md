# 🚀 Deployment Guide - Dhia Romdhane Portfolio

## Step 1: Push to GitHub

### 1.1 Create a New Repository on GitHub
1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon → **"New repository"**
3. Repository name: `portfolio` or `dhia-romdhane-portfolio`
4. Keep it **Public** (required for free Netlify deployment)
5. **DO NOT** initialize with README (we already have one)
6. Click **"Create repository"**

### 1.2 Push Your Code to GitHub

Copy and paste these commands in PowerShell (replace with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/dhiaromdhane/portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Netlify

### 2.1 Sign Up / Log In to Netlify
1. Go to [Netlify](https://app.netlify.com)
2. Sign up or log in (use your GitHub account for easier integration)

### 2.2 Import Your Repository
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Authorize Netlify to access your GitHub
4. Select your portfolio repository

### 2.3 Configure Build Settings
Netlify should auto-detect the settings from `netlify.toml`, but verify:

- **Branch to deploy**: `main`
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### 2.4 Deploy!
1. Click **"Deploy site"**
2. Wait 2-3 minutes for the build to complete
3. Your site will be live! 🎉

### 2.5 Customize Your Domain (Optional)
1. Go to **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Choose a custom subdomain like: `dhia-romdhane.netlify.app`

---

## 🔄 Future Updates

Whenever you make changes to your portfolio:

```bash
git add .
git commit -m "Description of your changes"
git push
```

Netlify will **automatically rebuild and redeploy** your site! ✨

---

## 📋 Current Repository Status

✅ Git initialized
✅ All files committed
✅ Ready to push to GitHub
✅ `netlify.toml` configured
✅ Build tested successfully

---

## 🛠️ Build Configuration

Your `netlify.toml` is already configured with:
- Node.js version 18
- Build command: `npm run build`
- Publish directory: `dist`
- SPA redirect rules for routing

---

## 🌐 What Happens After Deployment

Once deployed, your portfolio will be accessible at:
- `https://your-site-name.netlify.app`

Features that will work:
- ✅ 3D Black Hole animation
- ✅ Smooth scrolling navigation
- ✅ All project sections
- ✅ Contact information
- ✅ Mobile responsive design
- ✅ Fast loading times

---

## 🆘 Troubleshooting

**Build fails on Netlify?**
- Check the build logs in Netlify dashboard
- Ensure Node.js version is 18 or higher
- Verify all dependencies are in `package.json`

**3D model not loading?**
- Make sure `black_hole.glb` is committed to Git
- Check file size (should be ~28MB)

**Need help?**
- Check Netlify build logs
- Review the README.md for local testing

---

## 📊 Your Portfolio Stats

- **Total Projects**: 20+
- **Technical Skills**: 30+
- **Languages**: 4 (Arabic, French, English, Deutsch)
- **Sections**: 7 (Hero, Education, Experience, Skills, Languages, Projects, Contact)

---

**Ready to deploy!** 🚀

Follow the steps above to get your portfolio live on the internet.
