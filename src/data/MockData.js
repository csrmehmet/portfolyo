export const mockData = {
    personalInfo: {
      name: "Mehmet Coşar",
      title: "Creative thinker",
      subtitle: "Minimalism lover",
      email: "csrmehmett@gmail.com",
      description: "Hi, I'm Mehmet Coşar. I'm a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let's shake hands with me.",
      image: "https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JvmK-kBMmmutOP83x3fC-zApmk-pGIzv2RWPwYezRZMs7J-~EPgsjGUIsBMXuj2Wec5BgpbN4PQSGZYt4MbDNPVE6Xh~sssFJ3bZdfKEsQ0nn7o6w4en2SjVKa~AyesZRzDbmwpSAptTAjo-2kl6zCTnF35fZBarvT5WnrNCp-5Yf9TUQ67wczDiNOssRoey~VG2sZrT4Rr1YyjUlY-yW4Uko5LJNgjktazl7fqZfSbjXbVMloIGOtRuOswA5dq9~olG~K9uBxu6QjwMOJH45tDqWQkqeJcxn6wFlF4cutcPgm1q8h9O-gNnC5AOpPEGhGVi7dfFh55MKXJV-QKLqw__",
      profile: {
        birthDate: {
          label: "Birth Date",
          value: "10.12.1997"
        },
        city: {
          label: "City",
          value: "Adana"
        },
        education: {
          label: "Education",
          university: "Mersin University",
          department: "Computer Engineering",
          degree: "Bachelor's",
          graduationYear: "2024"
        },
        preferredRole: {
          label: "Preferred Role",
          value: "Frontend, UI"
        }
      }
    
    },
    aboutMe: {
      paragraphs: [
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!"
      ]
    },
    skills: [
      { name: "JavaScript", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      { name: "React.js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      { name: "Node.js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
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