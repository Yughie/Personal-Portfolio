import BookmarkIcon from "../assets/bookmark.svg";
import Demo from "../assets/demo.svg";
import DemoHover from "../assets/demo-hover.svg";
import CertificateCFoundation from "../assets/Certificates/Certificate_CFoundation.png";
import CertificateCFoundationPDF from "../assets/Certificates/Certificate_CFoundation.pdf";
import CertificateNetworkDesign from "../assets/Certificates/Certificate_NetworkDesign.png";
import CertificateNetworkDesignPdf from "../assets/Certificates/Certificate_NetworkDesign.pdf";
import CertificateResponsiveWebDesign from "../assets/Certificates/Certificate_ResponsiveWebDesign.png";
import CertificateAWSCloudPractitionerEssential from "../assets/Certificates/Certificate_AWSCloudPractitionerEssentials.png";

const ShowcaseCertificate = () => {
  return (
    <div className="flex flex-wrap gap-5 justify-center w-full p-10 border-5 border-black">
      {/* Example LinkedIn portfolio items */}
      <div className="relative bg-brandblue border rounded-2xl p-6 shadow-xl animate-fade-in  max-w-lg min-h-[550px] max-h-[550px]  w-full hover:scale-105 transition-transform duration-300">
        <img
          src={BookmarkIcon}
          alt="icon"
          className="absolute top-0 right-8 w-25 z-10"
        />
        <div className="aspect-w-16 aspect-h-9 w-full mb-4">
          <img
            src={CertificateAWSCloudPractitionerEssential}
            alt="AWS Cloud Practitioner Essential Certificate"
            className="w-full h-full object-cover border-none rounded-xl border-2 "
            style={{ aspectRatio: "16/9" }}
          />
        </div>
        <h3 className="font-bold text-lg mb-2 text-brandyellow">
          AWS CLOUD PRACTITIONER ESSENTIALS CERTIFICATE
        </h3>
        <p className=" mb-2 text-brandwhite">
          Demonstrates foundational knowledge of AWS cloud concepts, core
          services, security, and pricing, validating a strong understanding of
          cloud computing fundamentals.
        </p>
        <a
          href={
            "https://drive.google.com/file/d/1MyBQw35U8bMjUg2pUe-FtS5EM9881BqZ/view?usp=sharing"
          }
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 absolute bottom-2 right-5 text-white underline px-3 py-2 rounded-lg hover:bg-opacity-20 transition hover:text-brandyellow"
        >
          View Certificate
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
            src={CertificateResponsiveWebDesign}
            alt="Web Design Certificate"
            className="w-full h-full object-cover border-none rounded-xl border-2 "
            style={{ aspectRatio: "16/9" }}
          />
        </div>
        <h3 className="font-bold text-lg mb-2 text-brandyellow">
          RESPONSIVE WEB DESIGN CERTIFICATE
        </h3>
        <p className=" mb-2 text-brandwhite">
          Completed the Responsive Web Design Certification by freeCodeCamp (300
          hours), covering HTML, CSS, Flexbox, CSS Grid, and responsive design
          principles to build accessible, user-friendly, and mobile-first
          websites.
        </p>
        <a
          href="https://www.freecodecamp.org/certification/fcc4201476c-b6b8-45e8-883b-0e4c18cfecf2/responsive-web-design"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 absolute bottom-2 right-5 text-white underline px-3 py-2 rounded-lg hover:bg-opacity-20 transition hover:text-brandyellow"
        >
          View Certificate
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
            src={CertificateCFoundation}
            alt="C Foundation Certificate"
            className="w-full h-full object-cover border-none rounded-xl border-2 "
            style={{ aspectRatio: "16/9" }}
          />
        </div>
        <h3 className="font-bold text-lg mb-2 text-brandyellow">
          C++ FOUNDATION CERTIFICATE
        </h3>
        <p className=" mb-2 text-brandwhite">
          Earned a C++ Foundation Certificate demonstrating knowledge of
          programming fundamentals, including syntax, control structures,
          functions, and basic object-oriented concepts.
        </p>
        <a
          href={CertificateCFoundationPDF}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 absolute bottom-2 right-5 text-white underline px-3 py-2 rounded-lg hover:bg-opacity-20 transition hover:text-brandyellow"
        >
          View Certificate
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
            src={CertificateNetworkDesign}
            alt="Network Design Certificate"
            className="w-full h-full object-cover border-none rounded-xl border-2 "
            style={{ aspectRatio: "16/9" }}
          />
        </div>
        <h3 className="font-bold text-lg mb-2 text-brandyellow">
          NETWORK DESIGN CERTIFICATE
        </h3>
        <p className=" mb-2 text-brandwhite">
          Certificate in Network Design awarded by the Department of Information
          and Communications Technology (DICT), recognizing skills in planning,
          structuring, and documenting computer networks using professional
          tools and best practices.
        </p>
        <a
          href={CertificateNetworkDesignPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-2 absolute bottom-2 right-5 text-white underline px-3 py-2 rounded-lg hover:bg-opacity-20 transition hover:text-brandyellow"
        >
          View Certificate
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

      {/* Add more LinkedIn experiences as needed */}
    </div>
  );
};

export default ShowcaseCertificate;
