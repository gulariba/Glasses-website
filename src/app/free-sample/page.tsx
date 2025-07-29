// app/free-sample/page.tsx
"use client";

import { useState } from "react";

export default function FreeSamplePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#0e0e0e] text-white min-h-screen px-6 md:px-12 py-20 font-sans">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-semibold mb-8 text-center">Order a Free Sample</h1>
        <p className="text-gray-400 text-center mb-10">
          Experience our eyewear quality before making your decision.
          Fill out the form below to request your free sample.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Shipping Address</label>
              <textarea
                required
                rows={3}
                className="w-full px-4 py-2 bg-[#1a1a1a] border border-gray-700 rounded text-white focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-3 rounded hover:bg-gray-200 transition"
            >
              Request Free Sample
            </button>
          </form>
        ) : (
          <div className="text-center mt-10">
            <h2 className="text-2xl font-semibold mb-4">Request Received</h2>
            <p className="text-gray-400">
              Thank you! Your sample request has been submitted successfully.
              We’ll ship your sample within 5–7 business days.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
