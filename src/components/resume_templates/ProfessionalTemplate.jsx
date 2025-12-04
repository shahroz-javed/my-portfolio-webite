import React from "react";

/**
 * Professional Template - ATS-Optimized
 * Modern, clean design with strong hierarchy
 * Perfect for corporate, finance, and management roles
 */
const ProfessionalTemplate = ({ data }) => {
  const { personalInfo, skills, experience, projects, education } = data;

  return (
    <div className="p-12 bg-white font-[Georgia] text-gray-900 max-w-4xl mx-auto">
      {/* ==================== HEADER ==================== */}
      <div className="border-b-2 border-gray-800 pb-6 mb-6">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          {personalInfo.name}
        </h1>
        <p className="text-sm text-gray-700 mb-3">
          {personalInfo.title || "Professional"}
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap gap-4 text-sm">
          <span>{personalInfo.email}</span>
          <span>•</span>
          <span>{personalInfo.phone}</span>
          <span>•</span>
          <span>{personalInfo.address}</span>
          <span>•</span>
          <a
            href={personalInfo.linkedin}
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
          {personalInfo.portfolio && (
            <>
              <span>•</span>
              <a
                href={personalInfo.portfolio}
                className="text-blue-600 hover:underline"
              >
                Portfolio
              </a>
            </>
          )}
        </div>
      </div>

      {/* ==================== PROFESSIONAL SUMMARY ==================== */}
      <section className="mb-8">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-800 mb-3">
          Professional Summary
        </h2>
        <p className="text-sm leading-relaxed text-gray-800">
          {personalInfo.summary}
        </p>
      </section>

      {/* ==================== CORE COMPETENCIES ==================== */}
      <section className="mb-8">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-800 mb-3">
          Core Competencies
        </h2>
        <div className="grid grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index}>
              <p className="text-sm font-semibold text-gray-900 mb-2">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </p>
              <p className="text-sm text-gray-700">
                {Array.isArray(skillList) ? skillList.join(", ") : skillList}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== PROFESSIONAL EXPERIENCE ==================== */}
      <section className="mb-8">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-800 mb-4">
          Professional Experience
        </h2>

        {experience && (
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-sm font-bold text-gray-900">
                  {experience.position}
                </p>
                <p className="text-sm text-gray-700">
                  {experience.company} | {experience.location}
                </p>
              </div>
              <p className="text-sm text-gray-700 text-right whitespace-nowrap ml-4">
                {experience.period}
              </p>
            </div>

            <ul className="list-disc ml-5 space-y-2 mt-3 mb-6">
              {experience.responsibilities?.map((responsibility, idx) => (
                <li key={idx} className="text-sm text-gray-800">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ==================== EDUCATION ==================== */}
      <section className="mb-8">
        <h2 className="text-sm font-bold uppercase tracking-wide text-gray-800 mb-4">
          Education
        </h2>

        {education?.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-bold text-gray-900">{edu.degree}</p>
                <p className="text-sm text-gray-700">{edu.institution}</p>
              </div>
              <p className="text-sm text-gray-700 whitespace-nowrap ml-4">
                {edu.period}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ==================== PROJECTS (Optional) ==================== */}
      {projects && projects.filter((p) => p.show_in_cv).length > 0 && (
        <section className="mb-8">
          <h2 className="text-sm font-bold uppercase tracking-wide text-gray-800 mb-4">
            Key Projects
          </h2>

          {projects
            .filter((p) => p.show_in_cv)
            .map((project, idx) => (
              <div key={idx} className="mb-4">
                <p className="text-sm font-bold text-gray-900">
                  {project.name}
                </p>
                <p className="text-sm text-gray-800 mt-1">
                  {project.description}
                </p>
                {project.tech_stack && (
                  <p className="text-sm text-gray-700 mt-1">
                    <span className="font-semibold">Technologies:</span>{" "}
                    {project.tech_stack.join(", ")}
                  </p>
                )}
              </div>
            ))}
        </section>
      )}

      {/* ==================== CERTIFICATIONS (Optional) ==================== */}
      {personalInfo.certifications &&
        personalInfo.certifications.length > 0 && (
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wide text-gray-800 mb-4">
              Certifications
            </h2>
            <ul className="list-disc ml-5 space-y-1">
              {personalInfo.certifications.map((cert, idx) => (
                <li key={idx} className="text-sm text-gray-800">
                  {cert}
                </li>
              ))}
            </ul>
          </section>
        )}
    </div>
  );
};

export default ProfessionalTemplate;
