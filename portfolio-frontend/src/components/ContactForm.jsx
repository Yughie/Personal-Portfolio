import { useState } from "react";
import axios from "axios";
import FacebookIcon from "../assets/facebook.svg";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import ProfileImage from "../assets/contact-image.png";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";
import ContactFormOnly from "./ContactFormOnly";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="contact-form flex flex-col lg:flex-row bg-brandyellow pt-20 md:py-20 "
    >
      <div className="flex-1 flex-col gap-5 pb-10 text-brandblack text-center  ">
        <h2 className="font-bold text-5xl">GET IN TOUCH</h2>
        <img
          src={ProfileImage}
          alt="Contact Image"
          className="w-64 mx-auto  my-5"
        />
        <h2 className="font-bold text-2xl">Contact Information</h2>
        <img src={mail} alt="Mail Icon" className="w-15 mx-auto  my-5" />
        <p className="font-semibold">yughiep@.gmail.com</p>
        <img src={phone} alt="Phone Icon" className="w-15 mx-auto my-5" />
        <p className="font-semibold">(63+) 938 129 3241</p>
        <div className="flex justify-center mt-6 w-full space-x-6">
          <a
            href="https://www.facebook.com/ymperez12"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FacebookIcon}
              alt="Facebook"
              className="w-[74px] hover:opacity-70 transition-opacity"
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
              className="w-16  hover:opacity-70 transition-opacity"
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
              className="w-16  hover:opacity-70 transition-opacity"
            />
          </a>
        </div>
      </div>
      <ContactFormOnly />
    </section>
  );
}
