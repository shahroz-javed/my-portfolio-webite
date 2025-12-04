# Resume Templates Integration Guide

## Current Setup

Your `App.jsx` currently uses `SimpleTemplate`. You can switch or expand to support multiple templates.

---

## Method 1: Quick Template Switch (Simplest)

Just change one line in `App.jsx`:

```jsx
// OLD:
import SimpleTemplate from "./components/resume_templates/SimpleTemplate";
// ...
<SimpleTemplate data={portfolioData} />

// NEW: Switch to ProfessionalTemplate
import ProfessionalTemplate from "./components/resume_templates/ProfessionalTemplate";
// ...
<ProfessionalTemplate data={portfolioData} />
```

**Best for:** When you want one specific template for all resume codes.

---

## Method 2: Template Selection Per Resume Code (Recommended)

This lets different resume codes use different templates.

### Step 1: Update your data files

Add `templateType` field to each data file:

```javascript
// src/data/default.js
export const portfolioData = {
  templateType: "professional", // or "minimalist", "ats", "executive"
  personalInfo: { ... },
  skills: { ... },
  // rest of data
}

// src/data/laravel-vue.js
export const portfolioData = {
  templateType: "minimalist", // Tech-focused = minimalist
  personalInfo: { ... },
  // rest of data
}

// src/data/mern.js
export const portfolioData = {
  templateType: "professional", // Professional = professional
  personalInfo: { ... },
  // rest of data
}

// src/data/tall.js
export const portfolioData = {
  templateType: "ats", // Unknown recruiter = ATS safe
  personalInfo: { ... },
  // rest of data
}
```

### Step 2: Update App.jsx

```jsx
// Add all template imports at the top
import SimpleTemplate from "./components/resume_templates/SimpleTemplate";
import ProfessionalTemplate from "./components/resume_templates/ProfessionalTemplate";
import MinimalistTemplate from "./components/resume_templates/MinimalistTemplate";
import ATSMaxTemplate from "./components/resume_templates/ATSMaxTemplate";
import ExecutiveTemplate from "./components/resume_templates/ExecutiveTemplate";

// Create template map
const templateMap = {
  simple: SimpleTemplate,
  professional: ProfessionalTemplate,
  minimalist: MinimalistTemplate,
  ats: ATSMaxTemplate,
  executive: ExecutiveTemplate,
};

// In your render section, replace:
// OLD: <SimpleTemplate data={portfolioData} />

// NEW: Use dynamic template selection
const SelectedTemplate = templateMap[portfolioData.templateType] || SimpleTemplate;

// Then render:
<div id="print-area" style={{ display: "none" }}>
  <SelectedTemplate data={portfolioData} />
</div>
```

**Best for:** Supporting multiple different resume styles for different applications.

---

## Method 3: Add Template Query Parameter

Even more flexible - allow template selection via URL:

```jsx
// In useEffect where you load data:
useEffect(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const templateParam = urlParams.get("template"); // NEW
  const resumeCode = urlParams.get("resume");

  // Set template, defaulting to data file value
  const templateType = templateParam || portfolioData.templateType || "simple";
  setTemplate(templateType);

  // ... rest of existing code
}, []);

// Usage:
// /?resume=5t4r3e2w1q0p&template=minimalist
// /?resume=2jsak23123&template=professional
```

---

## Complete App.jsx Example

Here's the complete integration with all imports and template switching:

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

// Import all templates
import SimpleTemplate from "./components/resume_templates/SimpleTemplate";
import ProfessionalTemplate from "./components/resume_templates/ProfessionalTemplate";
import MinimalistTemplate from "./components/resume_templates/MinimalistTemplate";
import ATSMaxTemplate from "./components/resume_templates/ATSMaxTemplate";
import ExecutiveTemplate from "./components/resume_templates/ExecutiveTemplate";

// Template map
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

  // ... existing code ...

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const resumeCode = urlParams.get("resume");
    const revealSecret = urlParams.get("reveal");
    const templateParam = urlParams.get("template"); // NEW

    // SHOW HIDDEN FILE MAP
    if (revealSecret) {
      if (revealSecret === APP_SECRET) {
        setShowMap(true);
        return;
      } else {
        setNotFound(true);
        return;
      }
    }

    // INVALID OR UNKNOWN CODE
    if (!resumeCode || !fileMap[resumeCode]) {
      setNotFound(true);
      return;
    }

    // LOAD DATA FILE
    import(`./data/${fileMap[resumeCode]}.js`)
      .then((mod) => {
        setPortfolioData(mod.portfolioData);
        
        // Set template: from URL param, or from data, or default
        const template = templateParam || mod.portfolioData.templateType || "simple";
        setSelectedTemplate(template);
      })
      .catch(() => setNotFound(true));
  }, []);

  // ... rest of existing code ...

  // In render section:
  if (!portfolioData) return <p className="text-center mt-10">Loading...</p>;

  // Get selected template
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
          className="fixed bottom-6 right-6 bg-gray-900 text-white p-3 rounded-full shadow-lg"
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

## Testing Different Templates

### Test URLs:

```
// Default (uses data file template setting)
http://localhost:5173/?resume=5t4r3e2w1q0p

// Force specific template
http://localhost:5173/?resume=5t4r3e2w1q0p&template=professional
http://localhost:5173/?resume=5t4r3e2w1q0p&template=minimalist
http://localhost:5173/?resume=5t4r3e2w1q0p&template=ats
http://localhost:5173/?resume=5t4r3e2w1q0p&template=executive
```

---

## Printing/Exporting

Users can print any template to PDF:

1. View the portfolio page
2. Press `Ctrl+P` (or `Cmd+P` on Mac)
3. Select "Save as PDF"
4. Choose margins and settings
5. Save

All templates are print-optimized and will look professional.

---

## Recommendations

### Use Professional Template for:
- Corporate jobs
- Finance, Banking, Government
- Traditional industries
- When uncertain

### Use Minimalist Template for:
- Tech companies
- Startups & scale-ups
- Design/Creative roles
- Growth-stage companies

### Use ATS Template for:
- Large companies with ATS screening
- Federal/Government positions
- When unsure about their system
- For maximum keyword visibility

### Use Executive Template for:
- C-Suite positions
- Senior Director/VP roles
- Executive recruiters
- Board positions

---

## Optional Enhancements

### Add Template Toggle Button

Add this to your footer or header for easy switching:

```jsx
<div className="print:hidden space-x-2">
  {Object.keys(templateMap).map((key) => (
    <button
      key={key}
      onClick={() => setSelectedTemplate(key)}
      className={`px-3 py-1 rounded ${
        selectedTemplate === key
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700"
      }`}
    >
      {key}
    </button>
  ))}
</div>
```

### Add Download as PDF Button

```jsx
<button
  onClick={() => window.print()}
  className="px-4 py-2 bg-blue-600 text-white rounded"
>
  Download as PDF
</button>
```

---

## Summary

✅ 5 professional ATS-optimized templates created
✅ Each tailored to different industries/roles
✅ Simple integration into existing App.jsx
✅ Dynamic template switching support
✅ Print-optimized for PDF export
✅ Professional writing samples provided

**Next Steps:**
1. Choose integration method (1, 2, or 3)
2. Update App.jsx accordingly
3. Update your data files with templateType
4. Test printing/PDF export
5. Share with recruiters!
