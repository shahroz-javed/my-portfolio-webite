import projects from "./projects";

export const portfolioData = {
  personalInfo: {
    name: "Shahroz Javed",
    title: "MERN Stack Developer",
    address: "Gujranwala, Pakistan",
    phone: "+92 3056700508",
    email: "shahrozmaher198r@gmail.com",
    summary:
      "MERN Stack Developer skilled in designing and building scalable web applications using MongoDB, Express.js, React, and Node.js. I’m passionate about crafting efficient APIs, real-time solutions, and interactive UIs while following modern development practices and CI/CD workflows.",
  },

  skills: {
    languages: [
      "HTML",
      "CSS",
      "JavaScript (ES6+)",
      "Node.js",
      "React.js",
      "Next.js",
      "Express.js",
      "TypeScript (Basic)",
      "TailwindCSS",
      "Bootstrap",
    ],
    databases: ["MongoDB", "Firebase", "Redis", "PostgreSQL (Basic)"],
    vcs: ["GIT", "GitHub", "GitLab", "BitBucket"],
    ToolsAndPlatforms: ["Docker", "CI/CD", "JIRA", "Trello", "VSCode", "Slack"],
    thirdParties: [
      "Stripe",
      "Paypal",
      "Twilio",
      "Socket.io",
      "JWT Auth",
      "Firebase Auth",
      "Pusher",
      "ChatGPT API",
    ],
  },

  experience: {
    company: "Appcrates",
    location: "Gujranwala, Pakistan",
    position: "MERN Stack Developer",
    period: "Dec 2021 – Present",
    responsibilities: [
      "Developed scalable REST and GraphQL APIs using Express.js and Node.js.",
      "Implemented real-time features with Socket.io and Pusher.",
      "Built interactive UIs using React.js and TailwindCSS.",
      "Integrated payment gateways like Stripe and Paypal.",
      "Worked with authentication systems (JWT, Firebase).",
      "Deployed applications using Docker and CI/CD pipelines.",
    ],
  },

  projects: [...projects.filter((p) => p?.portfolios?.includes("mern"))],

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
