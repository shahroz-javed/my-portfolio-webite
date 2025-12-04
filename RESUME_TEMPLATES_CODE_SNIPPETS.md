# Resume Templates - Code Implementation Examples

## Copy-Paste Ready Code Snippets

### Snippet 1: Switch to ProfessionalTemplate (Minimal Change)

Replace this section in `App.jsx`:

```jsx
// BEFORE:
import SimpleTemplate from "./components/resume_templates/SimpleTemplate";

// ...in render section:
<div id="print-area" style={{ display: "none" }}>
  <SimpleTemplate data={portfolioData} />
</div>

// AFTER:
import ProfessionalTemplate from "./components/resume_templates/ProfessionalTemplate";

// ...in render section:
<div id="print-area" style={{ display: "none" }}>
  <ProfessionalTemplate data={portfolioData} />
</div>
```

---

### Snippet 2: Add Multiple Templates with Template Map

Add this to `App.jsx` imports section:

```jsx
// Import all templates
import SimpleTemplate from "./components/resume_templates/SimpleTemplate";
import ProfessionalTemplate from "./components/resume_templates/ProfessionalTemplate";
import MinimalistTemplate from "./components/resume_templates/MinimalistTemplate";
import ATSMaxTemplate from "./components/resume_templates/ATSMaxTemplate";
import ExecutiveTemplate from "./components/resume_templates/ExecutiveTemplate";

// Create template mapping
const templateMap = {
  simple: SimpleTemplate,
  professional: ProfessionalTemplate,
  minimalist: MinimalistTemplate,
  ats: ATSMaxTemplate,
  executive: ExecutiveTemplate,
};
```

In App component, add state:

```jsx
const [selectedTemplate, setSelectedTemplate] = useState("simple");
```

In your data loading useEffect, after loading data:

```jsx
// Determine template
const template = portfolioData.templateType || "simple";
setSelectedTemplate(template);
```

In render section:

```jsx
// Get selected template
const SelectedTemplate = templateMap[selectedTemplate] || SimpleTemplate;

// Then use it:
<div id="print-area" style={{ display: "none" }}>
  <SelectedTemplate data={portfolioData} />
</div>
```

---

### Snippet 3: Add URL Template Parameter

In your data loading useEffect:

```jsx
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const templateParam = urlParams.get("template"); // NEW LINE
  const resumeCode = urlParams.get("resume");
  
  // ... existing code ...

  import(`./data/${fileMap[resumeCode]}.js`)
    .then((mod) => {
      setPortfolioData(mod.portfolioData);
      
      // NEW: Use URL param if provided, otherwise use data file value
      const selectedTemplate = 
        templateParam || 
        mod.portfolioData.templateType || 
        "simple";
      setSelectedTemplate(selectedTemplate);
    })
    .catch(() => setNotFound(true));
}, []);
```

Now users can access:
```
/?resume=5t4r3e2w1q0p
/?resume=5t4r3e2w1q0p&template=professional
/?resume=5t4r3e2w1q0p&template=minimalist
/?resume=5t4r3e2w1q0p&template=ats
/?resume=5t4r3e2w1q0p&template=executive
```

---

### Snippet 4: Update Data Files with Template Type

In each of your data files (default.js, laravel-vue.js, mern.js, tall.js):

```javascript
// src/data/default.js
export const portfolioData = {
  templateType: "professional", // ADD THIS LINE
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    email: "your@email.com",
    // ... rest of personalInfo
  },
  skills: { ... },
  experience: { ... },
  education: [ ... ],
  projects: [ ... ]
};
```

**Template Type Options:**
- `"simple"` - Basic template
- `"professional"` - Corporate/Finance
- `"minimalist"` - Tech/Startups
- `"ats"` - Large corporations, ATS screening
- `"executive"` - C-Suite/Leadership

---

### Snippet 5: Add Template Selector UI Button

Add this component somewhere in your page (Header, Footer, or Hero):

```jsx
// In your component (e.g., Header)
import { useState } from "react";

const TemplateSelector = ({ onSelectTemplate, currentTemplate }) => {
  const templates = [
    { id: "simple", label: "Simple" },
    { id: "professional", label: "Professional" },
    { id: "minimalist", label: "Minimalist" },
    { id: "ats", label: "ATS" },
    { id: "executive", label: "Executive" },
  ];

  return (
    <div className="print:hidden flex gap-2 mb-6">
      <span className="text-sm font-semibold">Resume Style:</span>
      {templates.map((template) => (
        <button
          key={template.id}
          onClick={() => onSelectTemplate(template.id)}
          className={`px-3 py-1 text-sm rounded transition ${
            currentTemplate === template.id
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {template.label}
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;

// Then in App.jsx, pass these props:
<TemplateSelector 
  onSelectTemplate={setSelectedTemplate}
  currentTemplate={selectedTemplate}
/>
```

---

### Snippet 6: Add Download as PDF Button

Add this component to your Header or Footer:

```jsx
const DownloadPDFButton = ({ resumeName = "Resume" }) => {
  const handlePrint = () => {
    // Get the print area element
    const printContent = document.getElementById("print-area");
    if (!printContent) {
      alert("Resume content not found");
      return;
    }

    // Create a window for printing
    const printWindow = window.open("", "_blank");
    printWindow.document.write(printContent.innerHTML);
    printWindow.document.close();

    // Trigger print dialog
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 100);
  };

  return (
    <button
      onClick={handlePrint}
      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition print:hidden"
    >
      📥 Download as PDF
    </button>
  );
};

