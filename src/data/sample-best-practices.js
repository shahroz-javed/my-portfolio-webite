/**
 * SAMPLE RESUME DATA - Best Practices Example
 * This demonstrates proper formatting, quantified achievements, and professional writing
 * Use this as a reference for updating your own data files
 */

export const portfolioData = {
  personalInfo: {
    name: "ALEX JORDAN",
    title: "Senior Full Stack Engineer", // Clear, professional title
    email: "alex.jordan@email.com",
    phone: "+1 (415) 555-0123",
    address: "San Francisco, CA 94105",
    linkedin: "https://linkedin.com/in/alexjordan",
    portfolio: "https://alexjordan.dev",

    // Professional summary showing results, not responsibilities
    summary:
      "Results-driven Full Stack Engineer with 8+ years of proven track record building scalable web applications " +
      "serving millions of users. Expert in cloud-native architecture, microservices design, and leading high-performing " +
      "engineering teams. Successfully delivered 15+ production systems increasing company revenue by $12M annually. " +
      "Passionate about clean code, mentoring junior engineers, and driving technical excellence.",

    // Certifications (optional but valuable)
    certifications: [
      "AWS Certified Solutions Architect - Professional (2023)",
      "Google Cloud Professional Cloud Architect (2022)",
      "Certified Kubernetes Application Developer (CKAD) (2022)",
    ],
  },

  skills: {
    // Organize by category, list most important first
    Frontend: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Vue.js",
      "Redux",
      "GraphQL",
    ],
    Backend: [
      "Node.js",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Message Queues",
      "REST APIs",
    ],
    "Cloud & DevOps": [
      "AWS (EC2, S3, RDS, Lambda)",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "CI/CD Pipelines",
      "Terraform",
      "Prometheus",
    ],
    "Leadership & Soft Skills": [
      "Team Leadership",
      "Technical Architecture",
      "Agile/Scrum",
      "Code Review",
      "Mentoring",
      "Cross-functional Collaboration",
      "Technical Documentation",
    ],
  },

  experience: {
    // Single experience shown here - in real data, this could be an array for multiple roles
    position: "Senior Full Stack Engineer & Tech Lead",
    company: "TechFlow Inc.",
    location: "San Francisco, CA",
    period: "2021 - Present", // Use "Present" for current role

    responsibilities: [
      // Quantified achievements with impact metrics
      "Led 8-person engineering team building microservices platform handling 50M+ requests/day, " +
        "reducing infrastructure costs by 35% ($500K/year savings) while improving response times by 62%.",

      "Architected cloud-native application migration from monolith to Kubernetes, " +
        "reducing deployment time from 2 hours to 8 minutes (93% improvement) and enabling 100+ deployments/month.",

      "Implemented comprehensive monitoring system using Prometheus + Grafana, " +
        "reducing production incidents by 78% and MTTR from 45 min to 12 min.",

      "Established code quality standards with automated testing achieving 85% coverage, " +
        "reducing production bugs by 60% and code review time by 40%.",

      "Mentored 4 junior engineers, with 2 promoted to mid-level within 18 months, " +
        "improving team retention rate from 70% to 95%.",

      "Built real-time analytics dashboard processing 100K events/second with sub-100ms latency, " +
        "enabling data-driven business decisions resulting in $2M additional annual revenue.",
    ],
  },

  // Previous experiences (you can extend as needed)
  experience_previous: [
    {
      position: "Full Stack Engineer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      period: "2019 - 2021",
      responsibilities: [
        "Developed customer-facing React dashboard processing real-time data for 100K+ daily users",
        "Built Node.js backend APIs scaling from 0 to 10K requests/second under peak load",
        "Implemented GraphQL layer reducing client payload by 70% and improving mobile performance",
      ],
    },
    {
      position: "Junior Web Developer",
      company: "Digital Agency Pro",
      location: "Los Angeles, CA",
      period: "2017 - 2019",
      responsibilities: [
        "Built responsive websites using React and Vue.js for 20+ enterprise clients",
        "Optimized website performance improving Core Web Vitals scores by average 45%",
        "Contributed to internal component library reducing development time by 35%",
      ],
    },
  ],

  education: [
    {
      degree: "B.S. Computer Science",
      institution: "University of California, Berkeley",
      period: "2017",
      // Optional: Add GPA if impressive
      // gpa: "3.8/4.0"
      // optional: Add relevant coursework
      // coursework: "Algorithms, Data Structures, Distributed Systems, Machine Learning"
    },
    {
      degree: "Full Stack Web Development Bootcamp (Certificate)",
      institution: "General Assembly",
      period: "2016",
    },
  ],

  projects: [
    {
      name: "Real-Time Analytics Platform",
      description:
        "Built scalable analytics platform processing 100K events/second with sub-100ms query latency. " +
        "Implemented event streaming pipeline, data warehouse, and interactive React dashboards. " +
        "System now processes 2 petabytes annually for 500+ enterprise customers.",
      tech_stack: [
        "React",
        "Node.js",
        "Python",
        "Kafka",
        "PostgreSQL",
        "Elasticsearch",
        "Docker",
        "Kubernetes",
      ],
      show_in_cv: true,
      // Optional fields
      // link: "https://analytics.example.com",
      // impact: "Increased company revenue by $3M through premium analytics tier",
    },

    {
      name: "Customer Data Platform (CDP)",
      description:
        "Engineered unified customer identity resolution system ingesting data from 50+ sources, " +
        "serving 30M customer profiles. Implemented real-time segmentation enabling targeted marketing campaigns " +
        "with 25% higher conversion rates. Scaled from 0 to 1 billion events/month.",
      tech_stack: [
        "TypeScript",
        "Node.js",
        "GraphQL",
        "PostgreSQL",
        "Redis",
        "AWS",
      ],
      show_in_cv: true,
    },

    {
      name: "Developer Documentation Portal",
      description:
        "Created comprehensive API documentation platform with interactive examples and SDKs for 6 languages. " +
        "Reduced integration time for external developers from 3 days to 2 hours. " +
        "Resulted in 40% increase in third-party integrations.",
      tech_stack: ["Next.js", "TypeScript", "MDX", "Vercel"],
      show_in_cv: true,
    },

    {
      name: "Internal Tools & Automation",
      description:
        "Built internal admin dashboard improving operational efficiency by 50% and reducing manual data entry time. " +
        "Saved 200+ hours/month in administrative work.",
      tech_stack: ["React", "Node.js", "PostgreSQL"],
      show_in_cv: false, // Not showing on CV as it's less impressive than others
    },
  ],

  // Optional: Add awards/recognition
  awards: [
    "Engineer of the Year 2023 - TechFlow Inc.",
    "Top Open Source Contributor (1000+ GitHub stars)",
    "Speaker at React Conf 2023",
  ],
};

