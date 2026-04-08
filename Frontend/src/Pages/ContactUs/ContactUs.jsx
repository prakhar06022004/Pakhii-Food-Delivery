import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent 🚀");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
        
        {/* LEFT SIDE */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch 🍔</h2>
          <p className="mb-6 text-orange-100">
            We’d love to hear from you! Whether it's feedback, queries, or cravings 😋
          </p>

          <div className="space-y-3 text-sm">
            <p>📧playingprakhar122@gmail.com</p>
            <p>📞 +91 8295978959</p>
            <p>📍 Uttarakhand, India</p>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition"
            >
              Send Message 🚀
            </button>

          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;