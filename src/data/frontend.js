import projects from "./projects";

export const portfolioData = {
  personalInfo: {
    name: "Shahroz Javed",
    title: "Frontend Developer",
    address: "Dipty Naseem Town More Eminabad, Gujranwala, Pakistan",
    phone: "+92 3056700508",
    email: "shahrozmaher198r@gmail.com",
    summary:
      "To secure a challenging role as a PHP Developer in a dynamic organization where my technical expertise in Core PHP and Laravel framework can be utilized to design and develop high-performance web applications. I am eager to work in a collaborative environment, learn new technologies, and contribute to the growth of the company.",
  },

  skills: {
    languages: [
      "HTML",
      "CSS",
      "JavaScript",
      "Vue",
      "React",
      "jQuery",
      "AJAX",
      "Bootstrap",
      "PHP [Core, Laravel]",
    ],
    ides: ["Visual Studio Code", "Sublime Text"],
    api: ["XML", "JSON"],
    databases: ["MySQL"],
    vcs: ["GIT", "BitBucket", "GitHub", "GitLab", "SourceTree"],
    projectManagement: ["JIRA", "Trello", "Clickup", "Slack"],
    thirdParties: ["Twilio", "Stripe", "Paypal", "ChatGPT", "Pusher"],
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

  projects: [...projects.filter((p) => p?.portfolios?.includes("frontend"))],

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
