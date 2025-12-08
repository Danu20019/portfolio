// src/components/Projects.jsx
import React from "react";

const projects = [
  {
    title: "Fish Haven – Ornamental Fish Management System",
    period: "Feb 2025 – May 2025",
    type: "Full-stack MERN application",
    icon: "🐠",
    description:
      "Web-based system for managing ornamental fish orders and suppliers. Supports large-scale buyers, small-scale suppliers and exporters with order handling and stock tracking.",
    highlight:
      "I implemented the User Management (CRUD) module and helped design a clean, responsive interface using React and Tailwind CSS.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    demo: "",
    code: "https://github.com/Sanduni407/fish_haven-pub.git",   // UPDATED
  },
  {
    title: "Xpenda – Personal Finance Tracker App",
    period: "May 2025 – June 2025",
    type: "Android mobile application",
    icon: "📊",
    description:
      "A mobile app to track income and expenses, categorize spending and monitor monthly budgets with persistent storage.",
    highlight:
      "Developed using Android Studio and Kotlin with Shared Preferences for data persistence and optional data backup.",
    tech: ["Android Studio", "Kotlin", "XML", "Shared Preferences"],
    demo: "",
    code: "https://github.com/Danu20019/Android_studio_app.git",   // UPDATED
  },
  {
    title: "Craigslist Website UI/UX Redesign",
    period: "Aug 2025 – Sep 2025",
    type: "UI/UX case study",
    icon: "🎨",
    description:
      "Redesigned key Craigslist pages to fix cluttered navigation and poor visual hierarchy while improving consistency.",
    highlight:
      "I focused on the Create Post, About Us and For Sale pages and added a location-based filter with a clean, modern layout.",
    tech: ["Figma", "Wireframes", "Prototyping", "UI Design"],
    demo: "https://www.figma.com/design/tbookbKhYZBejkamLTRLoU/Craigslist?node-id=0-1&t=ppSeliD2ErTDUoAg-1",  // ADDED
    code: "", // You can add Figma prototype later if needed
  },
  {
    title: "Online Train Reservation & Ticket Booking",
    period: "Aug 2024 – Oct 2024",
    type: "Full-stack web project",
    icon: "🚆",
    description:
      "Train reservation system that allows users to search trains, book seats and manage ticket details with form validation and data storage.",
    highlight:
      "Built with HTML, CSS, JavaScript, JSP and MySQL – implemented core modules for feedback, contact and ticket management.",
    tech: ["HTML", "CSS", "JavaScript", "Java (JSP)", "MySQL"],
    demo: "",
    code: "https://github.com/Danu20019/train_ticket",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-12">
          <p className="text-base md:text-lg font-semibold tracking-[0.35em] text-sky-400 uppercase mb-4">
            Projects
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-50">
            Selected work & case studies
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            A mix of full-stack applications, Android apps and UI/UX case
            studies that highlight how I design and build user-centered
            solutions.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-6 sm:p-7 flex flex-col gap-4 shadow-lg shadow-blue-900/30 hover:-translate-y-2 hover:shadow-blue-700/50 transition-transform duration-300"
            >
              {/* glow border */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent" />

              {/* Header */}
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-50 group-hover:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-blue-300">
                    {project.type}
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    {project.period}
                  </p>
                </div>
                <div className="shrink-0 text-3xl sm:text-4xl">
                  {project.icon}
                </div>
              </div>

              {/* Body */}
              <div className="relative">
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
                <p className="mt-2 text-xs text-slate-400 italic">
                  {project.highlight}
                </p>

                {/* Tech tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-full bg-slate-800/80 px-3 py-1 text-[11px] font-medium text-slate-200 border border-slate-700/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="relative mt-4 flex flex-wrap gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-blue-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-500/40 hover:bg-blue-400 transition-colors"
                  >
                    Live Demo
                  </a>
                )}

                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-600 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
