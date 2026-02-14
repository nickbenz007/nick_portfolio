# Nick's Portfolio

A modern, responsive portfolio website built with the latest web technologies. This portfolio showcases projects, professional experience, technical skills, and provides a way for visitors to get in touch.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat&logo=tailwind-css)

---

## ✨ Features

### For Visitors & Clients

- **Responsive Design** – Looks great on all devices from mobile phones to desktops
- **Project Showcase** – Browse through featured projects with detailed descriptions
- **Skills Overview** – Explore technical expertise and professional journey
- **Contact Form** – Easy way to get in touch directly from the website
- **Modern UI/UX** – Clean, professional design with smooth animations

### For Developers

- **Next.js 16 App Router** – Modern React framework with server-side rendering
- **TypeScript** – Full type safety for reliable code
- **Tailwind CSS v4** – Utility-first styling with modern CSS features
- **Framer Motion** – Smooth, production-ready animations
- **RESTful API Routes** – Built-in API endpoints for contact and projects

---

## 🛠 Tech Stack

| Category       | Technology                                     |
| -------------- | ---------------------------------------------- |
| **Framework**  | [Next.js 16](https://nextjs.org)               |
| **Language**   | [TypeScript](https://www.typescriptlang.org)   |
| **Styling**    | [Tailwind CSS 4](https://tailwindcss.com)      |
| **Animations** | [Framer Motion](https://www.framer.com/motion) |
| **Runtime**    | Node.js                                        |

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.18.0 or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd mern-portfolio

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

```bash
# Start the development server
npm run dev

# Open in browser
# Visit http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
mern-portfolio/
├── app/                          # Next.js App Router
│   ├── api/                     # API Routes
│   │   ├── contact/            # Contact form API
│   │   └── projects/           # Projects API
│   ├── components/             # Reusable React components
│   │   ├── cta/               # Call-to-action components
│   │   ├── layout/            # Layout components (Navbar, Footer)
│   │   ├── RecentAchievements/ # Stats and terminal components
│   │   └── sections/          # Page sections (Hero, Featured Projects)
│   ├── contact/               # Contact page
│   ├── projects/              # Projects listing page
│   ├── skills/                # Skills & journey page
│   └── lib/                   # Utility functions
├── public/                     # Static assets
│   ├── icons/                 # SVG icons
│   ├── logos/                 # Company logos
│   ├── profile/               # Profile images
│   └── projects/              # Project screenshots
└── Configuration files        # next.config.ts, tailwind.config.ts, etc.
```

---

## 🔧 Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

---

## 📄 License

This project is for personal portfolio use. All rights reserved to Nick.

---

## 📬 Contact

Feel free to reach out through the contact form on the website or connect via social media.

---

_Built with ❤️ using Next.js and modern web technologies_
