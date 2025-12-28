import Title from "./Title"
import img from "../assets/john.png"
import { CalendarSync, LetterText, Paintbrush } from "lucide-react";

const aboutSections = [
    {
        id: 1,
        title: "Développeur Frontend",
        description: "Je suis un développeur frontend avec une bonne expérience.",
        icon: <LetterText className="text-accent scale-150" />,
    },
    {
        id: 2,
        title: "Développeur Backend",
        description: "Je maîtrise les bases du développement backend pour créer des APIs robustes.",
        icon: <CalendarSync className="text-accent scale-150" />,
    },
    {
        id: 3,
        title: "Passionné par l'UI/UX",
        description: "Créer des interfaces utilisateur attrayantes et fonctionnelles est ma priorité.",
        icon: <Paintbrush className="text-accent scale-150" />,
    },
];

function About() {
  return (
    <div className="bg-base-300 p-10 mb-10 md:mb-32" id="About">
      <Title title={"à Propos"}/>
      <div className="md:h-screen flex justify-center items-center p-5">
        <div className="hidden md:block">
          <img
            src={img}
            fetchPriority="high"
            className="w-96 h-96 rounded-xl object-cover object-top"
            onContextMenu={(e) => e.preventDefault()}
            draggable="false"
            alt="John Simou"
          />
        </div>
        <div className="md:ml-4 space-y-4">
          {aboutSections.map((section)=>(
            <div key={section.id} className="flex flex-col md:flex-row p-5 items-center bg-base-100 rounded-xl shadow-xl md:w-96 ">
              <div className="mb-2 md:mb-0">
                {section.icon}
              </div>
              <div className="md:ml-4 text-center md:text-left">
                <h2 className="mb-1 font-bold text-xl">
                  {section.title}
                </h2>
                <p className="text-sm">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About