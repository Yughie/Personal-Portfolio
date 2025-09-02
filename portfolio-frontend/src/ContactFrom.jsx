import { useState } from "react";
import axios from "axios";

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="body"
          placeholder="Message"
          value={form.body}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
