"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Failed to send message");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          name="subject"
          placeholder="Subject"
          required
          value={form.subject}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#D4AB45] text-white p-3 rounded hover:bg-green-700"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