export default DownloadPDFButton;

// Usage in App.jsx:
<DownloadPDFButton resumeName="Shahroz-Resume" />
```

---

### Snippet 7: Update Experience with Strong Achievements

Use this template for your experience bullets:

```javascript
// BEFORE (weak):
responsibilities: [
  "Developed web applications using React",
  "Worked with databases and APIs",
  "Collaborated with team members",
]

// AFTER (strong):
responsibilities: [
  "Built 3 customer-facing React applications serving 100K+ daily users, " +
  "increasing user engagement by 45% and generating $5M in annual revenue.",

  "Architected microservices platform reducing deployment time from 2 hours to 8 minutes " +
  "(93% improvement) and enabling 100+ safe deployments monthly.",

  "Led cross-functional team of 4 engineers and 2 designers delivering 12 features " +
  "on schedule with 95% code coverage, improving product satisfaction from 3.2 to 4.7 stars.",

  "Optimized database queries improving API response times from 850ms to 180ms (79% reduction), " +
  "directly improving mobile user retention by 25%.",
]
```

---

### Snippet 8: Add Professional Summary Template

Use this structure for personalInfo.summary:

```javascript
personalInfo: {
  summary:
    "Results-driven Full Stack Engineer with 8+ years of proven track record " +
    "building scalable applications serving millions of users. " +
    "Expertise in cloud-native architecture, microservices design, and technical leadership. " +
    "Successfully delivered 20+ production systems generating $25M+ in revenue. " +
    "Passionate about clean architecture, team development, and continuous innovation."
}
```

**Formula:**
```
[Seniority + Role] with [X years] of [Core Expertise].
[Key Achievement 1], [Key Achievement 2], and [Key Achievement 3].
[Passion/Vision statement].
```

---

### Snippet 9: Complete Updated App.jsx

Here's the complete updated `App.jsx` with all templates integrated:

```jsx
// App.jsx
import "./App.css";
import "./styles/animations.css";

import React, { useEffect, useState } from "react";
import Header from "./components/Header-Redesigned";
import Hero from "./components/Hero-Redesigned";
import About from "./components/About-Redesigned";
import Skills from "./components/Skills-Redesigned";
import Experience from "./components/Experience-Redesigned";
import Projects from "./components/Projects-Redesigned";
import Education from "./components/Education-Redesigned";
import Footer from "./components/Footer-Redesigned";

import { ArrowUp } from "lucide-react";

// Import all resume templates
import SimpleTemplate from "./components/resume_templates/SimpleTemplate";
import ProfessionalTemplate from "./components/resume_templates/ProfessionalTemplate";
import MinimalistTemplate from "./components/resume_templates/MinimalistTemplate";
import ATSMaxTemplate from "./components/resume_templates/ATSMaxTemplate";
import ExecutiveTemplate from "./components/resume_templates/ExecutiveTemplate";

