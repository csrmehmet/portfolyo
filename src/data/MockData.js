export const mockData = {
    personalInfo: {
      name: "Mehmet Coşar",
      title: "Creative thinker",
      subtitle: "Minimalism lover",
      email: "csrmehmett@gmail.com",
      profile: {
        birthDate: "10.12.1997",
        city: "Adana",
        education: {
          university: "Mersin aUniversity",
          department: "Computer Engineering",
          degree: "Bachelor's",
          graduationYear: "2024"
        },
        preferredRole: "Frontend, UI"
      }
    },
    aboutMe: {
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      ]
    },
    skills: [
      { name: "JavaScript", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
    ],
    projects: [
      {
        id: 1,
        title: "Workintech",
        description: "A project management tool for remote teams.",
        technologies: ["React", "Node.js", "MongoDB"],
        githubLink: "https://github.com/username/workintech",
        liveLink: "https://workintech-project.com",
      },
      {
        id: 2,
        title: "Random Jokes",
        description: "A fun app that generates random jokes.",
        technologies: ["JavaScript", "API Integration"],
        githubLink: "https://github.com/username/random-jokes",
        liveLink: "https://random-jokes-app.com",
      },
      {
        id: 3,
        title: "Journey",
        description: "A travel planning application.",
        technologies: ["React Native", "Firebase"],
        githubLink: "https://github.com/username/journey",
        liveLink: "https://journey-travel-app.com",
      },
    ],
    socialLinks: {
      github: "https://github.com/username",
      linkedin: "https://linkedin.com/in/username",
    },
  };
  
  export const translations = {
    en: {
      header: {
        home: "Home",
        skills: "Skills",
        projects: "Projects",
      },
      hero: {
        title: "Creative Thinker",
        subtitle: "Minimalism Lover",
      },
      profile: {
        birthDate: "10.12.1997",
        city: "Adana",
        education: {
          university: "Mersin University",
          department: "Computer Engineering",
          degree: "Bachelor's",
          graduationYear: "2024"
        },
        preferredRole: "Frontend, UI"
      },
      
    },
    tr: {
      header: {
        home: "Ana Sayfa",
        skills: "Yetenekler",
        projects: "Projeler",
      },
      hero: {
        title: "Yaratıcı Düşünür",
        subtitle: "Minimalizm Sever",
      },
      profile: {
        birthDate: "10.12.1997",
        city: "Adana",
        education: {
          university: "Mersin Üniversite",
          department: "Bilgisayar Mühendisliği",
          degree: "Lisans",
          graduationYear: "2024"
        },
        preferredRole: "Frontend , UI"
      },
      
    },
  };