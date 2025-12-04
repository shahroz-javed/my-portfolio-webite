# Resume Template Quick Reference

## 📋 Templates Created

| Template | Best For | Key Feature | File |
|----------|----------|------------|------|
| **SimpleTemplate** | Baseline/Keep as is | Basic structure | `SimpleTemplate.jsx` |
| **ProfessionalTemplate** | Corporate, Finance, Government | Formal hierarchy, 2-col skills | `ProfessionalTemplate.jsx` |
| **MinimalistTemplate** | Tech, Startups, Creatives | Modern, clean, arrow bullets | `MinimalistTemplate.jsx` |
| **ATSMaxTemplate** | Large orgs, ATS screening | Maximum ATS compatibility | `ATSMaxTemplate.jsx` |
| **ExecutiveTemplate** | C-Suite, Senior Leaders | Premium spacing, horizontal line | `ExecutiveTemplate.jsx` |

---

## 🎯 Which Template to Use?

### Corporate Job?
→ Use **ProfessionalTemplate**

### Tech Company / Startup?
→ Use **MinimalistTemplate**

### Not Sure About Their System?
→ Use **ATSMaxTemplate** (safest option)

### Senior/Executive Role?
→ Use **ExecutiveTemplate**

### Government / Large Org?
→ Use **ATSMaxTemplate** (ATS pass-through)

---

## ✅ What Makes a Great Resume

### Structure (In Order)
1. **Header** - Name, title, contact info
2. **Summary** - 3-4 lines of impact, not tasks
3. **Skills** - Organized by category, most relevant first
4. **Experience** - Reverse chronological, achievement-focused
5. **Education** - Degree, school, year
6. **Projects** - (Optional) Show-off pieces
7. **Certifications** - (Optional) Industry-relevant

### Writing Rules
- **Action Verbs**: Led, Built, Architected, Engineered, Optimized
- **Quantify**: Always use numbers - "improved by 47%", "served 100K users"
- **Business Value**: Show impact - "saved $500K/year", "increased revenue by 25%"
- **One Page**: Preferred for most roles (1.5 max for senior)
- **No Fluff**: Every line should show value

### Before & After

**❌ WEAK:**
```
Responsible for developing web applications
Used React, Node.js, and databases
Improved system performance
Led team of developers
```

**✅ STRONG:**
```
Built 3 customer-facing React applications serving 50K+ daily users with 99.8% uptime
Architected microservices infrastructure reducing deployment time from 2 hours to 8 minutes
Optimized database queries improving page load times by 62% (800ms → 300ms)
Led 8-person engineering team delivering 25+ features across 4 products, improving retention by 35%
```

---

## 🚀 How to Implement

### Option 1: Simple Replacement
```jsx
// In App.jsx, replace SimpleTemplate with:
import ProfessionalTemplate from "./components/resume_templates/ProfessionalTemplate";

// Then in render:
<ProfessionalTemplate data={portfolioData} />
```

### Option 2: Add Template Selection to Data
```jsx
// In your data file (e.g., default.js):
export const portfolioData = {
  templateType: "professional", // Add this field
  personalInfo: { ... },
  // rest of data
}

// In App.jsx:
const templateMap = {
  simple: SimpleTemplate,
  professional: ProfessionalTemplate,
  minimalist: MinimalistTemplate,
  ats: ATSMaxTemplate,
  executive: ExecutiveTemplate,
};

const SelectedTemplate = templateMap[portfolioData.templateType || "simple"];
<SelectedTemplate data={portfolioData} />
```

---

## 📊 Data Structure Checklist

Each template expects:

```javascript
✅ personalInfo
   - name (required)
   - title (recommended)
   - email (required)
   - phone (required)
   - address (optional)
   - linkedin (recommended)
   - portfolio (optional)
   - summary (required)
   - certifications (optional array)

✅ skills
   - Object with category keys → array of skills
   - Example: { frontend: ["React", "Vue"], backend: ["Node.js", "Python"] }

✅ experience
   - position, company, location, period
   - responsibilities (array of strings with metrics)

✅ education
   - Array of { degree, institution, period }

✅ projects (optional)
   - Array of { name, description, tech_stack, show_in_cv }

```

---

## 🎨 Visual Comparison

| Aspect | Professional | Minimalist | ATSMax | Executive |
|--------|--------------|-----------|--------|-----------|
| **Font** | Georgia (serif) | Sans-serif | Arial | Modern serif |
| **Colors** | Minimal, professional | Clean, modern | None (plain) | Minimal, elegant |
| **Spacing** | Good | Excellent | Compact | Premium |
| **Visual Elements** | Border line | Minimal | None | Horizontal line |
| **Best for** | Corporate | Tech | Systems | Leadership |

---

## 🔍 ATS Optimization Checklist

✅ Plain text style (minimal formatting)
✅ Single column layout (no side-by-side columns)
✅ Standard section headers (EXPERIENCE, EDUCATION, SKILLS)
✅ Simple bullet points (-, •, *)
✅ No images, tables, or graphics
✅ Standard fonts (Arial, Georgia, Calibri)
✅ Simple color scheme or no colors
✅ Keywords from job description included
✅ Quantifiable metrics and achievements
✅ Action verbs, not "responsible for"

---

## 📝 Sample Achievement Statements

### Strong Examples

**Before:** "Worked on website"
**After:** "Built responsive e-commerce website using React, increasing conversion rate by 18% and driving $2M in additional annual revenue"

---

**Before:** "Improved performance"
**After:** "Optimized API response times from 850ms to 180ms (79% improvement) through database query optimization and caching strategy, improving user retention by 25%"

---

**Before:** "Led team"
**After:** "Led cross-functional team of 6 engineers, 2 designers, and 1 PM delivering 15 features across 3 products, achieving 92% on-time delivery rate and 4.8/5 customer satisfaction"

---

**Before:** "Used various technologies"
**After:** "Architected cloud-native microservices platform using Docker, Kubernetes, and AWS, reducing infrastructure costs by 40% ($600K/year) and improving system reliability from 99.5% to 99.99% uptime"

---

## 🎯 Pro Tips

1. **Customize for each job** - Use keywords from the job description
2. **Tailor your summary** - Change it to match the role
3. **Prioritize achievements** - Put your best work first
4. **Keep metrics fresh** - Update numbers regularly
5. **Get feedback** - Have recruiters/industry professionals review
6. **Proofread** - Any typo eliminates you for many roles
7. **Save as PDF** - Preserves formatting when submitting
8. **Use consistent formatting** - Same date format, bullet style throughout
9. **Show progression** - Show how you've grown over time
10. **Be honest** - All information should be 100% accurate

---

## 📚 Reference Files

- **Guide**: `RESUME_TEMPLATES_GUIDE.md`
- **Sample Data**: `src/data/sample-best-practices.js`
- **Templates Location**: `src/components/resume_templates/`

---

**Ready to use? Pick your template and get started!** 🚀
