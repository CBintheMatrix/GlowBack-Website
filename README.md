# Glowback Website (Cloudflare Pages)

A Next.js marketing website for Glowback with a pilot application form that integrates with Cloudflare Turnstile and Resend for email delivery.

## Features

- **Static Export**: Configured for Cloudflare Pages deployment
- **Pilot Application Form**: Secure form with Turnstile anti-spam protection
- **Email Integration**: Form submissions sent via Resend API
- **Responsive Design**: Modern UI with Tailwind CSS
- **SEO Optimized**: Includes robots.txt, sitemap.xml, and meta tags

## Build Configuration

- **Next.js Static Export**: `output: 'export'`, `images.unoptimized: true`, `trailingSlash: true`
- **Build Command**: `npm ci && npm run build`
- **Output Directory**: `out/`

## Deploy on Cloudflare Pages

### 1. Create Pages Project
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Pages**
2. Click **Create** → **Connect to Git**
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm ci && npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (leave empty)

### 2. Environment Variables
In your Pages project → **Settings** → **Environment Variables**, add:

- `RESEND_API_KEY`: Your Resend API key from [resend.com](https://resend.com)
- `ADMIN_EMAIL`: Destination email for pilot applications (e.g., `cooper@glowback.io`)
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: Turnstile site key from [Cloudflare Dashboard](https://dash.cloudflare.com)
- `TURNSTILE_SECRET_KEY`: Turnstile secret key (server-side only)

### 3. Custom Domain
1. After first deploy → **Custom Domains**
2. Add `glowback.io` (and optionally `www.glowback.io`)
3. Configure DNS records as instructed
4. Wait for SSL certificate activation

## API Endpoint

The pilot form submits to `/api/apply` which is handled by a Cloudflare Pages Function at `functions/api/apply.ts`. This function:

1. Validates form fields (`name`, `email`, `hotelName`, `city`, `notes`)
2. Verifies Cloudflare Turnstile token
3. Sends email via Resend API
4. Returns JSON response

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## Environment Setup

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

## Testing

1. Visit `/pilot` page
2. Fill out the application form
3. Complete Turnstile challenge
4. Submit form
5. Check that email is received at `ADMIN_EMAIL`

## Project Structure

```
glowback-website/
├── app/                    # Next.js App Router pages
│   ├── pilot/page.tsx     # Pilot application form
│   └── ...
├── functions/             # Cloudflare Pages Functions
│   └── api/apply.ts      # Form submission handler
├── public/               # Static assets
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.svg
├── .env.example          # Environment variables template
└── README.md
```

## Security Notes

- Turnstile site key is exposed client-side (safe)
- Turnstile secret key is server-side only
- Resend API key is server-side only
- Form validation happens both client and server-side
- HTML is escaped in email content

## Support

For issues or questions, contact the development team.
