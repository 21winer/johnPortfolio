import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="min-h-screen transition-colors duration-300">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
      <div className="p-5 md:px-[15%]">
        <Contact/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;