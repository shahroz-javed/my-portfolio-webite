import projects from "./projects";

export const portfolioData = {
  personalInfo: {
    name: "Shahroz Javed",
    title: "TAAL Stack Developer (Tailwind, AlpineJS, Livewire, Laravel)",
    address: "Gujranwala, Pakistan",
    phone: "+92 3056700508",
    email: "shahrozmaher198r@gmail.com",
    summary:
      "Full Stack Laravel Developer specialized in the TAAL stack — TailwindCSS, AlpineJS, Livewire, and Laravel. I focus on building dynamic, responsive, and maintainable web applications with clean Blade templates, Livewire reactivity, and modern UI design powered by Tailwind.",
  },

  skills: {
    languages: [
      "PHP (Core, Laravel)",
      "Blade Templates",
      "Livewire",
      "AlpineJS",
      "TailwindCSS",
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
    ],
    databases: ["MySQL", "SQLite", "PostgreSQL", "Redis"],
    vcs: ["Git", "GitHub", "BitBucket", "GitLab"],
    ToolsAndPlatforms: [
      "Docker",
      "CI/CD",
      "Trello",
      "JIRA",
      "ClickUp",
      "Slack",
      "Composer",
      "NPM",
    ],
    thirdParties: ["Stripe", "Paypal", "Twilio", "Pusher", "ChatGPT API"],
  },

  experience: {
    company: "Appcrates",
    location: "Gujranwala, Pakistan",
    position: "Laravel + Livewire Developer",
    period: "Dec 2021 – Present",
    responsibilities: [
      "Developed full-stack web applications using Laravel, Livewire, and AlpineJS.",
      "Created modular Blade components and reactive Livewire interfaces.",
      "Designed TailwindCSS-based responsive UI layouts.",
      "Integrated REST APIs and real-time notifications via Pusher.",
      "Handled form submissions, validation, and dynamic tables using Livewire.",
      "Deployed and maintained Laravel projects using Git and CI/CD pipelines.",
    ],
  },

  projects: [...projects.filter((p) => p?.portfolios?.includes("tall"))],

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
