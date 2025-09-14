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
    name: "NameTemplate",
    email: "EmailTemplate@gmail.com",
    subject: "TemplateSubject",
    body: "Templatemessage",
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
    <section className="contact-form bg-brandyellow py-20 ">
      <div className="flex flex-col gap-5 text-brandblack text-center ">
        <h2 className="font-bold text-5xl">GET IN TOUCH</h2>
        <img src={ProfileImage} alt="Contact Image" className="w-64 mx-auto" />
        <h2 className="font-bold text-2xl">Contact Information</h2>
        <img src={mail} alt="Mail Icon" className="w-15 mx-auto" />
        <p>yughiep@.gmail.com</p>
        <img src={phone} alt="Phone Icon" className="w-15 mx-auto" />
        <p>(63+) 123 456 789</p>
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
      <div className="contact my-20 mx-10   shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="bg-brandwhite p-5 rounded-md gap-4 flex flex-col"
        >
          <h2 className="text-brandblack font-bold text-2xl">Send a Message</h2>
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
              className={"p-2 rounded-md border border-brandblack bg-brandgrey"}
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
              className={"p-2 rounded-md border border-brandblack bg-brandgrey"}
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
              className={"p-2 rounded-md border border-brandblack bg-brandgrey"}
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
              className={"p-2 rounded-md border border-brandblack bg-brandgrey"}
            />
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
      {status && <p>{status}</p>}
    </section>
  );
}