// Template mapping
const templateMap = {
  simple: SimpleTemplate,
  professional: ProfessionalTemplate,
  minimalist: MinimalistTemplate,
  ats: ATSMaxTemplate,
  executive: ExecutiveTemplate,
};

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("simple");

  const fileMap = {
    "9d8f7g6h5j4k": "default",
    "2jsak23123": "laravel-vue",
    "5t4r3e2w1q0p": "mern",
    "0z9y8x7w6v5u": "tall",
  };

  const APP_SECRET =
    import.meta.env.VITE_RESUME_SECRET || "shahroz-portfolio-secret";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const templateParam = urlParams.get("template"); // NEW
    const resumeCode = urlParams.get("resume");
    const revealSecret = urlParams.get("reveal");

    if (revealSecret) {
      if (revealSecret === APP_SECRET) {
        setShowMap(true);
        return;
      } else {
        setNotFound(true);
        return;
      }
    }

    if (!resumeCode || !fileMap[resumeCode]) {
      setNotFound(true);
      return;
    }

    import(`./data/${fileMap[resumeCode]}.js`)
      .then((mod) => {
        setPortfolioData(mod.portfolioData);
        // NEW: Template selection logic
        const template = templateParam || mod.portfolioData.templateType || "simple";
        setSelectedTemplate(template);
      })
      .catch(() => setNotFound(true));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (showMap) {
    const origin =
      window.location.origin ||
      `${window.location.protocol}//${window.location.host}`;

    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Available Resume Mappings</h2>
        <p className="mb-4 text-sm text-gray-600">
          Share these links privately.
        </p>

        <ul className="space-y-3">
          {Object.entries(fileMap).map(([code, file]) => (
            <li
              key={code}
              className="flex items-center justify-between bg-white p-3 rounded shadow-sm"
            >
              <div>
                <div className="text-sm font-medium">{file}</div>
                <div className="text-xs text-gray-500">code: {code}</div>
              </div>

              <div className="text-right">
                <a
                  href={`${origin}/?resume=${code}`}
                  className="mr-3 text-sm underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open
                </a>

                <input
                  readOnly
                  value={`${origin}/?resume=${code}`}
                  className="text-xs p-1 border rounded w-[320px]"
                  onFocus={(e) => e.target.select()}
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <a href="/" className="px-4 py-2 bg-gray-800 text-white rounded">
            Go Home
          </a>
        </div>
      </div>
    );
  }

  if (notFound)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-500 mb-6">
          The requested portfolio does not exist.
        </p>

        <a href="/" className="px-6 py-3 bg-gray-900 text-white rounded-lg">
          Go Back
        </a>
      </div>
    );

  if (!portfolioData) return <p className="text-center mt-10">Loading...</p>;

  // NEW: Dynamic template selection
  const SelectedTemplate = templateMap[selectedTemplate] || SimpleTemplate;

  return (
    <div className="min-h-screen bg-white relative">
      {/* HIDDEN PRINT-ONLY TEMPLATE */}
      <div id="print-area" style={{ display: "none" }}>
        <SelectedTemplate data={portfolioData} />
      </div>

      {/* USER VISIBLE SECTIONS */}
      <Header data={portfolioData.personalInfo} />
      <Hero data={portfolioData.personalInfo} />
      <About data={portfolioData.personalInfo} />
      <Skills data={portfolioData.skills} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Education data={portfolioData.education} />
      <Footer data={portfolioData.personalInfo} />

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
```

---

### Snippet 10: Sample Data File with High-Quality Content

Use this for updating `src/data/default.js`:

```javascript
export const portfolioData = {
  templateType: "professional", // Change based on target industry
  
  personalInfo: {
    name: "SHAHROZ JAVED",
    title: "Full Stack Engineer & Technical Leader",
    email: "shahroz@email.com",
    phone: "+1 (555) 000-0000",
    address: "Your City, Your State",
    linkedin: "https://linkedin.com/in/shahroz",
    portfolio: "https://yourportfolio.com",
    summary:
      "Results-driven Full Stack Engineer with 5+ years of proven track record " +
      "building scalable web applications and leading high-performing engineering teams. " +
      "Expert in React, Node.js, cloud architecture, and mentoring junior developers. " +
      "Successfully delivered 10+ production systems generating $8M+ in company revenue. " +
      "Passionate about clean code, technical excellence, and fostering collaborative team culture.",
    certifications: [
      "AWS Certified Solutions Architect (2023)",
      "Google Cloud Professional Developer (2022)",
    ],
  },

  skills: {
    Frontend: ["React 19", "TypeScript", "Tailwind CSS", "Next.js"],
    Backend: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Redis"],
    DevOps: ["Docker", "Kubernetes", "AWS", "CI/CD Pipelines"],
    Leadership: ["Team Management", "Mentoring", "Code Architecture", "Agile"],
  },

  experience: {
    position: "Senior Full Stack Engineer",
    company: "Tech Company",
    location: "Your City",
    period: "2022 - Present",
    responsibilities: [
      "Led development of 3 customer-facing applications serving 100K+ daily users, " +
      "improving system performance by 60% and generating $3M in annual recurring revenue.",

      "Architected microservices platform reducing infrastructure costs by 40% ($500K/year) " +
      "while improving deployment frequency from monthly to 50+ deployments per week.",

      "Mentored 4 junior developers resulting in 2 promotions and 95% team retention rate, " +
      "establishing coding standards that reduced production bugs by 65%.",

      "Implemented comprehensive monitoring system reducing production incidents by 78% " +
      "and mean time to recovery from 1 hour to 12 minutes.",
    ],
  },

  education: [
    {
      degree: "B.S. Computer Science",
      institution: "Your University",
      period: "2019",
    },
  ],

  projects: [
    {
      name: "Real-Time Analytics Platform",
      description:
        "Built scalable analytics system processing 50M+ requests daily with sub-100ms query latency. " +
        "Served 500+ enterprise customers and generated $2M in annual SaaS revenue.",
      tech_stack: ["React", "Node.js", "PostgreSQL", "Elasticsearch", "AWS"],
      show_in_cv: true,
    },
    {
      name: "Customer Data Platform",
      description:
        "Engineered unified customer identity system ingesting data from 30+ sources. " +
        "Improved marketing campaign effectiveness by 25% through real-time segmentation.",
      tech_stack: ["TypeScript", "Node.js", "GraphQL", "Redis"],
      show_in_cv: true,
    },
  ],
};
```

---

## Implementation Checklist

- [ ] Choose primary template (Professional/Minimalist/ATS/Executive)
- [ ] Copy relevant snippet above into App.jsx
- [ ] Update data files with templateType field
- [ ] Update experience bullets with metrics and achievements
- [ ] Update professional summary with impact statement
- [ ] Add optional fields (portfolio, certifications, title)
- [ ] Test all templates by viewing pages
- [ ] Test printing/PDF export
- [ ] Get feedback from industry professionals
- [ ] Deploy to production

---

All snippets are copy-paste ready. Choose the level of complexity you want!
