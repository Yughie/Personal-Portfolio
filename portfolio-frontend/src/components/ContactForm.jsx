import { useState } from "react";
import axios from "axios";
import FacebookIcon from "../assets/facebook.svg";
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import ProfileImage from "../assets/contact-image.png";
import mail from "../assets/mail.svg";
import phone from "../assets/phone.svg";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resoponse = await axios.post(
        "http://127.0.0.1:8000/api/send-email",
        form
      );
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", body: "" });
    } catch (error) {
      console.error(error);
      setStatus("Error Sending Message. Check console");
    }
  };
  return (
    <section className="contact-form flex flex-col lg:flex-row bg-brandyellow pt-20 md:py-20 ">
      <div className="flex-1 flex-col gap-5 text-brandblack text-center  ">
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
        <p className="font-semibold">(63+) 123 456 789</p>
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
      <div className="flex-1 contact mt-20 md:my-20 md:px-20 lg:my-0 transition-all lg:flex lg:justify-center lg:items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-brandwhite align-center p-10 rounded-md w-full gap-4 flex flex-col"
        >
          <h2 className="text-brandblack font-bold text-3xl my-6">
            Send a Message
          </h2>
          <div className="flex flex-col">
            <label
              htmlFor="Name"
              className="text-brandgrey font-bold text-left w-full"
            >
              Name*
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className={
                "p-2 rounded-md border border-brandblack bg-[#DFDFDF] text-brandblack"
              }
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-brandgrey font-bold text-left w-full"
            >
              Email*
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className={
                "p-2 rounded-md border border-brandblack bg-[#DFDFDF] text-brandblack"
              }
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="subject"
              className="text-brandgrey font-bold text-left w-full"
            >
              Subject*
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className={
                "p-2 rounded-md border border-brandblack bg-[#DFDFDF] text-brandblack"
              }
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="body"
              className="text-brandgrey font-bold text-left w-full"
            >
              Message*
            </label>
            <textarea
              name="body"
              placeholder="Message"
              value={form.body}
              onChange={handleChange}
              required
              className={
                "p-2 rounded-md border border-brandblack bg-[#DFDFDF] text-brandblack h-40"
              }
            />
          </div>

          <button
            type="submit"
            className="bg-brandblue w-[300px] mx-auto mt-5 text-brandwhite p-2 mb-10 rounded-md font-bold hover:bg-blue-700 transition-colors"
          >
            Send
          </button>
          {status && <p>{status}</p>}
        </form>
      </div>
    </section>
  );
}
