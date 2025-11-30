// src/App.jsx

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
