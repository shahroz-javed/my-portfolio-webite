import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import { useScrollReveal } from "~/hooks/useAnimations";

const Projects = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalProject, setModalProject] = useState(null);
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();

  const projectsPerPage = 6;

  // Only consider projects with status === 1 for display
  const visibleProjects = data.filter((p) => p.status === 1);

  // Extract unique categories from visible projects
  const categories = [
    "All",
    ...new Set(visibleProjects.map((p) => p.category)),
  ];

  // Filter projects by category (applies only to visible projects)
  const filteredProjects =
    selectedCategory === "All"
      ? visibleProjects
      : visibleProjects.filter((p) => p.category === selectedCategory);

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = filteredProjects.slice(
    startIndex,
    startIndex + projectsPerPage,
  );

  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Color mapping for categories
  const getCategoryColor = (category) => {
    const colors = {
      "Web App": "from-blue-600 to-cyan-600",
      "E-commerce": "from-purple-600 to-pink-600",
      API: "from-green-600 to-emerald-600",
      Dashboard: "from-orange-600 to-red-600",
      CMS: "from-indigo-600 to-purple-600",
      Other: "from-gray-600 to-slate-600",
    };
    return colors[category] || "from-blue-600 to-purple-600";
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerRevealed ? "animate-fade-in-up" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A showcase of recent work and creative solutions
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-4" />
        </div>

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          key={selectedCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="group glass-effect border border-white/20 backdrop-blur-xl rounded-2xl overflow-hidden hover-lift transition-all duration-300"
              style={{
                animation: headerRevealed
                  ? `fadeInUp 0.6s ease-out forwards`
                  : "none",
                animationDelay: `${index * 0.08}s`,
              }}
            >
              {/* Image/Placeholder */}
              <div
                className={`h-40 bg-gradient-to-br ${getCategoryColor(
                  project.category,
                )} relative overflow-hidden`}
              >
                {/* Gradient animation on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Icon placeholder */}
                <div className="absolute inset-0 flex items-center justify-center text-white/30 group-hover:text-white/50 transition-colors">
                  <svg
                    className="w-16 h-16 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(
                      project.category,
                    )} shadow-md`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:gradient-text transition-all duration-300">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-white/20">
                  <button
                    onClick={() => setModalProject(project)}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink size={16} />
                    <span className="hidden sm:inline">Details</span>
                  </button>

                  {project.link ? (
                    <button
                      onClick={() =>
                        window.open(
                          project.link,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                      title="View live project"
                    >
                      <ExternalLink size={16} />
                      <span className="hidden sm:inline">Live</span>
                    </button>
                  ) : null}

                  {project.repo || project.code_link ? (
                    <button
                      onClick={() =>
                        window.open(
                          project.repo || project.code_link,
                          "_blank",
                          "noopener,noreferrer",
                        )
                      }
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                      <span className="hidden sm:inline">Code</span>
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {modalProject && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={() => setModalProject(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {modalProject.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 mr-2">
                      {modalProject.category}
                    </span>
                    {modalProject.project_type}
                  </p>
                </div>
                <button
                  onClick={() => setModalProject(null)}
                  className="text-gray-400 hover:text-gray-600 transition-colors text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Description */}
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    {modalProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                {modalProject.tech_stack &&
                  modalProject.tech_stack.length > 0 && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="font-semibold text-gray-900 mb-3">
                        🛠️ Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {modalProject.tech_stack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white text-blue-600 border border-blue-300 rounded-lg text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Skills Used */}
                {modalProject.skills_used &&
                  modalProject.skills_used.length > 0 && (
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <p className="font-semibold text-gray-900 mb-3">
                        💡 Skills Used
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {modalProject.skills_used.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white text-purple-600 border border-purple-300 rounded-lg text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                {/* Responsibilities */}
                {modalProject.responsibilities &&
                  modalProject.responsibilities.length > 0 && (
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-semibold text-gray-900 mb-3">
                        ✓ Responsibilities
                      </p>
                      <ul className="space-y-2">
                        {modalProject.responsibilities.map((r, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-gray-700"
                          >
                            <span className="text-green-600 font-bold">•</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Achievements */}
                {modalProject.achievements &&
                  modalProject.achievements.length > 0 && (
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <p className="font-semibold text-gray-900 mb-3">
                        🏆 Achievements
                      </p>
                      <ul className="space-y-2">
                        {modalProject.achievements.map((a, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-gray-700"
                          >
                            <span className="text-orange-600 font-bold">•</span>
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {/* Demo Video */}
                {modalProject.demo && (
                  <div>
                    <p className="font-semibold text-gray-900 mb-3">📹 Demo</p>
                    <video
                      src={modalProject.demo}
                      controls
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6 flex gap-3">
                {modalProject.link && (
                  <button
                    onClick={() =>
                      window.open(
                        modalProject.link,
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg font-semibold transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    View Live Project
                  </button>
                )}
                {modalProject.repo || modalProject.code_link ? (
                  <button
                    onClick={() =>
                      window.open(
                        modalProject.repo || modalProject.code_link,
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-all duration-300"
                  >
                    <Github size={18} />
                    View Code
                  </button>
                ) : null}
                <button
                  onClick={() => setModalProject(null)}
                  className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {/* Prev Button */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105"
              }`}
            >
              <ChevronLeft size={20} />
              <span className="hidden sm:inline">Prev</span>
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 1)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                    currentPage === index + 1
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105"
              }`}
            >
              <span className="hidden sm:inline">Next</span>
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Empty State */}
        {currentProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
