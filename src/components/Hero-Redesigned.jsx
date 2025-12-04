import React from "react";
import { MapPin, Phone, Mail, Download, ArrowDown } from "lucide-react";
import { useScrollReveal } from "~/hooks/useAnimations";

const Hero = ({ data }) => {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal();
  const { ref: ctaRef, isRevealed: ctaRevealed } = useScrollReveal();

  function printDiv(divId) {
    const divContent = document.getElementById(divId)?.innerHTML;
    const originalContent = document.body.innerHTML;
    document.body.innerHTML = divContent;
    window.print();
    document.body.innerHTML = originalContent;
    window.location.reload();
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-4000" />

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading with Gradient */}
          <div
            ref={titleRef}
            className={`mb-8 transition-all duration-1000 ${
              titleRevealed ? "animate-fade-in-up" : ""
            }`}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="gradient-text">Creative Developer</span>
              <br />
              <span className="text-gray-900">& Problem Solver</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 font-light mb-6 max-w-2xl mx-auto leading-relaxed">
              Building elegant digital experiences with modern web technologies
            </p>
          </div>

          {/* Contact Info Cards - Enhanced */}
          <div
            className={`flex flex-col md:flex-row justify-center items-center gap-4 mb-12 flex-wrap transition-all duration-1000 ${
              titleRevealed ? "animate-fade-in" : ""
            }`}
          >
            {/* Address Card */}
            <div className="group glass-effect rounded-xl px-6 py-4 hover-lift backdrop-blur-xl border border-white/20 hover:border-white/40">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                  <MapPin size={20} className="text-blue-600" />
                </div>
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {data.address}
                </span>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group glass-effect rounded-xl px-6 py-4 hover-lift backdrop-blur-xl border border-white/20 hover:border-white/40">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <Phone size={20} className="text-purple-600" />
                </div>
                <span className="text-sm md:text-base text-gray-700 font-medium">
                  {data.phone}
                </span>
              </div>
            </div>

            {/* Email Card */}
            <div className="group glass-effect rounded-xl px-6 py-4 hover-lift backdrop-blur-xl border border-white/20 hover:border-white/40">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-pink-100 rounded-lg group-hover:bg-pink-200 transition-colors">
                  <Mail size={20} className="text-pink-600" />
                </div>
                <span className="text-sm md:text-base text-gray-700 font-medium truncate">
                  {data.email}
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div
            ref={ctaRef}
            className={`transition-all duration-1000 ${
              ctaRevealed ? "animate-fade-in-up" : ""
            }`}
          >
            <button
              onClick={() => printDiv("print-area")}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <span className="relative flex items-center gap-2">
                <Download
                  size={20}
                  className="group-hover:animate-bounce-subtle transition-transform"
                />
                Download Resume
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 flex justify-center">
            <div className="animate-scroll-down flex flex-col items-center">
              <p className="text-sm text-gray-500 mb-2">Scroll to explore</p>
              <ArrowDown size={20} className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
