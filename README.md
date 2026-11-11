# Joshua Kruger - Developer Portfolio

A responsive single-page portfolio built with React 19, Vite, and Tailwind CSS v4, highlighting frontend architecture, custom scroll-driven choreography, and full-stack project showcases.

[![Live site](https://img.shields.io/badge/live-Netlify-00C7B7?logo=netlify&logoColor=white)](https://joshuaportfoliopage.netlify.app/)
[![React](https://img.shields.io/badge/React-19-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

**Production Deployment:** [joshuaportfoliopage.netlify.app](https://joshuaportfoliopage.netlify.app/)

---

## Table of Contents

- [Overview](#overview)
- [Architectural Highlights](#architectural-highlights)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Data Layer and Content Management](#data-layer-and-content-management)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contact](#contact)

---

## Overview

This repository hosts the source code for my personal developer portfolio. Built initially as the CDV05 milestone project at CodeSpace, the application focuses on high visual fidelity, predictable component composition, and responsive interactions.

### Architectural Highlights

- **Scroll-Scrub Choreography (`HeroAbout.jsx`)**: Implements a coordinated two-phase scroll transition uniting the Hero presentation and About bio. Desktop viewports calculate normalized scroll progression (`mapRange`) and imperatively mutate CSS transform/opacity properties across element references (`useRef`), bypassing React reconciler passes to maintain frame performance.
- **Dual Layout Strategy**: Separates desktop scrub animations from a dedicated mobile layout (`md:hidden`), avoiding excessive compute overhead and layout thrashing on touch viewports.
- **Dynamic Tag-to-Icon Mapping**: `Projects.jsx` utilizes an internal dictionary mapping technology tags to brand SVGs from `react-icons`, decoupling metadata from asset imports.
- **Modern Styling Pipeline**: Configured with Tailwind CSS v4 through `@tailwindcss/vite`, utilizing CSS theme tokens defined in `src/index.css`.

---

## Tech Stack

| Domain | Technology | Purpose |
| :--- | :--- | :--- |
| **Runtime & UI** | React 19 | UI component composition and view rendering |
| **Tooling & Bundler** | Vite 8 | Fast ESM development server and Rollup production builds |
| **Styling** | Tailwind CSS v4 | Utility-first CSS via `@tailwindcss/vite` |
| **Typography** | Google Fonts | Montserrat (Body text), Knewave (Accents) |
| **Icons** | React Icons | SVG iconography (`react-icons/si`, `react-icons/fa`, `react-icons/vsc`) |
| **Hosting** | Netlify | Continuous deployment synced with `main` branch |

---

## Project Structure

```text
portfolioPage/
├── index.html                   # HTML entry point (font preconnects and root mount)
├── package.json                 # Project dependencies and script declarations
├── vite.config.js               # Vite configuration with React and Tailwind plugins
├── public/                      # Static assets served from web root
│   ├── hero-bg.jpg              # Fixed backdrop image
│   ├── joshua-cutout.png        # Animated portrait cutout
│   ├── journey-line.svg         # Timeline decoration graphic
│   └── project-*-preview.png    # Preview assets for portfolio cards
└── src/
    ├── main.jsx                 # Application bootstrapping and React StrictMode mount
    ├── App.jsx                  # Root layout shell and section orchestration
    ├── index.css                # Global CSS imports and Tailwind theme declarations
    ├── data/                    # Normalized external data stores
    │   ├── projectsData.js      # Project registry (titles, descriptions, tags, URLs)
    │   └── faqData.js           # FAQ data store
    └── components/
        ├── Navbar.jsx           # Sticky navigation with scroll threshold awareness
        ├── HeroAbout.jsx        # Dual-viewport Hero and About section with scroll interpolation
        ├── Journey.jsx          # Career history and milestones timeline
        ├── Education.jsx        # Bootcamp and academic credentials showcase
        ├── Projects.jsx         # Card-based showcase mapping data to dynamic tech badges
        ├── FAQ.jsx              # Frequently asked questions section
        └── Footer.jsx           # Global page footer
```

---

## Data Layer and Content Management

Content is structured to keep presentation isolated from data records where appropriate.

### Managing Project Showcase (`src/data/projectsData.js`)

Each entry in the `projects` array accepts the following shape:

```javascript
{
    id: 1,
    number: "1.",
    title: "Trello Clone",
    description: "Full-stack project management board featuring JWT authentication, drag-and-drop mechanics, and Dockerised deployment.",
    tags: ["React", "Elixir", "Phoenix", "TailwindCSS"],
    image: "/project-1-preview.png",
    imageAlt: "Trello clone dashboard preview",
    liveUrl: "https://trello-clone-fus7.onrender.com",
    githubUrl: "https://github.com/krugerjoshua/Trello-Clone",
}
```

#### Field Specifications:

| Property | Type | Description |
| :--- | :--- | :--- |
| `id` | `number` | Unique key passed to the React reconciler. |
| `number` | `string` | Visual index marker displayed alongside the title. |
| `title` | `string` | Project display name. |
| `description` | `string` | Summary of architecture, features, and engineering constraints. |
| `tags` | `string[]` | Technology badges. If a tag matches `tagIconMap` in `Projects.jsx`, its corresponding brand icon and colour palette are rendered automatically. |
| `image` | `string` | Root-relative path referencing files in the `public/` directory. |
| `imageAlt` | `string` | Accessible text alternative for the preview thumbnail. |
| `liveUrl` | `string` | Link to production deployment. Setting this to `"#"` hides the external link button. |
| `githubUrl` | `string` | Link to public source repository. Setting this to `"#"` hides the repository button. |

### Supported Icon Badges

The `tagIconMap` dictionary in `src/components/Projects.jsx` currently supports:
- `React`, `JavaScript`, `TailwindCSS`, `TypeScript`, `Node.js`, `HTML`, `CSS`, `Python`, `Elixir`, `Phoenix`.

Unmapped tags render as standard text pills without an icon.

---

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/krugerjoshua/portfolioPage.git
   cd portfolioPage
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Navigate to `http://localhost:5173` in your browser.

---

## Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Boots the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and minifies assets into the `dist/` directory for production. |
| `npm run preview` | Runs a local web server serving the compiled `dist/` output for verification. |

---

## Deployment

The production environment is hosted on Netlify and continuously deployed from the `main` branch.

| Configuration | Value |
| :--- | :--- |
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist` |
| **Node Version** | Node.js 18+ |

---

## Contact

**Joshua Kruger**  
Software Developer | Cape Town, South Africa  

- Portfolio: [joshuaportfoliopage.netlify.app](https://joshuaportfoliopage.netlify.app/)
- GitHub: [github.com/krugerjoshua](https://github.com/krugerjoshua)
- LinkedIn: [linkedin.com/in/joshua-kruger-0990a9244](https://www.linkedin.com/in/joshua-kruger-0990a9244/)
- Email: [joshuakruger66@live.com](mailto:joshuakruger66@live.com)
