import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-green-800 mb-4">Blank Works</h2>
          <p className="text-sm text-gray-400">
            Premium eyewear for bold men. Designed to stand out and stay comfortable.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Help</h3>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/return-policy" className="hover:text-white">Return Policy</Link></li>
          </ul>
        </div>

        {/* Social & Subscription */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
          <form className="space-y-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 bg-[#1a1a1a] text-white rounded"
            />
            <button type="submit" className="w-full px-3 py-2 bg-white text-black rounded hover:bg-gray-200 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Blank Works. All rights reserved.
      </div>
    </footer>
  );
}
