
import { useSelector } from 'react-redux';

function Skills() {
  const skills = useSelector(state => state.user.skills);

  
  

  return (
    <section className="skills container mx-auto px-24 py-16">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Skills</h2>
      <div className="flex flex-row justify-between space-x-8">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item flex-1">
            <h3 className="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-400">{skill.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-16 border-b border-purple-400 dark:border-gray-700"></div>
    </section>
  );
}

export default Skills;