import React from "react";

/**
 * Modern Minimalist Template - ATS-Optimized
 * Clean, contemporary design focused on clarity
 * Perfect for tech, startups, and creative roles
 */
const MinimalistTemplate = ({ data }) => {
  const { personalInfo, skills, experience, projects, education } = data;

  return (
    <div className="p-10 bg-white text-gray-900 max-w-4xl mx-auto">
      {/* ==================== HEADER ==================== */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold tracking-tight mb-1">
          {personalInfo.name}
        </h1>
        <p className="text-base text-gray-600 mb-4">
          {personalInfo.title || "Professional"}
        </p>

        {/* Contact Info - Horizontal */}
        <div className="flex flex-wrap gap-3 text-sm text-gray-700">
          <a
            href={`mailto:${personalInfo.email}`}
            className="hover:text-gray-900"
          >
            {personalInfo.email}
          </a>
          {personalInfo.phone && (
            <>
              <span className="text-gray-400">|</span>
              <span>{personalInfo.phone}</span>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span className="text-gray-400">|</span>
              <a href={personalInfo.linkedin} className="hover:text-gray-900">
                LinkedIn
              </a>
            </>
          )}
          {personalInfo.portfolio && (
            <>
              <span className="text-gray-400">|</span>
              <a href={personalInfo.portfolio} className="hover:text-gray-900">
                Portfolio
              </a>
            </>
          )}
        </div>
      </div>

      {/* ==================== PROFESSIONAL SUMMARY ==================== */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-3">
          About
        </h2>
        <p className="text-sm leading-relaxed text-gray-800">
          {personalInfo.summary}
        </p>
      </section>

      {/* ==================== CORE SKILLS ==================== */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-3">
          Skills
        </h2>
        <div className="space-y-3">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index} className="flex gap-6">
              <div className="min-w-max">
                <p className="text-sm font-semibold text-gray-900 capitalize">
                  {category.replace(/([A-Z])/g, " $1").trim()}
                </p>
              </div>
              <p className="text-sm text-gray-700">
                {Array.isArray(skillList) ? skillList.join(", ") : skillList}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== EXPERIENCE ==================== */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-4">
          Experience
        </h2>

        {experience && (
          <div>
            <div className="flex justify-between items-baseline mb-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {experience.position}
                </p>
                <p className="text-sm text-gray-600">
                  {experience.company} — {experience.location}
                </p>
              </div>
              <p className="text-sm text-gray-600 whitespace-nowrap">
                {experience.period}
              </p>
            </div>

            <ul className="space-y-2 mt-3 mb-6">
              {experience.responsibilities?.map((responsibility, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-800 flex gap-3 items-start"
                >
                  <span className="text-gray-400 mt-1">→</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ==================== EDUCATION ==================== */}
      <section className="mb-8">
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-4">
          Education
        </h2>

        {education?.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-baseline gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {edu.degree}
                </p>
                <p className="text-sm text-gray-600">{edu.institution}</p>
              </div>
              <p className="text-sm text-gray-600 whitespace-nowrap">
                {edu.period}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ==================== PROJECTS ==================== */}
      {projects && projects.filter((p) => p.show_in_cv).length > 0 && (
        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-800 mb-4">
            Featured Projects
          </h2>

          {projects
            .filter((p) => p.show_in_cv)
            .map((project, idx) => (
              <div key={idx} className="mb-4">
                <p className="text-sm font-semibold text-gray-900">
                  {project.name}
                </p>
                <p className="text-sm text-gray-700 mt-1">
                  {project.description}
                </p>
                {project.tech_stack && (
                  <p className="text-sm text-gray-600 mt-2">
                    {project.tech_stack.join(" • ")}
                  </p>
                )}
              </div>
            ))}
        </section>
      )}
    </div>
  );
};

export default MinimalistTemplate;
