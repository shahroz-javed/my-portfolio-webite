import React from "react";

const SimpleTemplate = ({ data }) => {
  const { personalInfo, skills, experience, projects, education } = data;

  return (
    <div className="p-10 bg-white">
      {/* HEADER */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-wide">
          {personalInfo.name}
        </h1>

        <p className="mt-1">
          {personalInfo.phone} • {personalInfo.address}
        </p>

        <a href={"mailto:" + personalInfo.email} className="text-blue-600 mt-1">
          {personalInfo.email}
        </a>
        <span className="text-xl mx-1">⋄</span>
        <a href={personalInfo.linkedin} className="text-blue-600 mt-1">
          {" "}
          linkedin.com/shahroz
        </a>
        {personalInfo.portfolio && (
          <>
            <span className="text-xl mx-1">⋄</span>
            <a href={personalInfo.portfolio} className="text-blue-600 mt-1">
              {" "}
              Portfolio
            </a>
          </>
        )}
      </header>

      {/* OBJECTIVE */}
      <section className="mb-6">
        <h2 className="font-bold text-lg tracking-wide">OBJECTIVE</h2>
        <hr className="border-black border-[1px] mb-1" />
        <p className="mt-1">{personalInfo.summary}</p>
      </section>

      {/* EDUCATION */}
      <section className="mb-6">
        <h2 className="font-bold text-lg tracking-wide">EDUCATION</h2>
        <hr className="border-black border-[1px] mb-1" />

        {education?.map((edu, index) => (
          <div key={index} className="flex justify-between mt-2">
            <div>
              <p className="font-semibold">{edu.degree}</p>
              <p className="text-sm text-gray-700">{edu.institution}</p>
            </div>
            <p className="text-sm text-gray-700">{edu.period}</p>
          </div>
        ))}
      </section>

      {/* SKILLS */}
      <section className="mb-6">
        <h2 className="font-bold text-lg tracking-wide">SKILLS</h2>
        <hr className="border-black border-[1px] mb-1" />

        <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
          {Object.entries(skills).map(([category, list], index) => (
            <div key={index}>
              <p className="font-semibold capitalize">
                {category.replace(/([A-Z])/g, " $1")}
              </p>
              <p>{list.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section>
        <h2 className="font-bold text-lg tracking-wide">EXPERIENCE</h2>
        <hr className="border-black border-[1px] mb-1" />

        <div className="mt-4">
          <div className="flex justify-between">
            <p className="font-semibold">
              {experience.position} — {experience.company}
            </p>
            <p className="text-sm text-gray-700">
              {experience.period}
              <br />
              {experience.location}
            </p>
          </div>

          <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
            {experience.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mt-10">
        <h2 className="font-bold text-lg tracking-wide">PROJECTS</h2>
        <hr className="border-black border-[1px] mb-1" />

        {projects
          .filter((p) => p.show_in_cv)
          .map((project, idx) => (
            <div key={idx} className="mt-5">
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold me-2">
                  {project.name} — {project.project_type}:
                </span>
                {project.description}
              </p>

              {/* <p className="mt-2 text-sm">
                <span className="font-semibold">Tech Stack: </span>
                {project.tech_stack.join(", ")}
              </p>

              <ul className="list-disc ml-6 mt-2 text-sm space-y-1">
                {project.responsibilities.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul> */}
            </div>
          ))}
      </section>
    </div>
  );
};

export default SimpleTemplate;
