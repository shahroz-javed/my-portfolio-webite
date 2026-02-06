import React from "react";

/**
 * Executive Template - Premium, High-Level Design
 * Designed for C-suite, management, and senior roles
 * Sophisticated spacing and hierarchy
 */
const ExecutiveTemplate = ({ data }) => {
  const { personalInfo, skills, experience, projects, education } = data;

  return (
    <div className="p-12 bg-white text-gray-900 max-w-4xl mx-auto">
      {/* ==================== HEADER ==================== */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold tracking-tight mb-2">
          {personalInfo.name}
        </h1>

        {personalInfo.title && (
          <p className="text-xl text-gray-600 font-light mb-6">
            {personalInfo.title}
          </p>
        )}

        {/* Contact */}
        <div className="flex flex-col gap-1 text-sm text-gray-700">
          <p>{personalInfo.email}</p>
          <p>{personalInfo.phone}</p>
          <p>{personalInfo.address}</p>
          {personalInfo.linkedin && (
            <p>
              <a
                href={personalInfo.linkedin}
                className="text-blue-600 hover:underline"
              >
                LinkedIn Profile
              </a>
            </p>
          )}
          {personalInfo.portfolio && (
            <p>
              <a
                href={personalInfo.portfolio}
                className="text-blue-600 hover:underline"
              >
                Portfolio
              </a>
            </p>
          )}
        </div>

        <div className="h-1 bg-gray-800 mt-6 w-20"></div>
      </div>

      {/* ==================== EXECUTIVE SUMMARY ==================== */}
      <section className="mb-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-4">
          Executive Summary
        </h2>
        <p className="text-sm leading-relaxed text-gray-800 max-w-3xl">
          {personalInfo.summary}
        </p>
      </section>

      {/* ==================== KEY COMPETENCIES ==================== */}
      <section className="mb-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-4">
          Key Competencies
        </h2>
        <div className="grid grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={index}>
              <p className="text-sm font-semibold text-gray-900 mb-2 capitalize">
                {category.replace(/([A-Z])/g, " $1").trim()}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {Array.isArray(skillList) ? skillList.join(" • ") : skillList}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CAREER HISTORY ==================== */}
      <section className="mb-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-6">
          Career History
        </h2>

        {experience && (
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-base font-bold text-gray-900">
                  {experience.position}
                </p>
                <p className="text-sm text-gray-700 font-medium">
                  {experience.company}
                </p>
                <p className="text-sm text-gray-600">{experience.location}</p>
              </div>
              <p className="text-sm text-gray-700 text-right">
                {experience.period}
              </p>
            </div>

            <ul className="space-y-2 mt-4 mb-6">
              {experience.responsibilities?.map((responsibility, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-800 flex gap-3 items-start"
                >
                  <span className="text-gray-400 mt-1 flex-shrink-0">▪</span>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* ==================== EDUCATION & CREDENTIALS ==================== */}
      <section className="mb-10">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-4">
          Education
        </h2>

        {education?.map((edu, index) => (
          <div key={index} className="mb-4">
            <p className="text-sm font-semibold text-gray-900">{edu.degree}</p>
            <p className="text-sm text-gray-700">{edu.institution}</p>
            <p className="text-sm text-gray-600">{edu.period}</p>
          </div>
        ))}
      </section>

      {/* ==================== NOTABLE PROJECTS ==================== */}
      {projects && projects.filter((p) => p.show_in_cv).length > 0 && (
        <section className="mb-10">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-4">
            Notable Projects & Initiatives
          </h2>

          {projects
            .filter((p) => p.show_in_cv)
            .map((project, idx) => (
              <div key={idx} className="mb-5">
                <p className="text-sm font-bold text-gray-900">
                  {project.name}
                </p>
                <p className="text-sm text-gray-800 mt-2">
                  {project.description}
                </p>
                {project.tech_stack && (
                  <p className="text-sm text-gray-700 mt-2">
                    <span className="font-semibold">Technologies:</span>{" "}
                    {project.tech_stack.join(", ")}
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
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-800 mb-4">
              Professional Certifications
            </h2>
            <ul className="space-y-1">
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

export default ExecutiveTemplate;
