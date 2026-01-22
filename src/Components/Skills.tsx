import Title from "./Title"
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";

import yxenlabs from "../assets/companies/YxenLabs.png";


const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
];


const experiences = [
    {
        id: 1,
        role: "Frontend Developer",
        company: "Yxen Labs",
        period: "Juil 2025 - Présent",
        description: [
            "Développement des landings pages, UI/UX dashbords, Application mobile via configuration capacitor",
        ],
        image: yxenlabs,
    },
];


function Skills() {
    return (
        <div id="Competences">
            <Title title="Mes compétences" />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex gap-4 flex-wrap justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent ">
                                <img src={skill.image} alt={skill.name} className="rounded-full w-full h-full object-cover" />
                            </div>
                            <span className="ml-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
                <div className="md:ml-4 flex flex-col space-y-4 mt-5">
                    {experiences.map((experience) => (
                        <div 
                            key={experience.id}
                            className="flex flex-col bg-base-200 p-5 shadow-lg rounded-xl"
                        >
                            <div className="flex items-center">
                                <img
                                    src={experience.image}
                                    alt={experience.company}
                                    className="object-cover w-10 h-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {experience.role},{experience.company}
                                    </h1>
                                    <span className="text-sm">
                                        {experience.period}
                                    </span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {experience.description.map((desc,index)=>(
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills