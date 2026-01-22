import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="p-5 md:px-[15%]">
        {/* On passe la fonction et l'état actuel à la Navbar */}
        <Navbar />
        <Hero/>
      </div>
      <About/>
      <div className="p-5 md:px-[15%]">
        <Skills/>
        <Projects/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;