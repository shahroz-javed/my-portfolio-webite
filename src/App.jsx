import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const resumeType = urlParams.get("resume") || "default";

    import(`./data/${resumeType}.js`)
      .then((module) => setPortfolioData(module.portfolioData))
      .catch(() => {
        import(`./data/default.js`).then((module) =>
          setPortfolioData(module.portfolioData)
        );
      });
  }, []);

  if (!portfolioData) return <p className="text-center mt-10">Loading...</p>;

  const handleSave = () => {
    const filename = prompt("Enter file name (leave blank for 'default'):");
    const file = filename ? filename : "default";
    const blob = new Blob(
      [
        `export const portfolioData = ${JSON.stringify(
          portfolioData,
          null,
          2
        )};`,
      ],
      { type: "text/javascript" }
    );

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${file}.js`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header data={portfolioData.personalInfo} setData={setPortfolioData} />
      <Hero data={portfolioData.personalInfo} setData={setPortfolioData} />
      <About data={portfolioData.personalInfo} setData={setPortfolioData} />
      <Skills data={portfolioData.skills} setData={setPortfolioData} />
      <Experience data={portfolioData.experience} setData={setPortfolioData} />
      <Projects data={portfolioData.projects} setData={setPortfolioData} />
      <Education data={portfolioData.education} setData={setPortfolioData} />
      <Footer data={portfolioData.personalInfo} setData={setPortfolioData} />
    </div>
  );
}

export default App;
