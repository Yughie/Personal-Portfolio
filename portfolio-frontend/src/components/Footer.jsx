import FooterImg from "../assets/footer-image.png";
import LogoIcon from "../assets/LogoIcon.svg";
import FacebookIcon from "../assets/facebook-white.svg";
import GithubIcon from "../assets/github-white.svg";
import LinkedinIcon from "../assets/linkedin-white.svg";

const Footer = () => {
  return (
    <footer className=" text-center text-brandwhite">
      <img src={FooterImg} alt="Rate Image" className="mx-auto" />
      <div className="bg-brandblue pt-10 px-8 grid grid-cols-1 md:grid-cols-5 gap-10 text-left">
        <div className="text-left flex flex-col gap-5 md:col-span-2">
          <img src={LogoIcon} alt="YGEN Logo" className="w-40" />
          <h2>YGEN | Yūgen (幽玄) Digital</h2>
          <div className="flex justify-start mt-6 w-full space-x-6">
            <a
              href="https://www.facebook.com/ymperez12"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={FacebookIcon}
                alt="Facebook"
                className="w-[68px] hover:opacity-70 transition-opacity"
              />
            </a>
            <a
              href="https://github.com/Yughie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GithubIcon}
                alt="GitHub"
                className="w-14  hover:opacity-70 transition-opacity"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/yughie-perez-368015241/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={LinkedinIcon}
                alt="LinkedIn"
                className="w-14  hover:opacity-70 transition-opacity"
              />
            </a>
          </div>
          <h2 className="text-[#DFDFDF] mt-10">
            2025 Yughie Perez. All right reserved -YGEN
          </h2>
        </div>
        <div className="flex flex-col text-left gap-4 md:pt-0">
          <h2 className="font-bold">Resources</h2>
          <h3>Reactbits.dev</h3>
          <h3>Cssbuttons.io</h3>
          <h3>Neumorphism.io</h3>
        </div>
        <div className="flex flex-col text-left gap-4 md:pt-0">
          <h2 className="font-bold">Information</h2>
          <h3>Blog</h3>
          <h3>Give feedback</h3>
          <h3>Report a bug</h3>
        </div>
        <div className="flex flex-col text-left gap-4 md:pt-0">
          <h2 className="font-bold">Legal</h2>
          <h3>Terms and Conditions</h3>
          <h3>Privacy Policy</h3>
          <h3>Cookie Policy</h3>
          <h3>Disclaimer</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
