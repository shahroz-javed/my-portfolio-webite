import projects from "./projects";

export const portfolioData = {
  personalInfo: {
    name: "Shahroz Javed",
    title: "Laravel + Vue.js Developer",
    address: "Gujranwala, Pakistan",
    phone: "+92 3056700508",
    email: "shahrozmaher198r@gmail.com",
    summary:
      "Full Stack Laravel + Vue.js Developer passionate about building secure, maintainable, and high-performance web applications. Experienced in RESTful APIs, component-based frontend architecture, and scalable backend logic following MVC principles.",
  },

  skills: {
    languages: [
      "PHP (Core, Laravel)",
      "JavaScript",
      "Vue.js",
      "Livewire",
      "AlpineJS",
      "HTML5",
      "CSS3",
      "TailwindCSS",
      "Bootstrap",
    ],
    databases: ["MySQL", "SQLite", "Redis", "PostgreSQL"],
    vcs: ["GIT", "GitHub", "BitBucket", "GitLab", "SourceTree"],
    ToolsAndPlatforms: [
      "Docker",
      "CI/CD",
      "JIRA",
      "Trello",
      "ClickUp",
      "Slack",
    ],
    thirdParties: [
      "Stripe",
      "Paypal",
      "Twilio",
      "Pusher",
      "Socket.io",
      "ChatGPT API",
    ],
  },

  experience: {
    company: "Appcrates",
    location: "Gujranwala, Pakistan",
    position: "Laravel + Vue.js Developer",
    period: "Dec 2021 – Present",
    responsibilities: [
      "Developed full-stack web applications using Laravel and Vue.js.",
      "Built REST APIs and integrated frontend with Axios and Vuex.",
      "Handled authentication using Sanctum and JWT.",
      "Implemented real-time notifications using Pusher and Laravel Echo.",
      "Integrated payment gateways (Stripe, Paypal).",
      "Collaborated with teams via Git and CI/CD pipelines.",
    ],
  },

  projects: [...projects.filter((p) => p?.portfolios?.includes("laravel-vue"))],

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
