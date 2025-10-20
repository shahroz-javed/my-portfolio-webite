import React from "react";

const Skills = ({ data }) => {
  const skillCategories = [
    { title: "Languages & Frameworks", skills: data.languages },
    { title: "IDEs", skills: data.ides },
    { title: "API & Response Management", skills: data.api },
    { title: "Databases", skills: data.databases },
    { title: "Version Control", skills: data.vcs },
    { title: "Project Management", skills: data.projectManagement },
    { title: "Third Party Integrations", skills: data.thirdParties },
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover-lift"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
