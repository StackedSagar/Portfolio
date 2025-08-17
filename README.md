
# 🚀 Dynamic Personal Portfolio Website

This is my personal portfolio website, a dynamic and interactive single-page application built with modern web technologies. It showcases my skills, projects, and professional background, and provides an easy way for visitors to connect with me.

**Live Demo:** [https://stackedsagar.github.io/Portfolio/docs/](https://stackedsagar.github.io/Portfolio/docs/)

---

## ✨ Features

* **Single-Page Design:** Smooth-scrolling navigation to all sections from a single page.
* **Fully Responsive:** Optimized for a seamless experience on desktops, tablets, and mobile devices.
* **Interactive UI:** Engaging animations and effects, including:
  * On-scroll animations powered by **AOS.js**.
  * A dynamic "typed" text effect with **Typed.js**.
  * Animated skill bars and counters that activate on scroll.
  * Interactive carousels and sliders with **Swiper.js**.
* **Service Details Page:** A dedicated page to provide more information about services offered.
* **Easy to Customize:** Clean and well-structured code makes it simple to update content.

---

## 🛠️ Technologies Used

* **Frontend:** HTML5, CSS3, JavaScript (ES6+)
* **Frameworks & Libraries:**
  * [Bootstrap 5](https://getbootstrap.com/): For responsive layout and components.
  * [jQuery](https://jquery.com/): For simplified DOM manipulation and event handling.
  * [AOS](https://michalsnik.github.io/aos/): For scroll animations.
  * [Swiper.js](https://swiperjs.com/): For touch-enabled sliders and carousels.
  * [Typed.js](https://github.com/mattboldt/typed.js/): For the typing animation.
  * [PureCounter](https://github.com/srexi/purecounterjs): For animated number counters.
  * [GLightbox](https://biati-digital.github.io/glightbox/): For an elegant lightbox for images and videos.
* **Deployment:** [GitHub Pages](https://pages.github.com/)

---

## 📂 Project Structure

```
docs/
│
├── index.html              # Main single-page layout
├── service.html            # Service details page
│
├── assets/
│   ├── css/
│   │   └── theme.css       # Main stylesheet
│   │
│   ├── js/
│   │   └── main.js         # Core JavaScript logic
│   │
│   └── img/                # Images, logos, and other assets
│
└── README.md               # This file
```

---

## 🔧 How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/StackedSagar/Portfolio.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Portfolio/docs
   ```
3. Open `index.html` in your browser to view the website locally.
4. Customize the content by editing `index.html` and `service.html` with your personal information, projects, and skills.
5. Replace the images in the `assets/img/` folder with your own.

---

## 🌍 Deployment on GitHub Pages

1. Push your changes to the `main` branch of your GitHub repository.
2. In your repository settings, navigate to the **Pages** tab.
3. Under the "Build and deployment" section, select **GitHub Actions** as the source. If you prefer not to use actions, you can deploy from a branch. Select the `main` branch and the `/docs` folder as the source.
4. Save your changes. Your portfolio will be live at

```
https://StackedSagar.github.io/portfolio/
```
