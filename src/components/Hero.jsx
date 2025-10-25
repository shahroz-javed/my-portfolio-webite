import React from "react";
import { MapPin, Phone, Mail, Download } from "lucide-react"; // Added Download icon

const Hero = ({ data }) => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Name & Title */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{data.name}</h1>
          <h2 className="text-xl sm:text-2xl mb-12 text-blue-100">
            {data.title}
          </h2>

          {/* Contact Info */}
          <div
            className="
              flex flex-col md:flex-row 
              justify-center items-center 
              gap-4 sm:gap-6 md:gap-8 
              mb-12 flex-wrap
            "
          >
            {/* Address */}
            <div
              className="
                flex items-center justify-center 
                bg-white/10 backdrop-blur-sm 
                rounded-lg px-4 py-3 
                min-w-[260px] md:min-w-[240px] 
                whitespace-nowrap
              "
            >
              <MapPin size={18} className="mr-3 flex-shrink-0 text-blue-200" />
              <span className="text-sm md:text-base">{data.address}</span>
            </div>

            {/* Phone */}
            <div
              className="
                flex items-center justify-center 
                bg-white/10 backdrop-blur-sm 
                rounded-lg px-4 py-3 
                min-w-[260px] md:min-w-[240px] 
                whitespace-nowrap
              "
            >
              <Phone size={18} className="mr-3 flex-shrink-0 text-blue-200" />
              <span className="text-sm md:text-base">{data.phone}</span>
            </div>

            {/* Email */}
            <div
              className="
                flex items-center justify-center 
                bg-white/10 backdrop-blur-sm 
                rounded-lg px-4 py-3 
                min-w-[260px] md:min-w-[240px] 
                overflow-hidden
              "
            >
              <Mail size={18} className="mr-3 flex-shrink-0 text-blue-200" />
              <span
                className="
                  text-sm md:text-base 
                  truncate md:whitespace-nowrap 
                  max-w-[180px] sm:max-w-[240px] md:max-w-[260px]
                "
                title={data.email}
              >
                {data.email}
              </span>
            </div>
          </div>

          {/* Download CV Button */}
          <button
            className="
              group
              bg-white text-primary-600 px-8 py-4 
              rounded-lg font-semibold 
              hover:bg-gray-100 transition-all duration-300 
              transform hover:scale-105 shadow-lg 
              flex items-center justify-center gap-2 mx-auto
            "
          >
            <Download
              size={20}
              className="group-hover:translate-y-[-2px] transition-transform duration-300"
            />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
