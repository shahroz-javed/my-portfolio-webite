import projects from "./projects";

export const portfolioData = {
  personalInfo: {
    name: "Shahroz Javed",
    title: "PHP-Laravel Developer",
    address: "Gujranwala, Pakistan",
    phone: "+92 3056700508",
    email: "shahrozmaher198r@gmail.com",
    linkedin: "https://www.linkedin.com/in/shahroz-javed-075008205/",
    summary:
      "Experienced and results-driven Full Stack Developer with 4+ years of professional experience in PHP (Laravel) and growing expertise in Node.js. Skilled in designing and developing scalable web applications, RESTful APIs, and modern frontend integrations with Vue.js and React. Passionate about clean code, performance optimization, and building reliable systems for global users. Eager to contribute to innovative remote teams delivering high-impact digital products.",
  },

  skills: {
    languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node",
      "PHP [Core, Laravel]",
      "Vue",
      "React",
      "Livewire",
      "AlpineJS",
      "Bootstrap",
      "TailwindCSS",
      "Sass",
    ],
    databases: [
      "MySQL",
      "SQLite",
      "Firebase",
      "MongoDB",
      "Redis",
      "PostgreSQL",
    ],
    vcs: ["GIT", "BitBucket", "GitHub", "GitLab", "SourceTree"],
    ToolsAndPlatforms: [
      "Docker",
      "CI/CD",
      "JIRA",
      "Trello",
      "Clickup",
      "Slack",
    ],
    thirdParties: [
      "Twilio",
      "Stripe",
      "Paypal",
      "ChatGPT",
      "Pusher",
      "Socket.io",
    ],
  },

  experience: {
    company: "Appcrates",
    location: "Gujranwala Pakistan",
    position: "PHP-Laravel Developer",
    period: "Dec 2021 – Present",
    responsibilities: [
      "Started practical development in AppCrates with PHP Core and Laravel.",
      "Worked with Frontend development using Bootstrap Framework.",
      "Developed Backend, Frontend, and REST APIs.",
      "Integrated SDKs/APIs into client projects.",
      "Worked with payment gateways, eCommerce, CMS, and multiple domains.",
    ],
  },

  projects: [...projects],

  education: [
    {
      institution: "Govt. College Gujranwala Satellite Town",
      degree: "FSc",
      period: "Sep 2013 - Sep 2015",
    },
    {
      institution: "University of Sargodha",
      degree: "BS (Hons) Software Engineering",
      period: "Sep 2017 - Aug 2021",
    },
  ],
};
