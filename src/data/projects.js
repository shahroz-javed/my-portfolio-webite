const projects = [
  {
    name: "WBSC – World Baseball Softball Confederation",
    project_type: "Website / CMS Platform",
    category: "Website / CMS Platform",
    description:
      "Led development of a multilingual, large-scale sports federation platform featuring content management, global rankings, player profiles, and live event coverage.",


    tech_stack: [
      "Laravel",
      "Vue.js",
      "MySQL",
      "TailwindCSS",
      "Redis",
      "REST API",
      "Docker",
    ],

    skills_used: [
      "Backend Architecture (Laravel)",
      "Frontend Development (Vue.js)",
      "API Design",
      "Multilingual System Development",
      "Authorization & Role Management",
      "Performance Optimization",
      "Database Modelling",
    ],

    my_role: "Full-Stack Developer",
    responsibilities: [
      "Developed custom CMS modules for rankings, events, and player profiles",
      "Integrated multilingual support across the entire application",
      "Optimized APIs and database queries for high-traffic usage",
      "Implemented responsive UI for global sports audiences",
      "Maintained production deployments and bug fixes",
    ],

    achievements: [
      "Improved page performance by 40%",
      "Reduced server load using caching and optimized queries",
      "Successfully delivered in a distributed team environment",
    ],

    show_in_cv: true,
    year: 2024,
    portfolios: ["default", "laravel-vue","mern"],
    link : "https://www.wbsc.org/",
    demo: "~/assets/demos/wbsc-demo.mp4",
  },
  {
    name: "Bilz App",
    description:
      "Restaurant Inventory Management System: Multi-tenant solution with purchase, returns, kitchen tracking, and POS.",
    category: "Web Application",
  },
  {
    name: "SPORT SOCIAL",
    description:
      "Sports Podcast & Live Events App: Podcast streaming, event listings, and audio player.",
    category: "Mobile App",
  },
  {
    name: "GCL",
    description:
      "Galapagos Cruise Link: Cruise booking platform with vendor management, schedules, pricing, and availability.",
    category: "Web Application",
  },
  {
    name: "CASPER",
    description:
      "Equipment eStore & Technician Booking: E-commerce with tool sales and technician booking system.",
    category: "E-commerce",
  },
  {
    name: "INSPOBIN",
    description:
      "Cloud Storage & Subscription Platform: File storage, subscription management, Stripe integration.",
    category: "Web Application",
  },
  {
    name: "OpinionUniverse",
    description:
      "Survey & Rewards Platform: Survey integrations with reward tracking and compensation logic.",
    category: "Web Platform",
  },
  {
    name: "HRIS Platform",
    description:
      "Human Resource Information System: Employee management, attendance, assets, reporting, self-service panel.",
    category: "Enterprise Software",
  },
  {
    name: "Ater",
    description:
      "A Event Management Platform: Event listings, ticketing, user profiles, and admin dashboard.",
    category: "Web Application",
  },
  {
    name: "Iotti-Management",
    description:
      "A Inventory Management System: Stock tracking, order management, supplier management, and reporting.",
    category: "Web Application",
  },
  {
    name: "Chapimaster",
    description:
      "Personal Blog & CV Builder: Blog platform with custom CV builder tool.",
    category: "Web Application",
  },
];

export default projects;

/* 
wbsc,extratick crm,ater,iotti-management,casper,inspobin,opinionuniverse,hris,chapimaster,sport-social,bilz-app,gcl,buycex
hris-platform, mada-capital
wrenchers, school-managment, splash-park, ssh-steel,home-phase, pos-restaurant,church-management
greenping
*/
