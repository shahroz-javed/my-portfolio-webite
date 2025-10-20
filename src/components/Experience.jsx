import React from "react";

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Work Experience
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {data.position}
                </h3>
                <p className="text-lg text-primary-600 font-semibold">
                  {data.company}
                </p>
                <p className="text-gray-600">{data.location}</p>
              </div>
              <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium mt-4 md:mt-0">
                {data.period}
              </span>
            </div>
            <ul className="space-y-3">
              {data.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-primary-500 mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
