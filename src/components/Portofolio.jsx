import { useState } from "react";
import { portfolioData } from "../data/portofolioData.jsx";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [previewImg, setPreviewImg] = useState(null);
  return (
    <>
      <section
        id="portfolio"
        className="min-h-screen pb-20 bg-white dark:bg-gray-800 pt-20"
        data-aos-duration="1000"
        data-aos="fade-down"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title & Subtitle */}
          <div
            className="text-center mb-12 text-gray-800"
            data-aos-delay="600"
            data-aos="fade-down"
          >
            <h2 className="text-5xl font-bold dark:text-white mb-2">
              {portfolioData.sectionTitle.title}
            </h2>
            <p className="text-lg dark:text-gray-400">
              {portfolioData.sectionTitle.subtitle}
            </p>
          </div>

          {/* Tabs Menu */}
          <div
            className="flex justify-center mb-8 gap-4 flex-wrap"
            data-aos-delay="600"
            data-aos="fade-down"
          >
            {[
              { value: "projects", label: "Projects", icon: "bx bx-briefcase" },
              {
                value: "certificates",
                label: "Certificates",
                icon: "bx bx-award",
              },
              { value: "tech", label: "Tech Stack", icon: "bx bx-code-alt" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all ${
                  activeTab === tab.value
                    ? "bg-gray-800 text-white dark:bg-white dark:text-gray-800"
                    : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white"
                }`}
              >
                <i className={tab.icon}></i>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tabs Content */}
          <div>
            {/* Projects Tab */}
            {activeTab === "projects" && (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                data-aos-delay="600"
                data-aos="fade-down"
              >
                {portfolioData.tabs.projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 border border-white rounded-lg p-6 shadow-lg hover:-translate-y-1 transition-transform"
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                      onClick={() => setPreviewImg(project.img)}
                    />
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-gray-800 dark:text-white mb-4">
                      {project.desc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-white"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Tippy content="View Demo" placement="top">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex justify-center w-full items-center gap-2 px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium transition-all hover:-translate-y-1"
                      >
                        <span className="flex items-center gap-1">
                          <span>Demo</span>
                          <i className="bx bx-link-external"></i>
                        </span>
                      </a>
                    </Tippy>
                  </div>
                ))}
              </div>
            )}

            {/* Certificates Tab */}
            {activeTab === "certificates" && (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                data-aos-delay="600"
                data-aos="fade-down"
              >
                {portfolioData.tabs.certificates.map((certificate) => (
                  <div
                    key={certificate.id}
                    className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg hover:-translate-y-1 transition-transform overflow-hidden"
                  >
                    <img
                      src={certificate.img}
                      alt={certificate.title}
                      className="w-full h-72 object-cover rounded-lg"
                      onClick={() => setPreviewImg(certificate.img)}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Tab */}
            {activeTab === "tech" && (
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                data-aos-delay="600"
                data-aos="fade-down"
              >
                {portfolioData.tabs.techStacks.map((tech) => (
                  <div
                    key={tech.id}
                    className="bg-white dark:bg-gray-800 border border-white rounded-lg p-6 shadow-lg hover:-translate-y-1 transition-transform flex flex-col items-center justify-center gap-4"
                  >
                    <i
                      className={`${tech.icon}  text-6xl`}
                      style={{ color: tech.color }}
                    ></i>
                    <span className="text-lg font-medium text-gray-800 dark:text-white">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      {previewImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setPreviewImg(null)}
        >
          <div
            className="relative bg-white rounded-lg p-4 max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full w-10 h-10 flex items-baseline justify-center text-3xl cursor-pointer"
              onClick={() => setPreviewImg(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={previewImg}
              alt="Preview"
              className="w-full h-auto max-h-[90vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
