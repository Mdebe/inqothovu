"use client";

import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking data:", formData);
    setSubmitted(true);
    // TODO: Integrate with email service or backend API
  };

  return (
    <section className="bg-white py-20 px-6 max-w-3xl mx-auto rounded-3xl shadow-xl">
      <h3 className="text-3xl font-bold text-[#010a33] text-center mb-6">
        Book a Service
      </h3>

      {submitted ? (
        <p className="text-center text-accent font-semibold text-lg">
          Thank you! Your booking request has been received.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent outline-none"
            />
          </div>

          <select
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent outline-none"
          >
            <option value="">Select a Service</option>
            <option value="computer">Computer Skills Training</option>
            <option value="internet">Internet Access</option>
            <option value="transport">Transportation Service</option>
          </select>

          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent outline-none"
          />

          <textarea
            name="message"
            placeholder="Additional Details"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-accent text-white font-semibold py-4 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            Submit Booking
          </button>
        </form>
      )}
    </section>
  );
}
