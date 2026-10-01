# Login Page UI

A responsive login page interface built with HTML and CSS, featuring a modern glassmorphism design with background image overlay, icon integration, and smooth hover transitions.

## Overview

This project is a frontend login page created as a personal learning exercise in web design. It demonstrates a modern "glassmorphism" aesthetic — a frosted-glass effect with a blurred, semi-transparent form overlaid on a full-screen background image.

The project was built to practice:

- Semantic HTML5 form structure
- CSS Flexbox for centering and layout
- Glassmorphism UI techniques (backdrop-filter, transparent borders)
- Third-party resource integration (Google Fonts, Boxicons CDN)
- Responsive design principles

## Features

- **Glassmorphism card** — semi-transparent form with backdrop blur and subtle border
- **Full-screen background** — responsive image that scales across all viewport sizes
- **Icon integration** — Boxicons user and lock icons inside input fields
- **Hover transitions** — smooth underline and scale effects on interactive links
- **Responsive layout** — flexbox-centered form that adapts to screen size
- **Form validation** — `required` attributes on username and password fields

## Technologies Used

- **HTML5** — semantic structure, form elements
- **CSS3** — flexbox, glassmorphism, transitions, responsive design
- **Boxicons** — icon library via CDN (`unpkg.com/boxicons`)
- **Google Fonts** — Poppins font family via CDN

## Source Code Analysis

### HTML (`main.html`)

The page uses a single `<div class="main">` containing a `<form>` element with:

- A heading (`<h1>Login</h1>`)
- Two input textboxes (username and password) with embedded Boxicons icons
- A checkbox row with "Remember Me" and "Forget Password" link
- A submit button
- A register prompt linking to a registration page

The HTML links to Boxicons CSS and the local `main.css` stylesheet.

### CSS (`main.css`)

Key styling techniques observed:

- `@import` for Google Fonts (Poppins, weights 300–800)
- `backdrop-filter: blur(20px)` for the glassmorphism effect
- `background: transparent` with `rgba(255, 255, 255, .2)` borders on the form card
- Flexbox centering on both body (`justify-content` / `align-items`) and checkbox row
- `background-size: cover` with `background-position: center` for the full-screen image
- CSS transitions on hover states (`text-decoration: underline`, `transform: scale(1.02)`)
- Rounded form elements (`border-radius: 40px` for pills, `15px` for the card)

## Screenshots

> [Screenshot pending — the repository includes `img.jpg` as the background image]

![Login Page Screenshot](https://github.com/lyn514/mona/raw/main/img.jpg)

## How It Works

The login page is a static frontend — no JavaScript or backend logic. When a user opens `main.html` in a browser:

1. The page loads the Poppins font and Boxicons icon set from CDN
2. The body is styled as a flex container centered both vertically and horizontally
3. The background image (`img.jpg`) fills the viewport with `background-size: cover`
4. The form card appears as a semi-transparent, blurred overlay (glassmorphism)
5. Input fields display username/password fields with embedded icons
6. Links have hover effects (underline + slight scale animation)

The form's `action` attribute is empty, so form submission does not currently send data anywhere.

## How to Run

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/lyn514/mona.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mona
   ```

3. Open `main.html` in your web browser:

   ```
   Open main.html in your preferred browser
   ```

   No build step or local server is required.

## What I Learned

- How to implement **glassmorphism** using `backdrop-filter` and transparent colors
- How to use **CSS Flexbox** for full-viewport centering
- How to integrate **third-party CDNs** (fonts and icon libraries)
- How to structure **semantic HTML forms** with proper input labels and validation
- How to create **responsive designs** that adapt to different screen sizes

## Future Improvements

- Add JavaScript form validation before submission
- Connect to a backend or authentication service
- Implement a registration page (the HTML includes a registration link)
- Add password visibility toggle functionality
- Improve accessibility (ARIA labels, focus management)

## Author

**Ms. Rovelyn C. Lani**  
Second Year BSIT Student | Aspiring Software Engineer  
GitHub: [@lyn514](https://github.com/lyn514)  
Email: rovelyn_lani@sjp2cd.edu.ph

---

*Instructor: Sir Christian Birot*  
*GitHub: [@serowan1098](https://github.com/serowan1098)*