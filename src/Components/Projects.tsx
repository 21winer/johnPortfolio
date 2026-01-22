import Title from "./Title"
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';
import { Github, Video } from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Win-Dashboard',
        description: 'Cette application est une tour de contrôle intuitive pour piloter votre entreprise en un coup d’œil. Transformez vos données complexes en visuels clairs et suivez vos performances en temps réel.',
        technologies: ['React', 'typescript', 'Tailwind CSS'],
        demoLink: 'https://john21-dashboard.vercel.app/',
        repoLink: 'https://github.com/21winer/Modern-Admin-Dashboard',
        image: img1,
    },
    {
        id: 2,
        title: 'PixelWiner',
        description: 'PixelWiner est une application de Super-Résolution par Intelligence Artificielle. Elle permet d’améliorer la qualité de tes photos et de les agrandir sans perte de détails.',
        technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'TodoMuse',
        description: 'Cette application est un outil de productivité minimaliste conçu pour aider l’utilisateur à organiser son quotidien en segmentant ses activités par niveau d’importance.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS'],
        demoLink: 'https://todo-muse.vercel.app/',
        repoLink: 'https://github.com/21winer/TodoMuse',
        image: img3,
    }
];

const Projects = () => {
  return (
    <div className="mt-10" id="Projets">
        <Title title="Mes projets"/>
        <div className="grid md:grid-cols-3 gap-4 mt-5">
            {
                projects.map((project)=>(
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg">
                        <img
                            src={project.image} 
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover" 
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 my-3 ">
                            {project.technologies.map((tech)=>(
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a href={project.demoLink} className="w-2/3 btn btn-accent">
                                Demo
                                <Video className="w-4"/>
                            </a>
                            <a href={project.demoLink} className="w-1/3 btn btn-neutral ml-2">
                                RepoLink
                                <Github className="w-4"/>
                            </a>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Projects