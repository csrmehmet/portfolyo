/* eslint-disable react/prop-types */
function ProjectCard({ project }) {
    return (
      <div className="project-card w-full max-w-sm mx-auto flex flex-col">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
        <h3 className="text-2xl font-semibold mb-2 text-indigo-600">{project.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 border border-indigo-600 text-indigo-600 rounded-md text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">Github</a>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline">View Site</a>
        </div>
      </div>
    );
  }
  
  export default ProjectCard;