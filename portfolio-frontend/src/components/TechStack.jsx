import LogoLoop from "./LogoLoop";
import htmlLogo from "../assets/TechStack/Html.svg";
import cssLogo from "../assets/TechStack/Css.svg";
import jsLogo from "../assets/TechStack/JavaScript.svg";
import tailwindLogo from "../assets/TechStack/TailwindCss.svg";
import reactLogo from "../assets/TechStack/ReactJs.svg";
import nodeLogo from "../assets/TechStack/NodeJs.svg";
import firebaseLogo from "../assets/TechStack/Firebase.svg";
import phpLogo from "../assets/TechStack/Php.svg";
import laravelLogo from "../assets/TechStack/Laravel.svg";
import sqlLogo from "../assets/TechStack/Sql.svg";
import mysqlLogo from "../assets/TechStack/MySql.svg";

// CORRECTED PATHS: Removed "/public" from the beginning of each src
const imageLogos = [
  {
    src: htmlLogo,
    alt: "HTML5",
    href: "https://www.w3schools.com/Html/",
  },
  {
    src: cssLogo,
    alt: "CSS",
    href: "https://www.w3schools.com/css/",
  },
  {
    src: jsLogo,
    alt: "JavaScript",
    href: "https://www.w3schools.com/js/",
  },
  {
    src: tailwindLogo,
    alt: "Tailwind CSS",
    href: "https://www.geeksforgeeks.org/css/tailwind-css/",
  },
  {
    src: reactLogo,
    alt: "React JS",
    href: "https://www.geeksforgeeks.org/reactjs/react/",
  },
  {
    src: nodeLogo,
    alt: "Node.js", // Corrected alt text
    href: "https://www.geeksforgeeks.org/node-js/nodejs/",
  },
  {
    src: firebaseLogo,
    alt: "Firebase", // Corrected alt text
    href: "https://www.geeksforgeeks.org/firebase/firebase-tutorial/",
  },
  {
    src: phpLogo,
    alt: "PHP", // Corrected alt text
    href: "https://www.w3schools.com/php/",
  },
  {
    src: laravelLogo,
    alt: "Laravel", // Corrected alt text
    href: "https://www.geeksforgeeks.org/php/introduction-to-laravel-and-mvc-framework/",
  },
  {
    src: sqlLogo,
    alt: "SQL", // Corrected alt text
    href: "https://www.w3schools.com/sql/",
  },
  {
    src: mysqlLogo,
    alt: "MySQL", // Corrected alt text
    href: "https://www.w3schools.com/MySQL/",
  },
];

const TechStack = () => {
  return (
    <div
      id="stack"
      className="tech-stack-section py-20 mt-10 md:mt-0 bg-gray-50"
    >
      <h2 className="text-3xl font-bold pb-10 text-center text-brandblack">
        TECH STACK
      </h2>
      <div className="h-100px relative overflow-hidden ">
        <LogoLoop
          logos={imageLogos}
          speed={60}
          direction="left"
          logoHeight={80}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology Stack"
        />
      </div>
      <div className="h-100px relative overflow-hidden">
        <LogoLoop
          logos={imageLogos}
          speed={60}
          direction="right" // Corrected typo "rigth" to "right"
          logoHeight={80}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
};

export default TechStack;
