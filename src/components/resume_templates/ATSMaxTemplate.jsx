import React from "react";

/**
 * ATS Maximum Template - Optimized for Applicant Tracking Systems
 * Plain text style, maximum compatibility, zero fancy formatting
 * Perfect for large corporations and automated screening
 */
const ATSMaxTemplate = ({ data }) => {
  const { personalInfo, skills, experience, projects, education } = data;

  return (
    <div className="p-8 bg-white font-[Arial,sans-serif] text-gray-900 max-w-4xl mx-auto leading-relaxed">
      {/* ==================== HEADER ==================== */}
      <div className="mb-6 text-center border-b border-gray-300 pb-4">
        <h1 className="text-2xl font-bold mb-1">
          {personalInfo.name.toUpperCase()}
        </h1>
        {personalInfo.title && (
          <p className="font-semibold mb-2">{personalInfo.title}</p>
        )}

        {/* Contact */}
        <div className="text-sm space-y-1">
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.address}</p>
          {personalInfo.linkedin && <p>{personalInfo.linkedin}</p>}
          {personalInfo.portfolio && <p>{personalInfo.portfolio}</p>}
        </div>
      </div>

      {/* ==================== PROFESSIONAL SUMMARY ==================== */}
      <section className="mb-6">
        <h2 className="font-bold text-base mb-3">PROFESSIONAL SUMMARY</h2>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {personalInfo.summary}
        </p>
      </section>

      {/* ==================== SKILLS ==================== */}
      <section className="mb-6">
        <h2 className="font-bold text-base mb-3">TECHNICAL SKILLS</h2>

        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index} className="mb-3">
            <p className="text-sm font-semibold">
              {category
                .replace(/([A-Z])/g, " $1")
                .trim()
                .toUpperCase()}
              :
            </p>
            <p className="text-sm text-gray-800 ml-4">
              {Array.isArray(skillList) ? skillList.join(", ") : skillList}
            </p>
          </div>
        ))}
      </section>

      {/* ==================== PROFESSIONAL EXPERIENCE ==================== */}
      <section className="mb-6">
        <h2 className="font-bold text-base mb-3">PROFESSIONAL EXPERIENCE</h2>

        {experience && (
          <div>
            <p className="font-semibold text-sm">
              {experience.position.toUpperCase()}
            </p>
            <p className="text-sm">
              {experience.company}, {experience.location}
            </p>
            <p className="text-sm text-gray-700 mb-3">{experience.period}</p>

            <ul className="space-y-2 ml-4">
              {experience.responsibilities?.map((responsibility, idx) => (
                <li key={idx} className="text-sm text-gray-800">
                  • {responsibility}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ==================== EDUCATION ==================== */}
      <section className="mb-6">
        <h2 className="font-bold text-base mb-3">EDUCATION</h2>

        {education?.map((edu, index) => (
          <div key={index} className="mb-3">
            <p className="font-semibold text-sm">{edu.degree.toUpperCase()}</p>
            <p className="text-sm">{edu.institution}</p>
            <p className="text-sm text-gray-700">{edu.period}</p>
          </div>
        ))}
      </section>

      {/* ==================== PROJECTS ==================== */}
      {projects && projects.filter((p) => p.show_in_cv).length > 0 && (
        <section className="mb-6">
          <h2 className="font-bold text-base mb-3">PROJECTS</h2>

          {projects
            .filter((p) => p.show_in_cv)
            .map((project, idx) => (
              <div key={idx} className="mb-4">
                <p className="font-semibold text-sm">
                  {project.name.toUpperCase()}
                </p>
                <p className="text-sm text-gray-800 mt-1">
                  {project.description}
                </p>
                {project.tech_stack && (
                  <p className="text-sm text-gray-700 mt-2">
                    Technologies: {project.tech_stack.join(", ")}
                  </p>
                )}
              </div>
            ))}
        </section>
      )}

      {/* ==================== CERTIFICATIONS ==================== */}
      {personalInfo.certifications &&
        personalInfo.certifications.length > 0 && (
          <section>
            <h2 className="font-bold text-base mb-3">CERTIFICATIONS</h2>
            <ul className="space-y-1 ml-4">
              {personalInfo.certifications.map((cert, idx) => (
                <li key={idx} className="text-sm text-gray-800">
                  • {cert}
                </li>
              ))}
            </ul>
          </section>
        )}
    </div>
  );
};

export default ATSMaxTemplate;
