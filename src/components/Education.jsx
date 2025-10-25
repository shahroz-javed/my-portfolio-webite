import React from 'react';

const Education = ({ data }) => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Education</h2>
          <div className="space-y-8">
            {data.map((edu, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-sm">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                    <p className="text-lg text-primary-600 font-semibold">{edu.institution}</p>
                  </div>
                  <span className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium mt-4 md:mt-0">
                    {edu.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;