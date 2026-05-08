<div align="center">

# ✦ Ayush Sharma — Portfolio

### DevOps Engineer · Cloud Architect · Agentic AI Enthusiast

[![Live Site](https://img.shields.io/badge/Live%20Site-agentic--ai--portfolio-6366f1?style=for-the-badge&logo=render&logoColor=white)](https://agentic-ai-portfolio-v4h9.onrender.com)
[![Docker](https://img.shields.io/badge/Docker-nginx%3Aalpine-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://hub.docker.com/_/nginx)
[![Deploy on Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com)
[![GitHub](https://img.shields.io/badge/GitHub-meetayush2016-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/meetayush2016)

<br/>

> A minimal, modern, fully containerised personal portfolio — built with zero frameworks,
> zero dependencies, and zero build steps. Pure HTML · CSS · JavaScript · Docker · Nginx.

<br/>

**[→ View Live Portfolio](https://agentic-ai-portfolio-v4h9.onrender.com)**

<br/>

![Portfolio Preview](https://img.shields.io/badge/Theme-Light%20%2F%20Dark%20Toggle-6366f1?style=flat-square)
![Particles](https://img.shields.io/badge/Animation-Canvas%20Particles-6366f1?style=flat-square)
![Responsive](https://img.shields.io/badge/Layout-Fully%20Responsive-6366f1?style=flat-square)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Sections](#-sections)
- [How It Works](#-how-it-works)
- [Local Development](#-local-development)
- [Docker Setup](#-docker-setup)
- [Deployment Pipeline](#-deployment-pipeline)
- [Customisation Guide](#-customisation-guide)
- [Performance](#-performance)

---

## 🧭 Overview

This repository contains the full source code for **Ayush Sharma's personal portfolio** — a single-page, static website designed to showcase DevOps engineering skills, cloud infrastructure experience, certifications, and projects (including AI-agentic work) to recruiters and hiring managers.

The portfolio was built with a deliberate constraint: **no frameworks, no npm, no build step**. Every byte that ships to the browser was written by hand. This makes the project trivially containerisable — the entire site fits inside an `nginx:alpine` Docker image and deploys to any container platform in under three minutes.

### Design Philosophy

| Principle | Implementation |
|---|---|
| **Zero dependencies** | No React, Vue, Angular, or npm packages |
| **Zero build step** | Files served as-is — what you write is what ships |
| **Themeable** | CSS custom properties for full light ↔ dark theming |
| **Animated but restrained** | Canvas particles give energy without distracting |
| **Container-native** | Dockerfile at the repo root, one command to run anywhere |

---

## 🌐 Live Demo

**[https://agentic-ai-portfolio-v4h9.onrender.com](https://agentic-ai-portfolio-v4h9.onrender.com)**

> ℹ️ **Note:** The site is hosted on Render's free tier. If the container has been idle for more than 15 minutes, the first visit may take ~30 seconds to cold-start. Subsequent visits are instant.

---

## ✨ Features

### Visual & UX
- **Oversized hero typography** — `clamp()`-based fluid font sizing, 900-weight Inter typeface, scales from 4rem on mobile to 7.5rem on widescreen
- **Canvas particle animation** — 55 floating dots rendered via the HTML5 Canvas API; proximity lines are drawn between dots within 120px of each other; fully vanilla JS, no external library
- **Dark / Light mode toggle** — one-click switch between a white (#ffffff) and near-black (#0d0d12) background; preference persisted in `localStorage`; respects `prefers-color-scheme` on first visit
- **Always-dark navbar** — the navigation bar stays dark regardless of the active theme, using fixed CSS custom properties
- **Scroll reveal animations** — elements fade up into view as you scroll, powered by `IntersectionObserver`; staggered delays for sibling elements
- **Hide-on-scroll navbar** — navbar slides out of view on scroll-down and reappears on scroll-up, maximising reading space
- **Smooth scroll** — all anchor links scroll smoothly to their target section with offset correction for the fixed navbar height
- **Active nav link highlighting** — the correct nav link is highlighted as you scroll through each section

### Content
- **Hero** — full-viewport entrance with name, title, subtitle, and two CTA buttons
- **About** — personal bio, stat cards (experience, tools, certifications, GitHub repos)
- **Skills** — 8 categorised skill groups including a highlighted AI & Agents section
- **Experience** — vertical CSS timeline with two Cognizant roles
- **Projects** — two detailed project cards (real EKS capstone + AI agentic project)
- **Certifications** — all four certifications with issuer branding
- **Contact** — email CTA + GitHub, LinkedIn, Twitter/X social links

### Technical
- **Fully responsive** — tested at 375px, 768px, 1024px, and 1440px viewports
- **Mobile hamburger menu** — animated hamburger → X transition, collapses on link click
- **Accessible** — semantic HTML, ARIA labels, `focus-visible` outlines, `prefers-reduced-motion` safe
- **Gzip compression** — Nginx compresses HTML, CSS, JS, and SVG responses
- **Security headers** — `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`
- **Static asset caching** — CSS/JS cached for 1 day, images/fonts cached for 7 days

---

## 🛠 Tech Stack

### Frontend

| Technology | Role |
|---|---|
| **HTML5** | Semantic page structure — single `index.html` file |
| **CSS3** | All styling via CSS custom properties, `clamp()`, CSS Grid, Flexbox |
| **Vanilla JavaScript** | All interactivity — particles, theme toggle, navbar, scroll reveal |
| **Inter (Google Fonts CDN)** | Primary typeface — weights 400, 500, 600, 700, 900 |
| **Font Awesome 6 (jsDelivr CDN)** | Brand icons (GitHub, LinkedIn, AWS, Microsoft) and UI icons |

### Infrastructure & Deployment

| Technology | Role |
|---|---|
| **Docker** | Containerises the static site; base image `nginx:alpine` (~25 MB) |
| **Nginx** | Web server inside the container; serves static files, handles gzip and caching |
| **Render.com** | Cloud hosting platform; builds Docker image on every push to `main` |
| **GitHub** | Source control and CI/CD trigger — a `git push` starts the entire deploy pipeline |

### CSS Architecture

The theming system is built entirely on **CSS custom properties** (variables). There are two token sets:

```css
/* Light theme — applied to :root */
--bg: #ffffff;
--text-primary: #0a0a0a;
--accent: #6366f1;

/* Dark theme — applied to [data-theme="dark"] on <html> */
--bg: #0d0d12;
--text-primary: #f0f0f8;
--accent: #818cf8;
```

Switching themes is a single attribute change on `<html>` — all colours update instantly via CSS cascade. No JavaScript style manipulation needed beyond toggling the attribute.

---

## 📁 Project Structure

```
agentic-ai-portfolio/
│
├── index.html               # The entire site — one file, all sections
│
├── css/
│   └── style.css            # All styles (theme tokens → reset → sections → responsive)
│
├── js/
│   └── main.js              # All interactivity (IIFE — theme, particles, navbar, reveal)
│
├── assets/                  # Static assets (images, custom SVGs — empty, reserved)
│   └── .gitkeep
│
├── decisions/               # Architecture Decision Records (ADRs)
│   └── 001-design-stack.md  # Documents why plain HTML/CSS/JS was chosen over frameworks
│
├── Dockerfile               # Container definition — nginx:alpine, copies static files
├── nginx.conf               # Nginx server block — routing, gzip, caching, security headers
├── task.md                  # Build task tracker (phase-by-phase checklist)
├── .gitignore
└── README.md
```

### Key File Responsibilities

**`index.html`** — The entire site lives here. Contains the `<canvas>` for particles, the navbar, and every content section (`#hero`, `#about`, `#skills`, `#experience`, `#projects`, `#certifications`, `#contact`). No templating, no partials — just well-structured semantic HTML.

**`css/style.css`** — Organised top-to-bottom: CSS custom property tokens → reset → typography → layout utilities → navbar → each section → scroll reveal → media queries. Light and dark theme tokens are defined at the top, making global rebranding a matter of changing a few hex values.

**`js/main.js`** — Wrapped in an IIFE to avoid polluting the global scope. Six self-contained `init*` functions are called on `DOMContentLoaded`:

```
initThemeToggle()   → manages data-theme attribute + localStorage
initNavbar()        → scroll shadow, hide-on-scroll, active link highlighting
initMobileMenu()    → hamburger toggle + close-on-link-click
initSmoothScroll()  → intercepts anchor clicks, scrolls with navbar offset
initScrollReveal()  → IntersectionObserver on [data-reveal] elements
initParticles()     → full canvas particle system
```

**`Dockerfile`** — Minimal Alpine-based image. Copies static files into `/usr/share/nginx/html/`, replaces the default Nginx config with a custom one, and starts Nginx in the foreground.

**`nginx.conf`** — Custom server block with: gzip compression, security response headers, 1-day cache for CSS/JS, 7-day cache for images/fonts, and a `try_files` SPA fallback.

---

## 📄 Sections

### Hero
Full-viewport centred section. The particle canvas (`<canvas id="particle-canvas">`) sits at `position: fixed; z-index: 0` behind all page content. The hero name uses `clamp(4rem, 10vw, 7.5rem)` — it scales fluidly with the viewport so it always fills the right amount of space.

### About
Two-column grid: a bio paragraph on the left, four stat cards on the right. The bio covers the DevOps background, Cybersecurity roots (B.Tech specialism), and emerging focus on agentic AI with Claude.

### Skills
Eight categorised skill groups rendered as pill tags. The **AI & Agents** group is visually distinguished with accent-coloured tags and a "New" badge — reflecting the actively developing skill rather than a long-established one.

### Experience
Vertical timeline using a CSS `::before` pseudo-element for the connecting line and absolutely-positioned dots for each entry. Two Cognizant roles: DevOps Engineer (Sep 2024–Present) and DevOps Intern (Jun–Sep 2024).

### Projects
Two cards in a responsive CSS grid:

1. **AWS EKS Scalable Infrastructure** — Real Cognizant capstone. HA VPC with Terraform, EKS cluster with Helm and HPA, GitHub Actions CI/CD to ECR, ALB Ingress + Route53.

2. **InfraAgent — Autonomous Cloud Ops Assistant** — Demonstrates agentic AI skills. A Python agent using the Claude API that monitors CloudWatch alarms via EventBridge, decides on remediation using Claude's tool-use capability, executes Ansible playbooks, and posts audit-ready summaries to Slack and DynamoDB.

### Certifications
Four certification cards with AWS (orange) and Microsoft (blue) brand colours:
- AWS Certified Cloud Practitioner
- Microsoft Azure Fundamentals AZ-900
- Microsoft Identity & Access Administrator SC-300
- Microsoft Azure AI Fundamentals AI-900

### Contact
Centred section with an email button and three social links (GitHub, LinkedIn, Twitter/X).

---

## ⚙️ How It Works

### Particle System (Canvas API)

The particle animation runs entirely in the browser using the HTML5 Canvas API — no external library.

```
1. On load: 55 particles are created with random x/y positions and random velocity vectors
2. Every frame (requestAnimationFrame):
   a. Each particle moves by its velocity vector
   b. If a particle hits a canvas edge, its velocity on that axis is reversed (bounce)
   c. Canvas is cleared
   d. For every pair of particles: if distance < 120px, a line is drawn between them
      with opacity proportional to (1 - distance/120) — closer = more opaque
   e. Each dot is drawn as a filled circle
3. Accent colour (indigo) is read from the current theme on every frame —
   so particles automatically adapt when the theme is toggled
4. On tab hidden (visibilitychange): animation loop is paused to save CPU
5. On window resize (debounced 150ms): canvas dimensions reset and particles re-initialise
```

### Theme Toggle

```
1. On first visit: reads prefers-color-scheme media query → sets data-theme on <html>
2. On toggle click: flips data-theme between "light" and "dark", saves to localStorage
3. CSS cascade handles all colour changes instantly via custom properties
4. Sun/moon icon in the button updates to reflect the current state
```

### Scroll Reveal

```
1. All elements with [data-reveal] attribute start as opacity: 0, translateY(24px)
2. IntersectionObserver watches each element with threshold: 0.1
3. When 10% of the element enters the viewport:
   a. Its position among siblings is determined (for stagger delay)
   b. --delay CSS custom property is set on the element
   c. .revealed class is added → CSS transition plays
   d. Observer stops watching that element (animates once only)
```

---

## 💻 Local Development

No npm, no install step. Just serve the files over HTTP.

### Option 1 — Python (recommended, zero setup)

```bash
# Python 3
python -m http.server 3000

# Python 2
python -m SimpleHTTPServer 3000
```

Then open **http://localhost:3000** in your browser.

> ⚠️ Opening `index.html` directly as a `file://` URL works for basic layout checks but Google Fonts and Font Awesome (loaded from CDN) may be blocked by some browsers when served as a local file. Use a local server for accurate testing.

### Option 2 — VS Code Live Server extension

Install the **Live Server** extension, right-click `index.html` → **Open with Live Server**. Provides auto-reload on save.

### Option 3 — Node.js (if you have it)

```bash
npx serve .
```

---

## 🐳 Docker Setup

Run the exact same container that's live on Render — on your local machine.

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running

### Build the image

```bash
docker build -t ayush-portfolio .
```

This pulls `nginx:alpine` (~25 MB), copies your static files into the Nginx HTML root, and tags the image as `ayush-portfolio`.

### Run the container

```bash
docker run --rm -p 8080:80 ayush-portfolio
```

| Flag | Meaning |
|---|---|
| `--rm` | Automatically remove the container when stopped |
| `-p 8080:80` | Map your local port 8080 to container port 80 |

Then open **http://localhost:8080** in your browser.

### Verify it's working

```bash
# Should return 200
curl -o /dev/null -w "%{http_code}" http://localhost:8080

# Check security headers and gzip
curl -I http://localhost:8080/css/style.css
```

### Stop the container

Press `Ctrl + C` in the terminal where `docker run` is running (the `--rm` flag cleans it up automatically).

---

## 🚀 Deployment Pipeline

```
You (git push)
      │
      ▼
GitHub (meetayush2016/agentic-ai-portfolio)
      │   webhook on push to main
      ▼
Render.com
  ├── Pulls latest code from GitHub
  ├── Runs: docker build -t portfolio .
  │         └── FROM nginx:alpine
  │             └── COPY static files → /usr/share/nginx/html/
  ├── Pushes image to Render's internal registry
  ├── Stops old container, starts new container
  └── Routes traffic → https://agentic-ai-portfolio-v4h9.onrender.com
```

### Render Configuration

| Setting | Value |
|---|---|
| **Environment** | Docker |
| **Branch** | `main` |
| **Dockerfile path** | `./Dockerfile` |
| **Port** | 80 (auto-detected from `EXPOSE 80`) |
| **Auto-deploy** | Enabled — triggers on every push to `main` |
| **HTTPS** | Automatic via Render / Cloudflare |

### Triggering a redeploy

Any push to `main` automatically triggers a new build:

```bash
# Make a change, then:
git add .
git commit -m "update: your change description"
git push
```

Render picks it up in seconds, builds the new image (~1–2 min), and swaps the container with zero-downtime rolling deployment.

---

## 🎨 Customisation Guide

### Changing accent colour

Open `css/style.css` and update two values at the top of the file:

```css
:root {
  --accent: #6366f1;       /* Light theme accent */
}

[data-theme="dark"] {
  --accent: #818cf8;       /* Dark theme accent (slightly lighter for readability) */
}
```

### Adding a new project card

In `index.html`, find `<div class="projects-grid">` and copy an existing `<article class="project-card card">` block. Update the title, description, category tag, and tech stack spans.

### Adding a new skill group

Find `<div class="skills-grid">` in `index.html` and add a new block:

```html
<div class="skill-group" data-reveal>
  <h3 class="skill-group-label">Your Category</h3>
  <div class="skill-tags">
    <span class="skill-tag">Skill One</span>
    <span class="skill-tag">Skill Two</span>
  </div>
</div>
```

### Updating personal details

All content is in `index.html`. Search for the relevant text and update in place. Key locations:
- Name, title, subtitle → `#hero` section
- Bio text → `#about` section
- Email links → `href="mailto:..."` attributes
- Social links → `#contact` section

### Swapping fonts

Replace the Google Fonts `<link>` in `<head>` with your preferred font, then update the font stack in `css/style.css`:

```css
body {
  font-family: 'Your Font', system-ui, -apple-system, sans-serif;
}
```

---

## 📊 Performance

The site is intentionally lightweight:

| Asset | Size |
|---|---|
| `index.html` | ~14 KB |
| `css/style.css` | ~14 KB |
| `js/main.js` | ~5 KB |
| Docker image | ~25 MB (nginx:alpine) |
| **Total page weight** | **~33 KB** (before CDN assets) |

CDN assets (Inter font + Font Awesome) are loaded from Google Fonts and jsDelivr respectively — both are heavily cached globally and served from edge nodes close to the visitor.

---

## 👤 Author

**Ayush Sharma** — DevOps Engineer at Cognizant Technology Solutions

[![Email](https://img.shields.io/badge/Email-ayush.dev.2252%40gmail.com-6366f1?style=flat-square&logo=gmail&logoColor=white)](mailto:ayush.dev.2252@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-itsayush2252-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/itsayush2252/)
[![GitHub](https://img.shields.io/badge/GitHub-meetayush2016-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/meetayush2016)
[![Twitter](https://img.shields.io/badge/Twitter-itsayush2252-1DA1F2?style=flat-square&logo=x&logoColor=white)](https://x.com/itsayush2252)

---

<div align="center">

Built with HTML · CSS · JavaScript · Docker · Nginx · Deployed on Render

</div>
