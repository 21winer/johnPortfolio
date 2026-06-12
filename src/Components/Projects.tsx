import { useEffect, useRef } from 'react';
import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Win-Dashboard',
    category: 'Web App • Analytics',
    description:
      "Tour de contrôle intuitive pour piloter votre entreprise en un coup d'œil. Transformez vos données complexes en visuels clairs et suivez vos performances en temps réel.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    demoLink: 'https://john21-dashboard.vercel.app/',
    repoLink: 'https://github.com/21winer/Modern-Admin-Dashboard',
    image: img1,
  },
  {
    id: 2,
    title: 'PixelWiner',
    category: 'IA • Super-Résolution',
    description:
      "Application de Super-Résolution par Intelligence Artificielle. Améliore la qualité de vos photos et les agrandit sans perte de détails grâce à des modèles IA de pointe.",
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
    demoLink: '#',
    repoLink: '#',
    image: img2,
  },
  {
    id: 3,
    title: 'TodoMuse',
    category: 'Productivité • UX',
    description:
      "Outil de productivité minimaliste conçu pour organiser votre quotidien en segmentant vos activités par niveau d'importance. Clair, rapide, efficace.",
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    demoLink: 'https://todo-muse.vercel.app/',
    repoLink: 'https://github.com/21winer/TodoMuse',
    image: img3,
  },
];

function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    );
    sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-gap" id="projects" ref={sectionRef}>
      <div className="container-main">

        {/* Header */}
        <div
          className="scroll-reveal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div>
            <h2 className="section-title">Projets Récents</h2>
            <div className="section-underline" style={{ margin: '0 0 12px' }} />
            <p className="section-subtitle">Une sélection de mes dernières réalisations.</p>
          </div>
          <a
            href="https://github.com/21winer"
            target="_blank"
            rel="noopener noreferrer"
            id="all-projects-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              color: 'var(--color-primary)',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.75')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Tout voir sur GitHub
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
          </a>
        </div>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <div
              key={project.id}
              className="project-card scroll-reveal"
              id={`project-${project.id}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-img-overlay" />
              </div>

              {/* Body */}
              <div className="project-body">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Tags */}
                <div className="project-tags">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tag">{tech}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="project-actions">
                  <a
                    href={project.demoLink}
                    target={project.demoLink !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="project-btn-demo"
                    id={`project-demo-${project.id}`}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>play_circle</span>
                    Demo
                  </a>
                  <a
                    href={project.repoLink}
                    target={project.repoLink !== '#' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="project-btn-code"
                    id={`project-code-${project.id}`}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: 16 }}>code</span>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;