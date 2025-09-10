import LogoLoop from "./animation/LogoLoop";

const imageLogos = [
  {
    src: "/public/TechStack/Html.svg",
    alt: "HTML5",
    href: "https://www.w3schools.com/Html/",
  },
  {
    src: "/public/TechStack/css.svg",
    alt: "CSS",
    href: "https://www.w3schools.com/css/",
  },
  {
    src: "/public/TechStack/JavaScript.svg",
    alt: "JavaScript",
    href: "https://www.w3schools.com/js/",
  },
  {
    src: "/public/TechStack/TailwindCss.svg",
    alt: "Tailwind CSS",
    href: "https://www.geeksforgeeks.org/css/tailwind-css/",
  },
  {
    src: "/public/TechStack/ReactJs.svg",
    alt: "React JS",
    href: "https://www.geeksforgeeks.org/reactjs/react/",
  },
  {
    src: "/public/TechStack/NodeJs.svg",
    alt: "React JS",
    href: "https://www.geeksforgeeks.org/node-js/nodejs/",
  },
  {
    src: "/public/TechStack/Firebase.svg",
    alt: "React JS",
    href: "https://www.geeksforgeeks.org/firebase/firebase-tutorial/",
  },
  {
    src: "/public/TechStack/Php.svg",
    alt: "React JS",
    href: "https://www.w3schools.com/php/",
  },
  {
    src: "/public/TechStack/Laravel.svg",
    alt: "React JS",
    href: "https://www.geeksforgeeks.org/php/introduction-to-laravel-and-mvc-framework/",
  },
  {
    src: "/public/TechStack/Sql.svg",
    alt: "React JS",
    href: "https://www.w3schools.com/sql/",
  },
  {
    src: "/public/TechStack/MySql.svg",
    alt: "React JS",
    href: "https://www.w3schools.com/MySQL/",
  },
];

const TechStack = () => {
  return (
    <div className="tech-stack-section py-20 mt-10  bg-gray-50">
      <h2 className="text-3xl font-bold pb-10 text-center text-brandblack">
        TECH STACK
      </h2>
      <div
        style={{ height: "100px", position: "relative", overflow: "hidden" }}
      >
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
      <div
        style={{ height: "100px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={imageLogos}
          speed={60}
          direction="rigth"
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
