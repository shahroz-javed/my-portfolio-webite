import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "~/hooks/useAnimations";

const Experience = ({ data }) => {
  const { ref: contentRef, isRevealed } = useScrollReveal();

  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b from-white to-purple-50/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <Briefcase size={32} className="text-blue-600" />
              <span className="gradient-text">Work Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Experience Card */}
          <div
            ref={contentRef}
            className={`transition-all duration-700 ${
              isRevealed ? "animate-fade-in-up" : ""
            }`}
          >
            <div className="relative">
              {/* Timeline line (desktop only) */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600" />

              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-0 w-16 h-16 items-center justify-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg">
                  <Briefcase size={24} />
                </div>
              </div>

              {/* Card content */}
              <div className="md:ml-32 glass-effect border border-white/20 backdrop-blur-xl rounded-2xl p-8 hover-lift">
                {/* Header info */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {data.position}
                    </h3>
                    <p className="text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold mb-2">
                      {data.company}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin size={18} />
                      <span>{data.location}</span>
                    </div>
                  </div>

                  <div className="flex items-end">
                    <div className="flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-3 rounded-lg border border-blue-200 w-full">
                      <Calendar
                        size={20}
                        className="text-blue-600 flex-shrink-0"
                      />
                      <span className="font-semibold text-gray-900">
                        {data.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-3">
                    {data.responsibilities.map((responsibility, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-4"
                        style={{
                          animation: isRevealed
                            ? `fadeInUp 0.6s ease-out forwards`
                            : "none",
                          animationDelay: `${index * 0.1}s`,
                        }}
                      >
                        <div className="flex-shrink-0 mt-1">
                          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
                            <svg
                              className="h-4 w-4 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <p className="text-gray-700 leading-relaxed flex-1">
                          {responsibility}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tag */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "PHP/Laravel",
                      "Node.js",
                      "Vue.js",
                      "React",
                      "REST APIs",
                      "MySQL",
                    ].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 border border-blue-200 hover:bg-blue-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
