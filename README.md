# Osama Portfolio Website

A modern, dark-themed personal portfolio built with Next.js 15, React 19, TypeScript, and Tailwind CSS. It showcases professional work, drawings, technical documentation, and prototyping parts with smooth animations and a responsive layout.

## ✨ Features
- Responsive layout with a dark theme
- Animated UI using Framer Motion
- Sticky navbar with section navigation
- Scroll-to-top button and scroll progress bar
- Lightbox-ready gallery support
- Font Awesome and React Icons integration
- Deployed-ready for Vercel

## 🧰 Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: @fortawesome/fontawesome-free, react-icons
- **Gallery/Lightbox**: yet-another-react-lightbox

## 📁 Project Structure (high level)
```
src/
  app/
    layout.tsx                    # Root layout, metadata, favicon, fonts
    page.tsx                      # Home composition (navbar, portfolio, footer)
  components/
    Navbar.tsx                    # Sticky navigation bar
    Portfolio.tsx                 # Aggregates all sections
    Projects.tsx
    InternshipsAndCertificates.tsx
    CadScreenshots.tsx
    DrawingsSection.tsx
    TechnicalDocumentation.tsx
    PartsAndPrototyping.tsx
    Contact.tsx
    ScrollProgressBar.tsx         # Smooth scroll indicator
    ScrollToTop.js                # Floating scroll-to-top button
    ParametricMeshBackground.tsx  # 3D wireframe topology background
  public/
    assets/                       # CV and presentation (.pdf, .ppt)
    images/                       # Portfolio images, previews, logos

```

## 🖼️ Content & Assets
- All images in `public/images/`.
- CV and presentation files live in `public/assets/`.
- Favicon and site logo (e.g. `mo-logo.png`) are also placed in `public/images/` for use in metadata.

## 🧩 Key Files
- `src/app/layout.tsx` – App-wide metadata, fonts, and global styles
- `src/app/page.tsx` – Home composition (`navbar`, `portfolio`, `ScrollToTop`)
- `src/components/portfolio.tsx` – Main portfolio composition and sections
- `src/app/globals.css` – Global CSS + Tailwind layers
- `tailwind.config.ts` – Tailwind configuration

## 🎨 Styling & Icons
- Tailwind utility classes are used throughout components.
- Font Awesome is imported in `page.tsx` via `@fortawesome/fontawesome-free/css/all.min.css`.
- Additional icons via `react-icons`.

## ☁️ Deployment (Vercel)
This project is optimized for deployment on Vercel.

## 📄 License
This repository is for personal portfolio use. If you intend to reuse parts of the code or assets, please provide attribution and ensure you have rights to the images and documents included.

---

If you find this useful, feel free to star the repo. For inquiries or collaborations, open an issue or reach out.
