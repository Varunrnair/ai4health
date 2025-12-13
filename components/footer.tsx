"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navLinks = [
    { title: "Sakhi", path: "/projects/sakhi" },
    { title: "Sanjeevani", path: "/projects/sanjeevani-app" },
    { title: "Medical AI Evaluations", path: "/projects/medical-ai-evaluation" },
  ];

  const connectLinks = [{ id: 2, text: "Contact us" }];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const { name, email, profession } = formData;

    if (!name.trim() || !email.trim() || !profession.trim()) {
      setMessage("All fields are required.");
      setLoading(false);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    try {
      const form = new FormData();
      form.append("name", name.trim());
      form.append("email", email.trim());
      form.append("profession", profession.trim());

      const response = await fetch("https://script.google.com/macros/s/AKfycbxNdF82ezyRWHAHUSVKpN-DIz9iZx2ar1B2DDVaWtCD9h-ttQdDTb_JHqKv6FREDRS5/exec", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        setMessage("You've successfully subscribed to the newsletter!");
        setFormData({ name: "", email: "", profession: "" });
      } else {
        setMessage(`${result.error || "Subscription failed. Please try again."}`);
      }

    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("Network or server error. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <footer className="w-full bg-[#fbfbfb] text-black py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between w-full space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="flex flex-col w-full md:w-2/3 space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#d55a40] to-[#372c79] bg-clip-text text-transparent mx-auto md:mx-0">
              AI4Health
            </h3>
            <div className="flex flex-col w-full">
              <p className="text-gray-600 text-base md:text-lg font-bold text-center md:text-left">
                Subscribe to Our Newsletter for Monthly Insights
              </p>
              <p className="text-gray-600 text-sm md:text-base text-center md:text-left">
                Stay updated with our latest research, insights, and news directly in your inbox.
              </p>

              <form
                className="flex flex-col sm:flex-row sm:items-center gap-3 mt-6 max-w-2xl w-full"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm w-full"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                  maxLength={100}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm w-full"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                  maxLength={254}
                />
                <input
                  type="text"
                  name="profession"
                  placeholder="Enter your profession"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm w-full"
                  value={formData.profession}
                  onChange={handleInputChange}
                  required
                  disabled={loading}
                  maxLength={100}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white font-bold px-5 py-3 rounded-md hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm transition w-full sm:w-auto"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              {message && (
                <div
                  className={`mt-3 p-3 rounded-md text-sm ${
                    message.toLowerCase().includes("success")
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-red-100 text-red-800 border border-red-200"
                  }`}
                >
                  {message}
                </div>
              )}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-end w-full md:w-auto gap-8 sm:gap-12 md:gap-16">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <h4 className="font-bold text-lg text-gray-800">Projects</h4>
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.path}
                  className="text-gray-600 hover:text-black text-base font-medium"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <h4 className="font-bold text-lg text-gray-800">Also Check!</h4>
              <a
                href="https://arbiter.simppl.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-base font-medium"
              >
                Arbiter
              </a>
              <a
                href="https://simppl.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-base font-medium"
              >
                SimPPL
              </a>
              <a
                href="https://nextgenai.simppl.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-base font-medium"
              >
                NextGenAI
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <h4 className="font-bold text-lg text-gray-800">Connect With Us</h4>
              {connectLinks.map((link) => (
                <div
                  key={link.id}
                  className="text-gray-600 text-base hover:text-black cursor-pointer"
                >
                  {link.text === "Contact us" ? (
                    <a
                      href="https://simppl.org/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
                    </a>
                  ) : (
                    link.text
                  )}
                </div>
              ))}
              <a
                href="https://x.com/simpplresearch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-base font-medium"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/company/sim-ppl/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black text-base font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} SimPPL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}