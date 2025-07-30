"use client";

import { useState } from "react";

export default function FreeSamplePage() {
  const [submitted, setSubmitted] = useState(false);

  const products = [
    "Classic Black Frame",
    "Bold Metal Aviator",
    "Retro Round Glasses",
    "Transparent Minimalist",
    "Tortoise Shell Style",
    "Blue Light Blocker",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#0e0e0e] text-white min-h-screen px-6 md:px-12 py-20 font-sans">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Get a Free Glasses Sample</h1>
        <p className="text-gray-400 text-center mb-10">
          Try our frames before buying. Select a product and we’ll ship a free sample to you!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6 bg-[#1a1a1a] p-8 rounded-lg shadow-lg border border-gray-700">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-white focus:outline-none focus:ring-1 focus:ring-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-white focus:outline-none focus:ring-1 focus:ring-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Shipping Address</label>
              <textarea
                required
                rows={3}
                placeholder="House #, Street, City, Postal Code"
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-white focus:outline-none focus:ring-1 focus:ring-white"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Select Product for Sample</label>
              <select
                required
                className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-white focus:outline-none focus:ring-1 focus:ring-white"
              >
                <option value="">-- Select a Product --</option>
                {products.map((product, index) => (
                  <option key={index} value={product}>
                    {product}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded hover:bg-gray-200 transition"
            >
              Request Free Sample
            </button>
          </form>
        ) : (
          <div className="text-center mt-16">
            <h2 className="text-3xl font-semibold mb-4 text-green-400">Thank You!</h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Your request has been received. We’ll process your free sample and ship it within 5–7 business days.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
