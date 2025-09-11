import { FaGithub, FaLinkedin } from "react-icons/fa";
import React from "react";

const Showcase = () => {
  const [selected, setSelected] = React.useState("github");

  return (
    <section className="showcase py-20">
      <h2 className="text-3xl font-bold text-brandblack ">SHOWCASE</h2>
      <p className="text-gray-500 text-lg ">Code. Create. Solve.</p>

      <div className="flex items-center justify-center my-8 border-2 border-gray-300 rounded-md w-fit mx-auto">
        <button
          className={`flex items-center justify-center gap-2 min-w-32 md:min-w-44 min-h-14 px-4 py-2 rounded-md transition text-brandblack font-bold ${
            selected === "github"
              ? "bg-brandyellow"
              : "bg-brandwhite hover:bg-brandyellow"
          }`}
          onClick={() => setSelected("github")}
        >
          <FaGithub className="text-xl text-brandblue mx-auto" />
          <span className="hidden md:inline w-full text-center">GitHub</span>
        </button>
        <button
          className={`flex items-center justify-center gap-2 min-w-32 md:min-w-44 min-h-14 px-4 py-2 rounded-md transition text-brandblack font-bold ${
            selected === "linkedin"
              ? "bg-brandyellow"
              : "bg-brandwhite hover:bg-brandyellow"
          }`}
          onClick={() => setSelected("linkedin")}
        >
          <FaLinkedin className="text-xl text-brandblack mx-auto" />
          <span className="hidden md:inline w-full text-center">LinkedIn</span>
        </button>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        {selected === "github" && (
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            {/* Example GitHub portfolio items */}
            <div className="bg-brandwhite border rounded-md p-6 shadow animate-fade-in">
              <img
                src="/images/github-project1.jpg"
                alt="GitHub Project 1"
                className="w-full rounded-md p-5 object-cover border-2 min-h-16"
              />
              <h3 className="font-bold text-lg mb-2">GitHub Project 1</h3>
              <p className="text-gray-600 mb-2">Description of project 1.</p>
              <a
                href="https://github.com/yourusername/project1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brandblue underline"
              >
                View on GitHub
              </a>
            </div>
            <div className="bg-brandwhite border rounded-md p-6 shadow animate-fade-in">
              <img
                src="/images/github-project2.jpg"
                alt="GitHub Project 2"
                className="w-full rounded-md mb-4 p-5 object-cover"
              />
              <h3 className="font-bold text-lg mb-2">GitHub Project 2</h3>
              <p className="text-gray-600 mb-2">Description of project 2.</p>
              <a
                href="https://github.com/yourusername/project2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brandblue underline"
              >
                View on GitHub
              </a>
            </div>
            {/* Add more GitHub projects as needed */}
          </div>
        )}
        {selected === "linkedin" && (
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            {/* Example LinkedIn portfolio items */}
            <div className="bg-brandwhite border rounded-md p-6 shadow animate-fade-in">
              <img
                src="/images/linkedin-experience1.jpg"
                alt="LinkedIn Experience 1"
                className="w-full rounded-md mb-4 p-5 object-cover"
              />
              <h3 className="font-bold text-lg mb-2">LinkedIn Experience 1</h3>
              <p className="text-gray-600 mb-2">Description of experience 1.</p>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brandblue underline"
              >
                View on LinkedIn
              </a>
            </div>
            <div className="bg-brandwhite border rounded-md p-6 shadow animate-fade-in">
              <img
                src="/images/linkedin-experience2.jpg"
                alt="LinkedIn Experience 2"
                className="w-full rounded-md mb-4 p-5 object-cover"
              />
              <h3 className="font-bold text-lg mb-2">LinkedIn Experience 2</h3>
              <p className="text-gray-600 mb-2">Description of experience 2.</p>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brandblue underline"
              >
                View on LinkedIn
              </a>
            </div>
            {/* Add more LinkedIn experiences as needed */}
          </div>
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
            `}
      </style>
    </section>
  );
};

export default Showcase;
