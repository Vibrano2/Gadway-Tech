# Custom Domain Setup Guide for Vercel

## Domain: gadwaytech.online

### Step 1: Add Domains to Vercel

#### Via Vercel Dashboard (Recommended):
1. Go to https://vercel.com/dashboard
2. Click on your project: **gadway-tech-sales-funnel**
3. Go to **Settings** → **Domains**
4. Add both domains:
   - `gadwaytech.online` (root domain)
   - `www.gadwaytech.online` (www subdomain)
5. Vercel will show you the DNS records you need to add

#### Via CLI:
```bash
vercel domains add gadwaytech.online gadway-tech-sales-funnel
vercel domains add www.gadwaytech.online gadway-tech-sales-funnel
```

### Step 2: Configure DNS Records

You need to add these DNS records in your domain registrar (where you bought gadwaytech.online):

#### For Root Domain (gadwaytech.online):
- **Type**: `A` record
- **Name**: `@` or leave blank (depends on your DNS provider)
- **Value**: `76.76.21.21` (Vercel's IP - this may change, check Vercel dashboard)
- **TTL**: `3600` or default

**OR** (if A record doesn't work):
- **Type**: `CNAME` record
- **Name**: `@` or leave blank
- **Value**: `cname.vercel-dns.com`
- **TTL**: `3600` or default

#### For WWW Subdomain (www.gadwaytech.online):
- **Type**: `CNAME` record
- **Name**: `www`
- **Value**: `cname.vercel-dns.com`
- **TTL**: `3600` or default

### Step 3: Verify DNS Configuration

After adding the DNS records:
1. Wait 5-10 minutes for DNS propagation
2. Check in Vercel dashboard - domains should show as "Valid Configuration"
3. Test both URLs:
   - https://gadwaytech.online
   - https://www.gadwaytech.online

### Step 4: SSL Certificate (Automatic)

Vercel automatically provisions SSL certificates for your domains. This usually takes a few minutes after DNS is configured correctly.

### Common DNS Providers Instructions:

#### Namecheap:
1. Go to Domain List → Manage
2. Go to Advanced DNS
3. Add records as shown above

#### GoDaddy:
1. Go to My Products → DNS
2. Add records in DNS Management

#### Cloudflare:
1. Go to DNS → Records
2. Add records (make sure proxy is OFF initially, or use DNS-only mode)

### Troubleshooting:

- **DNS not propagating?** Wait up to 48 hours (usually 5-30 minutes)
- **SSL not working?** Wait a few minutes after DNS is verified
- **Domain not found?** Double-check DNS records match exactly what Vercel shows

### Redirect Configuration:

Vercel automatically redirects www to root (or vice versa) based on your preference. You can configure this in:
- Settings → Domains → Configure redirects

