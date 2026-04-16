Portfolio Website

A personal portfolio website built with React to showcase projects, skills, and background as a full stack developer.

Overview

This project is a single-page application (SPA) designed to present:

Personal introduction
Technical skills
Featured projects
Contact information

It uses reusable components and a structured layout to create a smooth scrolling experience between sections.

Features
Navigation
Sticky navigation bar present in every section
Smooth anchor-based navigation (#home, #about, etc.)
Section-Based Layout
Reusable Section component for consistent structure
Full-screen sections for:
Home
About
Skills
Projects
Contact
Conveyor Animation
Custom-built infinite scrolling conveyor belt
Displays technology icons
Implemented using useRef and requestAnimationFrame
Projects Showcase
Grid-based layout
Each project includes:
Description
GitHub link
Preview image
Contact Links
Direct links to:
LinkedIn
GitHub
Email
Tech Stack
Frontend
React
JavaScript (ES6+)
HTML5
CSS3
Concepts Used
React Hooks (useEffect, useRef)
Component reusability
DOM manipulation
Animation with requestAnimationFrame
Project Structure
src/
│── App.jsx        # Main application file
│── App.css        # Styling
│── assets/        # Images and icons
Key Components
Navbar

Reusable navigation bar displayed in every section.

Section

Wrapper component that:

Applies consistent layout
Injects the navbar automatically
Conveyor

Handles:

Infinite scrolling animation
Dynamic rendering of duplicated images
Smooth horizontal movement
Installation
Clone the repository:
git clone https://github.com/your-username/your-repo.git
Navigate into the project:
cd your-repo
Install dependencies:
npm install
Run the development server:
npm run dev
Usage
Open the app in your browser
Navigate through sections using the navbar
View projects and access their repositories
Use contact links to reach out
Future Improvements
Add responsive design improvements
Improve accessibility (ARIA labels, alt text)
Add animations/transitions between sections
Integrate a backend for dynamic project loading
Add dark/light theme toggle
Author

Michael A.

GitHub: https://github.com/silvamike1710-oss
LinkedIn: https://www.linkedin.com/in/michael-alexander17/
Deploy: https://portfolio-one-mu-94.vercel.app/