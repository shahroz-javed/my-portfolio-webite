import React from "react";
import { Mail, Linkedin, Github, Twitter, ArrowUp } from "lucide-react";
import { useSmoothScroll } from "~/hooks/useAnimations";


const Footer = ({ data }) => {
  const smoothScroll = useSmoothScroll();

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: `mailto:${data.email}`,
      color: "hover:text-blue-600 hover:bg-blue-50",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: data.linkedin || "#",
      color: "hover:text-blue-700 hover:bg-blue-50",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "hover:text-gray-900 hover:bg-gray-100",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "hover:text-sky-500 hover:bg-sky-50",
    },
  ];

  const footerLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-10 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-2000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {data.name}
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">{data.title}</p>
            <p className="text-gray-500 text-sm">
              Building elegant digital experiences with passion and precision.
            </p>
          </div>

          {/* Links section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => {
                      const id = link.href.replace("#", "");
                      if (id) smoothScroll(id);
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href={`mailto:${data.email}`}
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="text-sm">{data.email}</span>
              </a>
              <a
                href={`tel:${data.phone}`}
                className="block text-gray-400 hover:text-white transition-colors duration-300"
              >
                <span className="text-sm">{data.phone}</span>
              </a>
              <p className="text-gray-500 text-sm">{data.address}</p>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 py-12 border-y border-gray-800">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover-lift group ${social.color}`}
                aria-label={social.label}
              >
                <Icon
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-6">
          <div className="text-center md:text-left text-gray-500 text-sm">
            <p>
              © {currentYear} {data.name}. All rights reserved.
            </p>
            <p className="mt-2">
              Crafted with <span className="text-pink-500">❤️</span> and built
              with React
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            Back to Top
            <ArrowUp
              size={18}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
