# Step-by-Step Domain Setup for gadwaytech.online

## ✅ Step 1: Add Domains in Vercel Dashboard

The Vercel dashboard should now be open in your browser. If not, go to:
**https://vercel.com/dadvic03-gmailcoms-projects/gadway-tech-sales-funnel**

1. Click on **Settings** (in the top menu)
2. Click on **Domains** (in the left sidebar)
3. In the "Add Domain" field, enter: `gadwaytech.online`
4. Click **Add**
5. Add the www subdomain: `www.gadwaytech.online`
6. Click **Add**

## ✅ Step 2: Configure DNS Records

After adding domains, Vercel will show you the DNS records you need to add. Here's what you'll typically need:

### For Root Domain (gadwaytech.online):

**Option A - A Record (if supported by your DNS provider):**
- **Type**: `A`
- **Name**: `@` (or leave blank)
- **Value**: `76.76.21.21` (Vercel's IP - check dashboard for current value)
- **TTL**: `3600`

**Option B - CNAME Record (recommended):**
- **Type**: `CNAME`
- **Name**: `@` (or leave blank)
- **Value**: `cname.vercel-dns.com`
- **TTL**: `3600`

### For WWW Subdomain (www.gadwaytech.online):

- **Type**: `CNAME`
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`
- **TTL**: `3600`

## ✅ Step 3: Add DNS Records in Your Domain Registrar

Go to where you purchased `gadwaytech.online` (Namecheap, GoDaddy, Cloudflare, etc.):

1. Log into your domain registrar
2. Go to **DNS Management** or **Domain Settings**
3. Add the records shown above
4. Save changes

## ✅ Step 4: Wait for DNS Propagation

- DNS changes can take 5 minutes to 48 hours
- Usually takes 5-30 minutes
- Check status in Vercel dashboard - it will show "Valid Configuration" when ready

## ✅ Step 5: SSL Certificate (Automatic)

Vercel automatically provisions SSL certificates. This happens automatically after DNS is verified (usually within a few minutes).

## ✅ Step 6: Configure Redirects (Optional)

In Vercel Dashboard → Settings → Domains:
- You can choose to redirect `www` → root domain, or root → `www`
- Recommended: Redirect `www` → root (gadwaytech.online)

## 🔍 Verification

After setup, test both URLs:
- https://gadwaytech.online
- https://www.gadwaytech.online

Both should load your sales funnel!

## 📝 Common DNS Providers:

### Namecheap:
1. Domain List → Manage → Advanced DNS
2. Add records as shown above

### GoDaddy:
1. My Products → DNS → Manage DNS
2. Add records

### Cloudflare:
1. Select domain → DNS → Records
2. Add records (use DNS-only mode, not proxied)

### Google Domains:
1. DNS → Custom records
2. Add records

## ❓ Need Help?

If you encounter issues:
1. Check Vercel dashboard for specific DNS values
2. Verify DNS records match exactly
3. Wait for DNS propagation
4. Check Vercel dashboard for error messages

