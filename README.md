📌 Portfolio Website – Batbayar Altanbagana

A modern, responsive software engineering portfolio built with Next.js (App Router) and Tailwind CSS, showcasing projects, a resume, and a contact form with server-side API handling.

🔗 Live Demo: https://portfolio-nextjs-nu-bay.vercel.app/

📄 Resume: https://portfolio-nextjs-nu-bay.vercel.app/resume

🚀 Tech Stack

Frontend: Next.js 14, React, TypeScript

Styling: Tailwind CSS, Dark Mode

Backend (Light): Next.js API Routes

Deployment: Vercel

Tooling: Git, GitHub

✨ Features

Responsive portfolio layout

Project listing with dynamic routes (/projects/[slug])

SEO optimization (metadata & dynamic titles)

Dark mode support

Resume page with embedded PDF + download

Contact form with server-side API route

Clean, scalable project structure

📂 Project Structure
app/
├── page.tsx                # Home page
├── projects/               # Project listing & dynamic detail pages
├── resume/                 # Resume page
├── contact/                # Contact form page
├── api/contact/route.ts    # API route for form submission
components/                 # Reusable UI components
data/                       # Project data
public/                     # Static assets (resume, images)

🧠 Key Technical Highlights

Uses Next.js App Router with server & client components

Dynamic routing with SEO-friendly metadata

API routes demonstrate backend logic without external services

Tailwind-based design system with light/dark themes

Production-ready deployment on Vercel

🛠️ Getting Started (Local Development)
git clone https://github.com/batbyr-hub/portfolio-nextjs.git
cd portfolio-nextjs
npm install
npm run dev


Open: http://localhost:3000

📬 Contact Form (Phase 1)

Form submits data to /api/contact

Server logs submission (Phase 1)

Designed to be extended with an email service or a database later

🔮 Future Enhancements (Phase 2)

Email delivery (Resend / EmailJS)

Backend integration (FastAPI or Django)

Admin dashboard for content

Analytics & performance tracking

Custom domain

👤 Author

Batbayar Altanbagana
Software Engineer
📍 Denver, CO
🌐 Portfolio: https://portfolio-nextjs-nu-bay.vercel.app/

💼 GitHub: https://github.com/batbyr-hub
