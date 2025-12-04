import React, { useState } from "react";
import { Code2, Database, GitBranch, Wrench, Zap, Trophy } from "lucide-react";
import { useScrollReveal, useStaggerAnimation } from "~/hooks/useAnimations";

const Skills = ({ data }) => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: data.languages,
      icon: Code2,
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      title: "Databases",
      skills: data.databases,
      icon: Database,
      color: "from-purple-600 to-purple-400",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Version Control",
      skills: data.vcs,
      icon: GitBranch,
      color: "from-pink-600 to-pink-400",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      title: "Tools & Platforms",
      skills: data.ToolsAndPlatforms,
      icon: Wrench,
      color: "from-green-600 to-green-400",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      title: "Third Party Integrations",
      skills: data.thirdParties,
      icon: Zap,
      color: "from-orange-600 to-orange-400",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  const childRefs = useStaggerAnimation(skillCategories.length, 0.15);

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerRevealed ? "animate-fade-in-up" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Trophy size={32} className="text-amber-500" />
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <IconComponent size={18} />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden text-xs">
                  {category.title.split(" ")[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="max-w-5xl mx-auto">
          <div key={activeCategory} className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {skillCategories[activeCategory].title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {skillCategories[activeCategory].skills.map(
                (skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`group glass-effect ${skillCategories[activeCategory].bgColor} border ${skillCategories[activeCategory].borderColor} rounded-xl px-6 py-4 hover-lift backdrop-blur-xl transition-all duration-300`}
                    style={{
                      animation: `fadeInUp 0.6s ease-out forwards`,
                      animationDelay: `${skillIndex * 0.08}s`,
                    }}
                  >
                    <p className="text-gray-700 font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                      {skill}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Alternative: Show All Categories */}
          <div className="hidden lg:block space-y-12">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  {React.createElement(category.icon, {
                    size: 24,
                    className: `text-gray-700`,
                  })}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`group ${category.bgColor} border ${category.borderColor} rounded-lg px-4 py-3 hover-lift backdrop-blur-xl transition-all duration-300`}
                      style={{
                        animation: headerRevealed
                          ? `fadeInUp 0.6s ease-out forwards`
                          : "none",
                        animationDelay: `${skillIndex * 0.05}s`,
                      }}
                    >
                      <p className="text-sm font-medium text-gray-700 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 text-center">
                        {skill}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
