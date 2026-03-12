import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <div className="page">
      <div className="container">

        {/* ── Hero ── */}
        <header className="projects-hero">
          <h1 className="projects-hero__name">Projects</h1>
          <p className="projects-hero__tagline">
            Things I built at the intersection of AI, product, and creative curiosity.
          </p>
        </header>

        {/* ── Grid ── */}
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </div>
  );
}
