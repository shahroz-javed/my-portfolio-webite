import React from "react";

const About = ({ data }) => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            About Me
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed">
              {data.summary}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
