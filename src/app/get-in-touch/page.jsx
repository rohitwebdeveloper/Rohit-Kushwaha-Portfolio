'use client'
import { useState } from "react";
// import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className=" flex  justify-center bg-primarybg p-4">
      <div className="bg-white px-10 py-5 rounded-2xl shadow-2xl w-full max-w-md border-2 border-secondary">
        <h2 className="text-2xl font-semibold text-primary underline text-center mb-6">Get In Touch</h2>
        {submitted ? (
          <p className="text-center text-secondary text-lg font-semibold">Thank you for reaching out! I'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg text-primary font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border-2 border-secondarybg rounded-lg  focus:outline-none focus:ring-2 focus:ring-secondary transition"
                required
              />
            </div>
            <div>
              <label className="block text-lg text-primary font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border-2 border-secondarybg rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                required
              />
            </div>
            <div>
              <label className="block text-lg text-primary font-semibold">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border-2 border-secondarybg rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary transition"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-fit bg-secondary text-white py-2 px-8 mx-auto rounded-full font-semibold flex items-center justify-center gap-2 text-lg hover:bg-black transition-transform transform hover:scale-105 shadow-lg"
            >
              {/* <FaPaperPlane /> */}
              <img src="/send.svg" alt="" className="h-7 invert" />
               Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
