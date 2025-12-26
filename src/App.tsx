import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";

function App() {
  // 1. Initialisation : on regarde d'abord dans le localStorage, sinon on met "dracula"
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dracula"
  );

  // 2. À chaque fois que 'theme' change, on met à jour l'attribut HTML et le localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. Fonction pour basculer entre les deux thèmes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dracula" ? "light" : "dracula"));
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="p-5 md:px-[15%]">
        {/* On passe la fonction et l'état actuel à la Navbar */}
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Hero/>
      </div>
      <About/>
      <div className="p-5 md:px-[15%]">
        <Skills/>
        <Projects/>
      </div>
    </div>
  );
}

export default App;