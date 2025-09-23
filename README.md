# Glowback Website

A modern, responsive marketing website for Glowback - the intelligent hotel operations platform that transforms guest experiences through seamless technology integration.

## 🌟 About Glowback

Glowback is revolutionizing hotel operations by connecting guests, staff, and managers through an intelligent service ecosystem. Our platform streamlines guest requests, optimizes staff coordination, and provides real-time insights for hotel management.

## ✨ Features

- **Modern Design**: Clean, professional interface built with Next.js and Tailwind CSS
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Pilot Program**: Exclusive founding partner application system
- **Performance Optimized**: Static site generation for fast loading times
- **SEO Ready**: Comprehensive meta tags, sitemap, and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🚀 Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React icon library
- **Deployment**: Cloudflare Pages with static export
- **Form Handling**: Secure form processing with anti-spam protection

## 📱 Mobile Experience

- **Progressive Web App**: Installable on mobile devices
- **Touch Optimized**: Large touch targets and smooth interactions
- **iOS Integration**: Custom app icons and home screen support
- **Responsive Typography**: Scales perfectly across all screen sizes

## 🏗️ Project Structure

```
glowback-website/
├── app/                    # Next.js App Router
│   ├── pilot/             # Pilot application page
│   ├── about/             # About page
│   ├── services/          # Services overview
│   └── components/        # Reusable UI components
├── components/            # Shared components
│   └── ui/               # Base UI components
├── public/               # Static assets
│   ├── favicon.svg       # Site favicon
│   ├── robots.txt        # SEO directives
│   └── sitemap.xml       # Site structure
└── functions/            # Serverless functions
    └── api/              # API endpoints
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Local Setup
```bash
# Clone the repository
git clone https://github.com/CBintheMatrix/GlowBack-Website.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

The website uses a carefully crafted design system with:
- **Color Palette**: Emerald green primary with slate grays
- **Typography**: Inter font family for optimal readability
- **Spacing**: Consistent 4px grid system
- **Components**: Reusable UI components with consistent styling

## 📄 Pages

- **Home** (`/`) - Main landing page with hero section and features
- **Pilot** (`/pilot`) - Founding partner application form
- **About** (`/about`) - Company information and mission
- **Services** (`/services`) - Platform capabilities overview
- **Benefits** (`/benefits`) - Value proposition and advantages
- **Roadmap** (`/roadmap`) - Product development timeline

## 🔒 Security & Privacy

- **Form Protection**: Anti-spam measures and input validation
- **Data Handling**: Secure form processing with proper sanitization
- **Privacy First**: No unnecessary data collection or tracking
- **HTTPS**: Secure connections with SSL certificates

## 📈 Performance

- **Static Generation**: Pre-built pages for optimal loading speeds
- **Image Optimization**: Responsive images with proper sizing
- **Code Splitting**: Automatic code splitting for faster initial loads
- **Caching**: Optimized caching strategies for static assets

## 🤝 Contributing

This is a private project for Glowback. For questions or support, please contact the development team.

## 📞 Contact

Visit [glowback.io](https://glowback.io) to learn more about our platform and apply for the founding partner program.

---

Built with ❤️ for the future of hotel operations.
