import React from "react";
import ProjectIcon from "../assets/projects.svg";
import CertificatesIcon from "../assets/certificates.svg";

import ShowcaseCertificate from "./ShowcaseCertificate.jsx";
import ShowcasePortfolio from "./ShowcasePortfolio.jsx";

const Showcase = () => {
  const [selected, setSelected] = React.useState("projects");

  return (
    <section id="project" className="showcase py-20">
      <h2 className="text-3xl font-bold text-brandblack ">SHOWCASE</h2>
      <p className="text-gray-500 text-lg ">Code. Create. Solve.</p>

      <div className="flex items-center justify-center my-8 w-full">
        <div className="flex border-2 rounded-md overflow-hidden">
          <button
            className={`flex items-center justify-center gap-2 min-w-32 md:min-w-44 min-h-14 px-4 py-2 rounded-md transition text-brandblack font-bold ${
              selected === "projects"
                ? "bg-brandyellow focus:outline-none"
                : "bg-brandwhite hover:bg-brandyellow"
            }`}
            onClick={() => setSelected("projects")}
          >
            {/* ICON */}
            <div className="flex items-center justify-center w-full h-full">
              <img src={ProjectIcon} alt="Projects Icon" className="w-8 h-8" />
            </div>

            <span className="hidden md:inline w-full text-center">
              Projects
            </span>
          </button>
          <button
            className={`flex items-center justify-center gap-2 min-w-32 md:min-w-44 min-h-14 px-4 py-2 rounded-md transition text-brandblack font-bold ${
              selected === "certificates"
                ? "bg-brandyellow focus:outline-none hover:bg-rgb(255, 255, 3)"
                : "bg-brandwhite hover:bg-brandyellow"
            }`}
            onClick={() => setSelected("certificates")}
          >
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={CertificatesIcon}
                alt="Certificates Icon"
                className="w-8 h-10"
              />
            </div>
            <span className="hidden md:inline w-full text-center">
              Certificates
            </span>
          </button>
        </div>
      </div>
      <div className="mx-auto">
        {selected === "projects" && <ShowcasePortfolio></ShowcasePortfolio>}
        {selected === "certificates" && (
          <ShowcaseCertificate></ShowcaseCertificate>
        )}
      </div>
      <style>
        {`
                .animate-fade-in {
                    animation: fadeIn 0.7s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px);}
                    to { opacity: 1; transform: translateY(0);}
                }
                .aspect-w-16.aspect-h-9 {
                  position: relative;
                  width: 100%;
                  padding-top: 56.25%; /* 16:9 ratio */
                }
                .aspect-w-16.aspect-h-9 img {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
                /* Keep container fixed size on all screens */
                .showcase > div.mx-auto {
                  width: 100%;
                  max-width: 1200px;
                  margin: 0 auto;
                  padding: 0 1rem;
                }

            `}
      </style>
    </section>
  );
};

export default Showcase;
