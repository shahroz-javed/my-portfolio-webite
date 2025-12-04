import React from "react";
import { useScrollReveal, useInView } from "~/hooks/useAnimations";
import "../styles/animations.css";

const About = ({ data }) => {
  const { ref: contentRef, isRevealed } = useScrollReveal();

  const stats = [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Happy Clients", value: "30+" },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white to-blue-50/30"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div
              ref={contentRef}
              className={`transition-all duration-700 ${
                isRevealed ? "animate-fade-in-left" : ""
              }`}
            >
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  {data.summary}
                </p>

                {/* Key Highlights */}
                <div className="space-y-3 mt-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                    <p className="text-gray-600">
                      Full Stack Developer specializing in PHP, Laravel, and
                      modern JavaScript frameworks
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-600 mt-2 flex-shrink-0" />
                    <p className="text-gray-600">
                      Passionate about clean code, scalable architecture, and
                      performance optimization
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-600 mt-2 flex-shrink-0" />
                    <p className="text-gray-600">
                      Experienced in building REST APIs, real-time applications,
                      and modern UI interfaces
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Stats */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isRevealed ? "animate-fade-in-right" : ""
              }`}
            >
              <div className="space-y-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group glass-effect rounded-xl p-6 hover-lift border border-white/20 hover:border-white/40 backdrop-blur-xl"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">
                        {stat.label}
                      </span>
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                        {stat.value}
                      </span>
                    </div>
                    <div className="mt-4 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                        style={{
                          width: isRevealed ? "100%" : "0%",
                        }}
                      />
                    </div>
                  </div>
                ))}

                {/* Call-to-action */}
                <a
                  href="#projects"
                  className="block mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    View My Work
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
