import React from "react";
import SplitText from "./SplitText";
import FacebookIcon from "../assets/facebook.svg";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import CV from "../assets/CV.pdf";
import ProfileImage from "../assets/mainprofile.png";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

// Download CV function
const downloadCV = () => {
  const link = document.createElement("a");
  link.href = CV;
  link.download = "Yughie_Perez_CV.pdf"; // optional: rename
  link.click();
};

// Hero Intro
const HeroIntro = () => (
  <div
    id="home"
    className="hero-division pt-40 md:pt-49 lg:pt-0 flex-1 flex flex-col justify-center items-center text-center space-y-6 md:space-y-8 max-w-2xl md:max-w-3xl"
  >
    <SplitText
      text="Hi, I am!"
      className="text-4xl md:text-5xl font-semibold text-brandblack"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      onLetterAnimationComplete={handleAnimationComplete}
    />
    <h1 className="text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-brandblue whitespace-nowrap">
      Yughie Perez
    </h1>
    <button
      onClick={downloadCV}
      className="bg-transparent border-2 border-brandblue hover:bg-hoverblue text-brandblack px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold mt-4 cursor-pointer transition-colors duration-200"
    >
      Download CV
    </button>
    <div className="flex justify-center mt-6 w-full space-x-6">
      <a
        href="https://www.facebook.com/ymperez12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={FacebookIcon}
          alt="Facebook"
          className="w-10 h-10 hover:opacity-70 transition-opacity"
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
          className="w-8 h-8 hover:opacity-70 transition-opacity"
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
          className="w-8 h-8 hover:opacity-70 transition-opacity"
        />
      </a>
    </div>
  </div>
);

// Hero Image
const HeroImage = () => (
  <div className="hero-division hero-image flex justify-center items-start w-full md:w-full md:h-full">
    <img
      src={ProfileImage}
      alt="Profile"
      className="w-full max-w-[650px]  lg:min-h-[500px] lg:min-w-[500px] object-contain"
    />
  </div>
);

// Hero About
const HeroAbout = () => (
  <div className="hero-division flex flex-col items-center text-center md:text-center">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-brandblue">
      SOFTWARE ENGINEER
    </h2>
    <p className="text-base md:text-md lg:text-lg py-8 text-brandblack max-w-xs md:max-w-lg lg:max-w-4xl">
      a{" "}
      <span className="font-bold text-brandblue">
        Computer Science graduate (Cum Laude)
      </span>{" "}
      and <span className="font-bold text-brandblue">Software Engineer </span>{" "}
      who transforms ideas into functional, reliable, and user-friendly
      applications. From developing server-side logic and APIs to creating
      seamless front-end experiences, I focus on building software that meets
      both technical and business goals. My creative background in video editing
      and multimedia design adds an extra layer to how I approach
      problem-solving and user experience.
    </p>
    <div className="md:flex">
      <a
        href="#contact"
        className="bg-brandyellow hover:bg-hoveryellow text-brandblack hover:text-brandblack px-16 py-3 rounded-lg font-bold transition"
      >
        Contact
      </a>
    </div>
  </div>
);

// Main Hero Section
const Hero = () => {
  return (
    <section className="min-h-screen w-full flex justify-center items-center">
      <div className="hero-section flex flex-col gap-10 md:px-10 md:pb-20 lg:pb-0 lg:mb-0 lg:px-20 xl:px-40 lg:flex-row items-center justify-center w-full h-full">
        <HeroIntro className="flex-1 " />
        <HeroImage className="flex-1 " />
        <HeroAbout className="flex-1 " />
      </div>
    </section>
  );
};

export { Hero, HeroIntro, HeroImage, HeroAbout };
