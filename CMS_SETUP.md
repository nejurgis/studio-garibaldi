# 🎯 Decap CMS Setup Guide - For the Lawyer

**The lawyer can now edit the website WITHOUT knowing code!**

## How It Works

1. Lawyer goes to: `yoursite.com/admin`
2. Logs in with GitHub
3. Edits text visually
4. Clicks "Publish"
5. Website updates automatically (2-3 minutes)

---

## Step-by-Step Setup

### Step 1: Get Your GitHub Token

Decap CMS needs permission to update your GitHub repo.

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: `decap-cms`
4. Check these boxes:
   - ☑️ `repo` (full control of repositories)
   - ☑️ `workflow` (update GitHub Actions)
5. Click "Generate token"
6. **COPY the token** (you'll only see it once!)

### Step 2: Add to Netlify Secrets (if deploying to Netlify)

1. Go to Netlify dashboard
2. Site → Site settings → Build & deploy → Environment
3. Click "Edit variables"
4. Add new variable:
   - Key: `GITHUB_TOKEN`
   - Value: (paste the token from Step 1)

### Step 3: Update CMS Config

Edit `public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: YOUR_USERNAME/studio-garibaldi-astro    # ← Change this to YOUR repo
  branch: main
  auth_endpoint: api/auth
```

Replace `YOUR_USERNAME` with your GitHub username.

### Step 4: Test Locally

```bash
npm run dev
```

Visit: http://localhost:3000/admin

(It won't work yet locally without GitHub OAuth, but that's fine)

### Step 5: Deploy to Netlify

1. Push code to GitHub
2. Deploy to Netlify (click "Connect to Git")
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Step 6: Access the CMS

After deploying to Netlify:

1. Go to: `yoursite.com/admin`
2. Click "Login with GitHub"
3. Authorize the app
4. You're in!

---

## What the Lawyer Can Edit

### Pages Collection
The lawyer can edit:
- **Home** (English & Dutch)
- **About** (English & Dutch)

Each has:
- Title
- Description
- Full content (with formatting)

### Contact Info
The lawyer can edit:
- Email address
- Phone number
- Address

Changes appear on the website immediately.

---

## How to Add More Pages

### For Developer:

1. Add new file to `src/content/pages/`:
   - `services.en.md` (English)
   - `services.nl.md` (Dutch)

2. Add to `public/admin/config.yml` under collections

3. Create links in Navigation component

4. Redeploy

### For Lawyer:
- Can edit existing pages only
- Can't add new pages (dev only)

---

## Editing Content

### Homepage
1. Go to `/admin`
2. Click "Pages"
3. Click "Home"
4. Edit text
5. Click "Publish"

### About Page
1. Go to `/admin`
2. Click "Pages"
3. Click "About"
4. Edit with formatting (bold, lists, etc.)
5. Click "Publish"

### Contact Info
1. Go to `/admin`
2. Click "Contact Info"
3. Edit email/phone
4. Click "Publish"

---

## Troubleshooting

### "Can't login with GitHub"
- Check you have internet connection
- Check GitHub token is valid
- Check repo name is correct in `config.yml`

### Changes not showing
- Wait 2-3 minutes for deploy
- Clear browser cache (Ctrl+Shift+R)
- Check Netlify build status

### CMS looks broken
- Clear cookies
- Try incognito mode
- Check browser console for errors

---

## File Structure (Behind the Scenes)

```
src/content/
├── pages/              ← Editable pages
│   ├── home.en.md
│   ├── home.nl.md
│   ├── about.en.md
│   └── about.nl.md
├── contact/            ← Contact info
│   ├── info.en.md
│   └── info.nl.md
└── config.ts          ← Content schema

public/admin/
├── config.yml         ← CMS configuration
└── index.html         ← CMS interface
```

When the lawyer clicks "Publish", these markdown files get updated automatically on GitHub.

---

## Security Notes

✅ **Safe & Secure**
- Uses GitHub authentication
- Files stored on GitHub (your control)
- No third-party servers
- HTTPS encrypted

🔒 **Permissions**
- Lawyer can only edit content
- Can't delete pages
- Can't change code
- Can't break the website

---

## Advanced: GitHub OAuth Setup

For production, set up your own GitHub OAuth app:

1. Go to: https://github.com/settings/developers
2. Click "OAuth Apps" → "New OAuth App"
3. Fill in:
   - **Application name**: Studio Garibaldi CMS
   - **Homepage URL**: `https://yoursite.com`
   - **Authorization callback URL**: `https://yoursite.com/admin`
4. Copy:
   - Client ID
   - Client Secret
5. Add to Netlify environment variables

Then Decap uses YOUR app instead of theirs (better for production).

---

## Support

### Questions?
- Read Decap CMS docs: https://decapcms.org/docs
- Check Netlify docs: https://docs.netlify.com/

### Something broke?
- Try logging out and back in
- Clear browser cache
- Check Netlify build logs

---

## Summary

✅ **The lawyer can:**
- Edit pages from `/admin`
- Change text, titles, descriptions
- Update contact info
- See changes live in 2-3 minutes

❌ **The lawyer can't:**
- Break the website
- Access code
- Delete important files
- Change design

**Result**: Non-technical lawyer has full control over content! 🎉
