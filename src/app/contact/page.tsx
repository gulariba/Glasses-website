// app/contact/page.tsx
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-gray-400 mb-10">
          Have questions about our eyewear, collaborations, or custom orders?
          Fill out the form below or reach us through the provided contact details.
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Email Address</label>
            <input
              type="email"
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-300">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-2 rounded-md bg-[#1a1a1a] border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
              placeholder="Write your message..."
              required
            />
          </div>

          <button
            type="submit"
            className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-300 transition-all duration-300 font-semibold shadow"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-sm text-gray-400">
          <p>Email: <Link href="mailto:support@blankworks.com" className="underline">support@blankworks.com</Link></p>
          <p>Phone: <Link href="tel:+1234567890" className="underline">+1 234 567 890</Link></p>
          <p>Location: Karachi, Pakistan</p>
        </div>
      </div>
    </main>
  );
}
