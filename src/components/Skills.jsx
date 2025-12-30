export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 bg-[#020617] border-t border-white/5"
    >
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-base md:text-lg font-semibold tracking-[0.35em] text-sky-400 uppercase mb-4">
          SKILLS
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-50">
          Tech Stack I Work With
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I focus on modern web technologies, clean code and user-friendly
          interfaces.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Frontend */}
        <div className="bg-[#020617] border border-white/5 rounded-2xl p-6 shadow-lg shadow-blue-900/30 hover:-translate-y-1 hover:border-blue-500/70 transition">
          <div className="text-3xl mb-3">💻</div>
          <h3 className="font-semibold mb-2">Frontend</h3>
          <p className="text-sm text-gray-400">
            React, JavaScript, HTML5, CSS3, Tailwind CSS, responsive layouts.
          </p>
        </div>

        {/* Backend & Tools */}
        <div className="bg-[#020617] border border-white/5 rounded-2xl p-6 shadow-lg shadow-blue-900/30 hover:-translate-y-1 hover:border-blue-500/70 transition">
          <div className="text-3xl mb-3">🛠️</div>
          <h3 className="font-semibold mb-2">Backend & Tools</h3>
          <p className="text-sm text-gray-400">
            Node.js, Express.js, MongoDB, MySQL, Postman, Git & GitHub.
          </p>
        </div>

        {/* UI / UX */}
        <div className="bg-[#020617] border border-white/5 rounded-2xl p-6 shadow-lg shadow-blue-900/30 hover:-translate-y-1 hover:border-blue-500/70 transition">
          <div className="text-3xl mb-3">🎨</div>
          <h3 className="font-semibold mb-2">UI & UX</h3>
          <p className="text-sm text-gray-400">
            Figma, wireframes, user flows, layout hierarchy, usability thinking.
          </p>
        </div>

        {/* Collaboration */}
        <div className="bg-[#020617] border border-white/5 rounded-2xl p-6 shadow-lg shadow-blue-900/30 hover:-translate-y-1 hover:border-blue-500/70 transition">
          <div className="text-3xl mb-3">🤝</div>
          <h3 className="font-semibold mb-2">Collaboration</h3>
          <p className="text-sm text-gray-400">
            Group projects, version control workflows and clear communication.
          </p>
        </div>

        {/* Learning */}
        <div className="bg-[#020617] border border-white/5 rounded-2xl p-6 shadow-lg shadow-blue-900/30 hover:-translate-y-1 hover:border-blue-500/70 transition">
          <div className="text-3xl mb-3">📚</div>
          <h3 className="font-semibold mb-2">Continuous Learning</h3>
          <p className="text-sm text-gray-400">
            Always exploring new tools, libraries and best practices in web dev.
          </p>
        </div>
        {/* Problem Solving */}
<div className="bg-[#020617] border border-white/5 rounded-2xl p-6 shadow-lg shadow-blue-900/30 hover:-translate-y-1 hover:border-blue-500/70 transition">
  <div className="text-3xl mb-3">🧠</div>
  <h3 className="font-semibold mb-2">Problem Solving</h3>
  <p className="text-sm text-gray-400">
    Strong analytical skills, debugging experience, and the ability to break down
    complex problems into clean, efficient solutions.
  </p>
</div>

      </div>
    </section>
  );
}
