import MockupPortfolio from "../assets/PortfolioShowcase/mockup-portfolio.png";
import BookmarkIcon from "../assets/bookmark.svg";
import Demo from "../assets/demo.svg";
import DemoHover from "../assets/demo-hover.svg";
import PortfolioWixProject from "../assets/PortfolioShowcase/Portfolio_WixProject.png";
import PortfolioAdmission from "../assets/PortfolioShowcase/Portfolio_Admission.png";

const ShowcasePortfolio = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center w-full p-10 border-5">
      {/* Example GitHub portfolio items */}

      <div className="relative bg-brandblue border rounded-2xl p-6 shadow-xl animate-fade-in  max-w-lg min-h-[550px] max-h-[550px]  w-full hover:scale-105 transition-transform duration-300">
        <img
          src={BookmarkIcon}
          alt="icon"
          className="absolute top-0 right-8 w-25 z-10"
        />
        <div className="aspect-w-16 aspect-h-9 w-full mb-4">
          <img
            src={PortfolioWixProject}
            alt="Portfolio Project Mock up"
            className="w-full h-full object-cover border-none rounded-xl border-2 "
            style={{ aspectRatio: "16/9" }}
          />
        </div>
        <h3 className="font-bold text-lg mb-2 text-brandyellow">
          WIX PORTFOLIO PROJECT
        </h3>
        <p className=" mb-2 text-brandwhite">
          A professional online portfolio built with Wix, showcasing creative
          works, projects, and achievements through a clean, modern, and
          user-friendly design. The site highlights skills and experience while
          providing easy navigation and responsive layouts for both desktop and
          mobile.
        </p>
        <a
          href="https://yughiep.wixsite.com/yughie-site"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 absolute bottom-2 right-5 text-white underline px-3 py-2 rounded-lg hover:bg-opacity-20 transition hover:text-brandyellow"
        >
          Live Demo
          <img
            src={Demo}
            alt="Demo"
            className="w-8 h-8 block group-hover:hidden"
          />
          <img
            src={DemoHover}
            alt="Demo hover"
            className="w-8 h-8 hidden group-hover:block"
          />
        </a>
      </div>
      <div className="relative bg-brandblue border rounded-2xl p-6 shadow-xl animate-fade-in  max-w-lg min-h-[550px] max-h-[550px]  w-full hover:scale-105 transition-transform duration-300">
        <img
          src={BookmarkIcon}
          alt="icon"
          className="absolute top-0 right-8 w-25 z-10"
        />
        <div className="aspect-w-16 aspect-h-9 w-full mb-4">
          <img
            src={MockupPortfolio}
            alt="Portfolio Project Mock up"
            className="w-full h-full object-cover border-none rounded-xl border-2 "
            style={{ aspectRatio: "16/9" }}
          />
        </div>
        <h3 className="font-bold text-lg mb-2 text-brandyellow">
          PERSONAL PORTFOLIO
        </h3>
        <p className=" mb-2 text-brandwhite">
          This website serves as a professional showcase of my academic
          background, technical skills, and creative projects. It highlights my
          work in web development, multimedia editing, and design, reflecting
          both my expertise as a Computer Science student and my experience in
          delivering high-quality digital solutions.
        </p>
        <a
          href="https://personal-portfolio-eta-rouge.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 absolute bottom-2 right-5 text-white underline px-3 py-2 rounded-lg hover:bg-opacity-20 transition hover:text-brandyellow"
        >
          Live Demo
          <img
            src={Demo}
            alt="Demo"
            className="w-8 h-8 block group-hover:hidden"
          />
          <img
            src={DemoHover}
            alt="Demo hover"
            className="w-8 h-8 hidden group-hover:block"
          />
        </a>
      </div>
      <div className="relative bg-brandblue border rounded-2xl p-6 shadow-xl animate-fade-in  max-w-lg min-h-[550px] max-h-[550px]  w-full hover:scale-105 transition-transform duration-300">
        <img
          src={BookmarkIcon}
          alt="icon"
          className="absolute top-0 right-8 w-25 z-10"
        />
        <div className="aspect-w-16 aspect-h-9 w-full mb-4">
          <img
            src={PortfolioAdmission}
            alt="Portfolio School Admission Image"
            className="w-full h-full object-cover border-none rounded-xl border-2 "
            style={{ aspectRatio: "16/9" }}
          />
        </div>
        <h3 className="font-bold text-lg mb-2 text-brandyellow">
          ADMISION REGISTRATION
        </h3>
        <p className=" mb-2 text-brandwhite">
          This website is built with HTML, CSS, and JavaScript to showcase my
          skills in front-end web development. It demonstrates my ability to
          create responsive, structured, and user-friendly websites, while
          highlighting projects and experiences that reflect my growth as a
          Computer Science student.
        </p>
        <a
          href="https://github.com/yourusername/project1"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 absolute bottom-2 right-5 text-white underline px-3 py-2 rounded-lg hover:bg-opacity-20 transition hover:text-brandyellow"
        >
          Live Demo
          <img
            src={Demo}
            alt="Demo"
            className="w-8 h-8 block group-hover:hidden"
          />
          <img
            src={DemoHover}
            alt="Demo hover"
            className="w-8 h-8 hidden group-hover:block"
          />
        </a>
      </div>
      <div className="relative bg-brandblue border rounded-2xl p-6 shadow-xl animate-fade-in  max-w-lg min-h-[550px] max-h-[550px]  w-full hover:scale-105 transition-transform duration-300">
        <img
          src={BookmarkIcon}
          alt="icon"
          className="absolute top-0 right-8 w-25 z-10"
        />
        <div className="aspect-w-16 aspect-h-9 w-full mb-4">
          <img
            src={MockupPortfolio}
            alt="Portfolio Project Mock up"
            className="w-full h-full object-cover border-none rounded-xl border-2 "
            style={{ aspectRatio: "16/9" }}
          />
        </div>
        <h3 className="font-bold text-lg mb-2 text-brandyellow">
          PERSONAL PORTFOLIO
        </h3>
        <p className=" mb-2 text-brandwhite">
          Life Flow is a Donation and Recipient Management System designed to
          streamline the process of connecting donors with recipients. Built
          with a focus... Life Flow is a Donation and Recipient Management
          System designed to streamline the process of
        </p>
        <a
          href="https://github.com/yourusername/project1"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 absolute bottom-2 right-5 text-white underline px-3 py-2 rounded-lg hover:bg-opacity-20 transition hover:text-brandyellow"
        >
          Live Demo
          <img
            src={Demo}
            alt="Demo"
            className="w-8 h-8 block group-hover:hidden"
          />
          <img
            src={DemoHover}
            alt="Demo hover"
            className="w-8 h-8 hidden group-hover:block"
          />
        </a>
      </div>

      {/* Add more Certificates as needed */}
    </div>
  );
};

export default ShowcasePortfolio;
