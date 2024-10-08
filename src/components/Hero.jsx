import { useSelector } from "react-redux";

function Hero() {
  const personalInfo = useSelector(state => state.user);

  return (
    <section className="hero">
      <div className="container mx-auto px-24 py-16">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex items-center mb-2">
              <div className="w-20 h-[1px] bg-purple-800 mr-4"></div>
              <h3 className="text-sm text-purple-800 font-semibold">{personalInfo.name}</h3>
            </div>
            <h1 className="text-5xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {personalInfo.title}
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {personalInfo.subtitle}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {personalInfo.description}
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-800 hover:bg-blue-900 text-white py-3 px-8 rounded-md transition duration-300">
                Hire me
              </button>
              <a href={personalInfo.socialLinks?.github} className="border border-blue-800 text-blue-800 hover:border-gray-400 font-bold py-1 px-3 rounded-md transition duration-300 flex items-center">
                <i className="fab fa-github mr-2"></i>
                Github
              </a>
              <a href={personalInfo.socialLinks?.linkedin} className="border border-blue-800 text-blue-800 hover:border-gray-400 font-bold py-1 px-3 rounded-md transition duration-300 flex items-center">
                <i className="fab fa-linkedin-in mr-4"></i>
                Linkedin
              </a>
            </div>
          </div>
          <div className="md:w-3/4 flex justify-center items-center">
            <img 
                src={personalInfo.image}
                alt={personalInfo.name}
                className="rounded-lg w-4/6 h-auto object-cover" // 
            />
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;