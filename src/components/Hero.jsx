import React from "react";

const Hero = ({ data }) => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">{data.name}</h1>
          <h2 className="text-2xl mb-12 text-blue-100">{data.title}</h2>
          
          {/* Contact Info - Better aligned */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12">
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[280px]">
              <svg
                className="w-5 h-5 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm md:text-base">{data.address}</span>
            </div>
            
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[280px]">
              <svg
                className="w-5 h-5 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm md:text-base">{data.phone}</span>
            </div>
            
            <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[280px]">
              <svg
                className="w-5 h-5 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm md:text-base break-all">{data.email}</span>
            </div>
          </div>

          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;