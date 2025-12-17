import profile from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-b from-[#020617] to-[#0a1121]"
    >
      {/* PROFILE IMAGE WITH GRADIENT OUTLINE + GLOW */}
      <div className="relative w-44 h-44 mb-10">
        {/* Glow behind the image */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

        {/* Gradient outline */}
        <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 animate-spin-slow">
          <div className="w-full h-full rounded-full bg-[#0b1220] flex items-center justify-center">
            <img
              src={profile}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* HELLO TEXT */}
      <p className="text-base md:text-lg font-semibold tracking-[0.35em] text-sky-400 uppercase mb-4">
        HELLO, I’M
      </p>

      {/* NAME */}
      <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
        Danushi Rathnayaka
      </h1>

      {/* TITLE */}
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6 animate-fade-in">
        IT Undergraduate | Web Developer | UI/UX Enthusiast
      </p>

      {/* DESCRIPTION */}
      <p className="text-gray-400 max-w-2xl mb-8 leading-relaxed animate-fade-in">
        I design and develop clean, modern and responsive web interfaces using React,
        Tailwind CSS and other modern technologies, with a strong focus on usability and
        visual clarity.
      </p>

      {/* BUTTONS */}
      <div className="flex gap-4 animate-fade-in">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg transition"
        >
          View My Work
        </a>

        <a
          href="#contact"
          className="px-6 py-3 rounded-lg border border-gray-500 hover:bg-gray-800 text-gray-300 font-medium shadow transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
