
import { useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = useSelector(state => state.projects);

  return (
    <section className="projects-section py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;