/**
 * KEY WRITING PRINCIPLES DEMONSTRATED:
 *
 * 1. QUANTIFY EVERYTHING
 *    ❌ "Improved performance"
 *    ✅ "Improved performance by 62%, reducing response times from 800ms to 300ms"
 *
 * 2. SHOW IMPACT & BUSINESS VALUE
 *    ❌ "Worked on cost optimization"
 *    ✅ "Reducing infrastructure costs by 35% ($500K/year savings)"
 *
 * 3. USE STRONG ACTION VERBS
 *    ❌ "Responsible for building..."
 *    ✅ "Architected...", "Engineered...", "Led...", "Implemented..."
 *
 * 4. CONTEXT MATTERS
 *    ❌ "Built dashboard"
 *    ✅ "Built real-time analytics dashboard processing 100K events/second with sub-100ms latency"
 *
 * 5. ACHIEVEMENT-FOCUSED, NOT TASK-FOCUSED
 *    ❌ "Used React to build website"
 *    ✅ "Built customer-facing React dashboard serving 100K+ daily users with 99.9% uptime"
 *
 * 6. ORGANIZE BY IMPACT
 *    - Most impressive achievements first
 *    - Show leadership progression
 *    - Include metrics that matter to business (revenue, cost savings, user growth, etc.)
 *
 * 7. KEEP IT RELEVANT
 *    - Remove old/outdated tech stacks
 *    - Only show skills you use regularly
 *    - Customize for each job application
 */

/**
 * TIPS FOR YOUR OWN DATA:
 *
 * 1. Calculate metrics if you don't have exact numbers:
 *    "Reduced deployment time from 2 hours to 8 minutes = 93% improvement"
 *    "Added feature serving 50K users = quantifiable impact"
 *
 * 2. Use business language:
 *    Instead of: "Wrote code for feature"
 *    Use: "Delivered feature resulting in $2M additional annual revenue"
 *
 * 3. Include soft skills subtly:
 *    ✅ "Led 8-person team" shows leadership
 *    ✅ "Mentored 4 junior engineers" shows teaching ability
 *    ✅ "Cross-functional collaboration with Product & Design teams" shows communication
 *
 * 4. Show growth trajectory:
 *    Junior → Mid-level → Senior progression tells a story
 *    Shows reliability, learning ability, and potential
 *
 * 5. Customize for each role:
 *    Different roles care about different skills
 *    - DevOps role? Emphasize infrastructure
 *    - Frontend role? Emphasize user experience metrics
 *    - Management role? Emphasize team & business outcomes
 */
