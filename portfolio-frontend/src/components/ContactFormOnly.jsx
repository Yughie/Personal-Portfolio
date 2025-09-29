// components/ContactFormOnly.jsx

import { useState } from "react";
import axios from "axios";

export default function ContactFormOnly() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    body: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://127.0.0.1:8000/contact/", form, {
        headers: { "Content-Type": "application/json" },
      });

      // FRONT END DATA RESPONSE
      const data = res.data;

      if (data.success) {
        setResponseMessage(`✅ Success: ${data.info}`);
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", subject: "", body: "" });
      } else {
        setResponseMessage(`❌ Error: ${data.error}`);
        setStatus("Something went wrong.");
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status (400, 500, etc.)
        setResponseMessage("⚠️ Network error, server not responding.");
      } else {
        // No response (network error)
        setStatus("Error: Could not connect to the server.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 contact md:my-20 md:px-20 lg:my-0 transition-all lg:flex lg:justify-center lg:items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-brandwhite align-center p-4 lg:p-12 rounded-md w-full gap-4 flex flex-col"
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
          disabled={loading}
          className="bg-brandblue w-[200px] mx-auto mt-5 text-brandwhite p-2 mb-10 rounded-md font-bold hover:bg-blue-700 transition-colors"
        >
          {loading ? "Sending..." : "Send"}
        </button>
        {responseMessage && <p>{responseMessage}</p>}
        {status && <p>{status}</p>}
      </form>
    </div>
  );
}
