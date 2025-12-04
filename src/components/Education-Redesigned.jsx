import React from "react";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { useScrollReveal } from "../hooks/useAnimations";

const Education = ({ data }) => {
  const { ref: containerRef, isRevealed } = useScrollReveal();

  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-white to-pink-50/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
              <GraduationCap size={32} className="text-pink-600" />
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Timeline */}
          <div
            ref={containerRef}
            className={`space-y-8 transition-all duration-700 ${
              isRevealed ? "animate-fade-in-up" : ""
            }`}
          >
            {data.map((edu, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animation: isRevealed
                    ? `fadeInUp 0.6s ease-out forwards`
                    : "none",
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {/* Timeline dot and line (desktop) */}
                <div className="hidden md:block absolute -left-12 top-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full flex items-center justify-center text-white shadow-lg border-4 border-white">
                    <BookOpen size={16} />
                  </div>
                  {index !== data.length - 1 && (
                    <div className="absolute top-8 left-3.5 w-0.5 h-24 bg-gradient-to-b from-pink-600 to-purple-600" />
                  )}
                </div>

                {/* Card */}
                <div className="md:ml-12 glass-effect border border-white/20 backdrop-blur-xl rounded-2xl p-8 hover-lift group">
                  {/* Flex layout for responsive design */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 mb-6">
                    <div className="flex-1">
                      {/* Degree */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:gradient-text transition-all duration-300">
                        {edu.degree}
                      </h3>

                      {/* Institution */}
                      <p className="text-lg text-blue-600 font-semibold mb-3">
                        {edu.institution}
                      </p>

                      {/* Certificate or details */}
                      <p className="text-gray-600 text-sm">
                        Completed coursework in software development,
                        algorithms, database management, and web technologies
                      </p>
                    </div>

                    {/* Period Badge */}
                    <div className="flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 px-4 py-3 rounded-lg border border-pink-200 whitespace-nowrap md:ml-auto">
                      <Calendar
                        size={18}
                        className="text-pink-600 flex-shrink-0"
                      />
                      <span className="font-semibold text-gray-900">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="pt-6 border-t border-white/20 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">
                        Strong foundation in core computer science concepts
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">
                        Practical experience with modern development practices
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-pink-600 mt-2 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">
                        Collaborative team projects and problem-solving
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-6">
              Continuous learner passionate about staying updated with latest
              technologies
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                View Certifications
              </a>
              <a
                href="#"
                className="px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
