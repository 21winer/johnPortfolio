import { useState, useEffect } from "react";
import img from '../assets/john.png'

const Hero = () => {
  const roles = [
    "Développeur Frontend",
    "Créateur de solutions digitales",
    "Passionné de React & Tailwind",
    "Toujours en quête d’innovation 🚀"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero min-h-[70vh] bg-base-100" id="Home">
      <div className="hero-content text-center lg:text-left flex-col lg:flex-row-reverse gap-12">

        {/* Image / Illustration (Optionnel mais recommandé pour un Hero) */}
        <div className="flex-1 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 bg-linear-to-br from-primary to-accent rounded-full blur-3xl opacity-20 absolute"></div>
          <img
            src={img}
            fetchPriority="high"
            className="w-70 h-70 md:w-90 md:h-90 object-cover object-top border-8 border-accent shadow-2xl accentscale-[20%]"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
            style={{
              borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
            }}
            alt="John Simou"
          />
        </div>

        {/* Contenu Texte */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-black leading-tight">
            Bonjour, je suis <br />
            <span className="text-accent inline-block hover:scale-105 transition-transform duration-300">
              John Simou
            </span>
          </h1>

          {/* Role switcher avec animation CSS standard */}
          <div className="h-12 mt-4 overflow-hidden">
            <p
              key={index}
              className="text-xl md:text-2xl font-bold text-secondary animate-bounce-short"
            >
              {roles[index]}
            </p>
          </div>

          <p className="py-6 text-lg text-base-content/80 max-w-lg mx-auto lg:mx-0">
            Je conçois des interfaces modernes, rapides et responsives avec{" "}
            <span className="font-semibold text-accent underline decoration-accent/30">
              React, TypeScript et Tailwind CSS.
            </span>
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="btn btn-accent shadow-lg shadow-accent/20">
              Mes Projets
            </button>
            <button className="btn btn-outline btn-secondary">
              Me contacter
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero