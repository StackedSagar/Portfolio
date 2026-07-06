# 🚀 Dynamic Personal Portfolio Website

This repository contains a polished personal portfolio website built as a responsive, interactive landing page for showcasing professional experience, services, and contact information.

**Live Demo:** [https://stackedsagar.github.io/Portfolio/](https://stackedsagar.github.io/Portfolio/)

---

## ✨ Highlights

- Responsive single-page layout with smooth scrolling and section-based navigation
- Modern visual design with animated sections, typed text, counters, and progress bars
- Dedicated service details page for extended content
- Improved accessibility with a skip link, keyboard focus states, and better mobile navigation behavior
- Easy-to-update content for personal branding, services, and contact details

---

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **UI & Layout:** Bootstrap 5
- **Animation & Interaction:** AOS, Swiper, Typed.js, PureCounter
- **Deployment:** GitHub Pages

---

# 🚀 Dynamic Personal Portfolio Website

This repository contains a personal portfolio website built as a responsive, single-page experience (plus a service details page) to showcase skills, projects, and services.

**Live Demo:** https://stackedsagar.github.io/Portfolio/

---

## ✨ Quick Highlights

- Responsive single-page layout with section navigation
- Animated UI using AOS, Typed.js, progress counters, and Swiper slides
- Accessibility improvements: skip link, keyboard focus states, and improved mobile nav
- Easy content updates in the `docs/` folder

---

## 🛠️ Technologies

- HTML5, CSS3, JavaScript (ES6+)
- Bootstrap 5
- AOS, Swiper.js, Typed.js, PureCounter
- Deployed to GitHub Pages (serve from `docs/`)

---

## 📂 Project Structure

```
docs/
├── index.html           # Main portfolio page
├── service.html         # Service details page
├── assets/
│   ├── css/theme.css    # Main stylesheet
│   ├── js/main.js       # Site behavior and interactions
│   └── img/             # Images and assets
└── README.md            # This file
```

---

## 🔧 Local development

Open the site locally by opening `docs/index.html` in your browser. For iterative editing:

```bash
git clone https://github.com/StackedSagar/Portfolio.git
cd Portfolio/docs
# open index.html in your editor or browser
```

Notes:
- The site uses several CDN-hosted libraries (AOS, Typed.js, Swiper, jQuery). If you want offline development, download those assets or run a simple static server.

---

## ✍️ Customization checklist

- Update the personal details in `docs/index.html` (name, headline, bio)
- Replace profile/hero images in `docs/assets/img`
- Update social links and contact email
- Replace the CV file at `docs/assets/cv/` and update the download link
- Add real project entries / case studies instead of placeholder stats

---

## 🌍 Deployment (GitHub Pages)

1. Push changes to the `main` branch.
2. In GitHub repository settings → Pages, set the source to `main` branch and `/docs` folder.
3. Wait a few minutes for the site to build; it will be available at `https://<username>.github.io/Portfolio/`.

---

## 💡 Suggested improvements (prioritized)

1. Projects & Case Studies — add a projects section with screenshots, descriptions, and links.
2. Contact Form — integrate a form service (Formspree, Netlify Forms) or a small serverless endpoint.
3. Image optimization — convert hero and project images to WebP/AVIF and provide responsive srcsets.
4. SEO & Social — add Open Graph and Twitter card metadata and JSON-LD schema for profile and projects.
5. Performance — defer non-critical scripts, enable caching headers, and measure Lighthouse scores.
6. Theming — add a light/dark theme toggle and persist preference in localStorage.

---

## 🧰 Maintenance notes

- Keep section IDs stable (`#about`, `#resume`, `#services`, `#contact`, etc.) — JS scrollspy relies on them.
- When adding new sections, update the nav menu in `docs/index.html` and verify focus/keyboard behavior.
- Check third-party CDN versions periodically and pin versions if stability is required.

---

If you want, I can open a PR with these README changes and implement one of the suggested improvements next (projects section or contact form).

