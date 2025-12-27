"use client";

import CallingSection from "@/components/ui/hmeCard/CallingSection";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactPage() {
  const [show, setShow] = useState(false);
  const router = useRouter();

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

  const goToContact = () => {
    setShow(false);
    router.push("/Contactus");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl text-center text-[#D4AB45] font-bold mb-6 lg:py-12">Contact Us</h1>
      <CallingSection />
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
      {/* ======================Address section ======================= */}
      <div className="lg:my-12 lg:flex gap-8">
        <div>
          <h6 className="text-xl text-[#D4AB45] font-bold">Address:</h6>
          <p className="text-xs">CR No. 1208992 <br />
            Shop No. 14 <br />
            Al Salami <br />
            Industrial Estate, Wilayat Ibri, S of Oman. <br />
            Mob: 98147797, 98765355
          </p>
        </div>
        <>
          {/* Small image */}
          <div>
            <img
              src="/shop.jpeg"
              alt="preview"
              className="w-[15%] cursor-pointer"
              onClick={() => setShow(true)}
            />
          </div>

          {/* Fullscreen image preview modal */}
          {show && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">

              {/* Cross button */}
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold cursor-pointer"
                onClick={goToContact}
              >
                ✕
              </button>

              {/* Full size image */}
              <img src="/shop.jpeg" className="max-w-[90vw] max-h-[90vh]" />
            </div>
          )}
        </>
      </div>
    </div>
  );
}
