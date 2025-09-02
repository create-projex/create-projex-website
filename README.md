# create-projex Website

This is the official website for [create-projex](https://github.com/create-projex/create-projex) - a blazing-fast CLI tool to scaffold modern web projects.

## 🌐 Live Site

Visit the website at: [create-projex.com](https://create-projex.com)

## 🚀 Built With

- **React 19** - Latest React with modern features
- **TypeScript** - Type safety and better DX
- **Vite** - Lightning-fast build tool
- **Custom CSS** - Modern CSS with utility classes and custom design system
- **Heroicons** - Beautiful SVG icons

## ✨ Features

- **Modern Design** - Clean, professional, and responsive
- **Interactive Elements** - Copy buttons, animations, and smooth scrolling
- **Comprehensive Documentation** - Complete CLI reference and guides
- **Template Showcase** - Detailed information about all available templates
- **Mobile-Friendly** - Fully responsive design
- **Performance Optimized** - Fast loading and smooth animations

## 🏃‍♂️ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── Hero.tsx            # Landing section with CTA
│   ├── Features.tsx        # Feature highlights
│   ├── Templates.tsx       # Template showcase
│   ├── GettingStarted.tsx  # Step-by-step guide
│   ├── Documentation.tsx   # CLI reference
│   └── Footer.tsx          # Footer with links
├── App.tsx                 # Main app component
├── main.tsx               # Entry point
├── index.css              # CSS imports
├── styles.css             # Base styles and CSS variables
└── utilities.css          # Utility classes and components
```

## 🎨 Design System

The website uses a cohesive design system with:

- **Primary Colors**: Blue gradient (`--primary-500` to `--primary-600`)
- **Secondary Colors**: Green gradient (`--secondary-500` to `--secondary-600`)
- **Typography**: Inter font family with custom CSS variables
- **Animations**: Fade-up animations with staggered delays using CSS keyframes
- **Components**: Custom CSS utility classes and component-specific styles

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: `<768px`
- **Tablet**: `768px - 1023px`
- **Desktop**: `>=1024px`

## 🔧 Development

### Prerequisites

- Node.js >=18.17.0
- npm >=8.0.0

### Local Development

1. Clone the repository
2. Navigate to the website directory: `cd create-projex-website`
3. Install dependencies: `npm install`
4. Start the dev server: `npm run dev`
5. Open [http://localhost:5173](http://localhost:5173)

### Building

```bash
# Type check
npm run lint

# Build for production
npm run build

# The build output will be in the `dist/` directory
```

## 🚀 Deployment

The website can be deployed to any static hosting service:

- **Vercel** (Recommended)
- **Netlify**
- **Cloudflare Pages**
- **GitHub Pages**

## 📄 License

This project is licensed under the MIT License - see the main project's [LICENSE](../LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please see the main project's [CONTRIBUTING.md](../CONTRIBUTING.md) for guidelines.

---

Built with ❤️ for the developer community by [Dhruv Chheda](https://github.com/chhedadhruv)
