// App.jsx
import "./App.css";
import "./styles/animations.css";

import React, { useEffect, useState } from "react";
import Header from "./components/Header-Redesigned";
import Hero from "./components/Hero-Redesigned";
import About from "./components/About-Redesigned";
import Skills from "./components/Skills-Redesigned";
import Experience from "./components/Experience-Redesigned";
import Projects from "./components/Projects-Redesigned";
import Education from "./components/Education-Redesigned";
import Footer from "./components/Footer-Redesigned";

import { ArrowUp } from "lucide-react";
// import SimpleTemplate from "./components/resume_templates/SimpleTemplate";
// import ATSMaxTemplate from "./components/resume_templates/ATSMaxTemplate";
import ExecutiveTemplate from "./components/resume_templates/ExecutiveTemplate";

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [showMap, setShowMap] = useState(false);

  // ======================================
  // FILE MAP (hidden secure access)
  // ======================================
  const fileMap = {
    "9d8f7g6h5j4k": "default",
    "2jsak23123": "laravel-vue",
    "5t4r3e2w1q0p": "mern",
    "0z9y8x7w6v5u": "tall",
  };

  const APP_SECRET =
    import.meta.env.VITE_RESUME_SECRET || "shahroz-portfolio-secret";

  // ======================================
  // LOAD CORRECT TEMPLATE FILE
  // ======================================
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const resumeCode = urlParams.get("resume");
    const revealSecret = urlParams.get("reveal");

    // SHOW HIDDEN FILE MAP
    if (revealSecret) {
      if (revealSecret === APP_SECRET) {
        setShowMap(true);
        return;
      } else {
        setNotFound(true);
        return;
      }
    }

    // INVALID OR UNKNOWN CODE
    if (!resumeCode || !fileMap[resumeCode]) {
      setNotFound(true);
      return;
    }

    // LOAD DATA FILE
    import(`./data/${fileMap[resumeCode]}.js`)
      .then((mod) => setPortfolioData(mod.portfolioData))
      .catch(() => setNotFound(true));
  }, []);

  // ======================================
  // SCROLL TO TOP BUTTON BEHAVIOR
  // ======================================
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });


  // ======================================
  // SHOW SECRET MAPPING PAGE
  // ======================================
  if (showMap) {
    const origin =
      window.location.origin ||
      `${window.location.protocol}//${window.location.host}`;

    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Available Resume Mappings</h2>
        <p className="mb-4 text-sm text-gray-600">
          Share these links privately.
        </p>

        <ul className="space-y-3">
          {Object.entries(fileMap).map(([code, file]) => (
            <li
              key={code}
              className="flex items-center justify-between bg-white p-3 rounded shadow-sm"
            >
              <div>
                <div className="text-sm font-medium">{file}</div>
                <div className="text-xs text-gray-500">code: {code}</div>
              </div>

              <div className="text-right">
                <a
                  href={`${origin}/?resume=${code}`}
                  className="mr-3 text-sm underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open
                </a>

                <input
                  readOnly
                  value={`${origin}/?resume=${code}`}
                  className="text-xs p-1 border rounded w-[320px]"
                  onFocus={(e) => e.target.select()}
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-6">
          <a href="/" className="px-4 py-2 bg-gray-800 text-white rounded">
            Go Home
          </a>
        </div>
      </div>
    );
  }

  // ======================================
  // 404
  // ======================================
  if (notFound)
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-lg text-gray-500 mb-6">
          The requested portfolio does not exist.
        </p>

        <a href="/" className="px-6 py-3 bg-gray-900 text-white rounded-lg">
          Go Back
        </a>
      </div>
    );

  // ======================================
  // STILL LOADING TEMPLATE DATA
  // ======================================
  if (!portfolioData) return <p className="text-center mt-10">Loading...</p>;

  // ======================================
  // MAIN PAGE RENDER
  // ======================================
  return (
    <div className="min-h-screen bg-white relative">
      

      {/* HIDDEN PRINT-ONLY TEMPLATE */}
      <div id="print-area" style={{ display: "none" }}>
        <ExecutiveTemplate data={portfolioData} />
      </div>

      {/* USER VISIBLE SECTIONS */}
      <Header data={portfolioData.personalInfo} />
      <Hero data={portfolioData.personalInfo}/>
      <About data={portfolioData.personalInfo} />
      <Skills data={portfolioData.skills} />
      <Experience data={portfolioData.experience} />
      <Projects data={portfolioData.projects} />
      <Education data={portfolioData.education} />
      <Footer data={portfolioData.personalInfo} />

      {/* SCROLL TO TOP */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-gray-900 text-white p-3 rounded-full shadow-lg"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;
