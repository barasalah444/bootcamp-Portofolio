# bootcamp-Portofolio
# Personal Portfolio Website

A modern, responsive, and lightweight personal portfolio website built from scratch using pure semantic HTML5, custom CSS3, and Vanilla JavaScript. The project features a premium Dark/Light mode interface with dynamic theme switching and an adaptive grid layout for showcasing projects.

## Features

* **Dynamic Theme Toggle:** Smooth transitioning between Dark and Light modes using JavaScript DOM manipulation and CSS Custom Variables.
* **Pure Vector Icons:** Integrated lightweight, resolution-independent SVG paths directly into the HTML to ensure fast loading times and zero dependency on heavy external icon libraries (like FontAwesome CDNs).
* **Responsive Grid Layout:** Features an auto-fitting project showroom built with CSS Grid that scales seamlessly across mobile, tablet, and desktop viewports without cluttered media queries.
* **Modern Custom Styling:** Designed with a clean, capsule-shaped navigation bar using Flexbox and styled with the elegant Cairo typography.

## Core Projects Highlighted

1.  **Personal Portfolio Website:** This current repository, exploring DOM states and theme management.
2.  **Bootstrap Web Project:** A responsive landing page built to master Bootstrap 5 utility classes and structural components.
3.  **Video Preview Component:** An interactive UI element incorporating tailored media controls directly inside the markup.

## Architecture & Logic Breakdown

### 1. Theme Management (Dark/Light Mode)
The switching logic depends on a unified relationship between three layers:
* **HTML:** Holds the global state inside a custom attribute: `data-theme="dark"`.
* **CSS:** Watches the attribute using attribute selectors and maps out corresponding color blocks via CSS native variables (`--bg-body`, `--text-main`).
* **JavaScript:** Listens to the click event on the toggle switch, manipulates the `data-theme` attribute value, and dynamically injects/removes visibility utility classes (`.hidden-icon`) to swap the Sun/Moon icons.

### 2. Layout & Responsiveness
* **Navigation Bar:** Engineered using `display: flex;` with `justify-content: space-between;` and vertical alignment centering.
* **Projects Section:** Leverages CSS Grid's powerful formula:
    ```css
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    ```
    This automatically wraps and stacks components when screen width constraints are met.

## File Structure

```text
├── index.htmltext   # Main markup containing semantic structures and inline SVGs
├── style.css    # Layout rules, global variables, and transition effects
└── main.js      # Theme toggling engine and DOM element selectors
