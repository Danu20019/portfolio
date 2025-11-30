import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-[#030712] text-gray-300 px-6 md:px-16 py-24"
    >
      <div className="max-w-5xl mx-auto text-center">
        
        {/* SECTION LABEL */}
        <p className="text-base md:text-lg font-semibold tracking-[0.35em] text-sky-400 uppercase mb-4">
          About Me
        </p>

        {/* MAIN HEADING */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-8">
          IT undergraduate crafting clean, modern <br /> and user-focused web
          experiences.
        </h2>

        {/* INTRO PARAGRAPH */}
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16">
          I’m an Information Technology undergraduate at SLIIT with a strong
          focus on frontend development and UI/UX. I enjoy turning ideas into
          responsive, elegant and easy-to-use interfaces using React, Tailwind
          CSS and modern web tools.
        </p>

        {/* THREE FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* CARD 1 */}
          <div className="bg-[#0e1628] border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-sky-700/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sky-400 text-3xl">💻</span>
              <h3 className="text-xl font-semibold text-white">
                Frontend Development
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building responsive React interfaces with clean layouts, reusable
              components and consistent styling using Tailwind CSS.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#0e1628] border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-sky-700/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-pink-400 text-3xl">🎨</span>
              <h3 className="text-xl font-semibold text-white">
                UI & UX Thinking
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Creating simple and intuitive user flows with a strong focus on
              clarity, accessibility and smooth overall experience.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#0e1628] border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-sky-700/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-purple-400 text-3xl">🚀</span>
              <h3 className="text-xl font-semibold text-white">
                Learning & Growth
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Continuously improving through university projects, self-learning
              and experimenting with modern web tools and technologies.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
