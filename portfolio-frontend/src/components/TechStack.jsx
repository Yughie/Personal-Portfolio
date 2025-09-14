import LogoLoop from "./animation/LogoLoop";

// CORRECTED PATHS: Removed "/public" from the beginning of each src
const imageLogos = [
  {
    src: "/TechStack/Html.svg",
    alt: "HTML5",
    href: "https://www.w3schools.com/Html/",
  },
  {
    src: "/TechStack/Css.svg",
    alt: "CSS",
    href: "https://www.w3schools.com/css/",
  },
  {
    src: "/TechStack/JavaScript.svg",
    alt: "JavaScript",
    href: "https://www.w3schools.com/js/",
  },
  {
    src: "/TechStack/TailwindCss.svg",
    alt: "Tailwind CSS",
    href: "https://www.geeksforgeeks.org/css/tailwind-css/",
  },
  {
    src: "/TechStack/ReactJs.svg",
    alt: "React JS",
    href: "https://www.geeksforgeeks.org/reactjs/react/",
  },
  {
    src: "/TechStack/NodeJs.svg",
    alt: "Node.js", // Corrected alt text
    href: "https://www.geeksforgeeks.org/node-js/nodejs/",
  },
  {
    src: "/TechStack/Firebase.svg",
    alt: "Firebase", // Corrected alt text
    href: "https://www.geeksforgeeks.org/firebase/firebase-tutorial/",
  },
  {
    src: "/TechStack/Php.svg",
    alt: "PHP", // Corrected alt text
    href: "https://www.w3schools.com/php/",
  },
  {
    src: "/TechStack/Laravel.svg",
    alt: "Laravel", // Corrected alt text
    href: "https://www.geeksforgeeks.org/php/introduction-to-laravel-and-mvc-framework/",
  },
  {
    src: "/TechStack/Sql.svg",
    alt: "SQL", // Corrected alt text
    href: "https://www.w3schools.com/sql/",
  },
  {
    src: "/TechStack/MySql.svg",
    alt: "MySQL", // Corrected alt text
    href: "https://www.w3schools.com/MySQL/",
  },
];

const TechStack = () => {
  return (
    <div className="tech-stack-section py-20 mt-10 md:mt-0 bg-gray-50">
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
