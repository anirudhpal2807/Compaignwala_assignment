# CampaignWala - Work From Home Jobs Platform

A modern, responsive frontend website for a telecalling company offering work-from-home opportunities. Built with React, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **React 18+** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server

## 📁 Project Structure

```
campaignwala/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Footer.jsx      # Site footer
│   │   ├── Button.jsx      # Reusable button component
│   │   └── Card.jsx        # Glassmorphism card component
│   ├── pages/
│   │   ├── Home.jsx        # Homepage with hero, features, etc.
│   │   ├── About.jsx       # About us page
│   │   ├── FAQ.jsx         # FAQ page with accordion
│   │   ├── Blog.jsx        # Blog listing page
│   │   └── Contact.jsx      # Contact form and details
│   ├── App.jsx             # Main app component with routing
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles and Tailwind imports
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Design Features

- **Modern Dark Theme** - Professional dark color scheme (#0B0F14, #0E1218)
- **Glassmorphism Cards** - Subtle glass effect with backdrop blur
- **Gradient Accents** - Blue/cyan gradients for primary actions
- **Smooth Animations** - Framer Motion powered transitions
- **Fully Responsive** - Mobile-first design approach
- **Accessible** - Semantic HTML and ARIA labels

## 🛠️ Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The development server will start at `http://localhost:5173`

## 📄 Pages & Routes

- `/` - Homepage with hero slider, features, growth path, blog preview
- `/about` - About us, company info, vision/mission, partners
- `/faq` - Frequently asked questions with accordion
- `/blog` - Blog posts grid layout
- `/contacts` - Contact form, map, and company details

## ✨ Key Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Modern dark theme with improved color palette
- ✅ Smooth scroll animations
- ✅ Hero slider with auto-rotation
- ✅ Interactive FAQ accordion
- ✅ Contact form with validation
- ✅ Google Maps integration
- ✅ SEO-friendly markup
- ✅ Accessible components
- ✅ Component-based architecture

## 🎯 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  dark: {
    bg: '#0B0F14',
    bgSecondary: '#0E1218',
    // ...
  },
  primary: {
    DEFAULT: '#3B82F6',
    // ...
  }
}
```

### Content

- Update company information in Footer and Contact pages
- Modify blog posts in `src/pages/Blog.jsx`
- Edit FAQ items in `src/pages/FAQ.jsx`
- Customize hero slides in `src/pages/Home.jsx`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel/Netlify

1. Push your code to GitHub
2. Connect your repository to Vercel/Netlify
3. Deploy automatically on push

### Environment Variables

No environment variables required for basic setup. Add them as needed for API integrations.

## 📝 Notes

- All images use Unsplash placeholders - replace with actual images
- Contact form currently simulates submission - connect to your backend API
- Google Maps embed uses a placeholder - update with your actual location coordinates

## 🤝 Contributing

This is a production-ready frontend template. Feel free to customize and extend as needed.

## 📄 License

This project is built for CampaignWala. Customize as needed for your use case.

