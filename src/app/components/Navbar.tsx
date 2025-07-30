"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#0a0a0a] shadow-md sticky top-0 z-50 text-green-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-widest">
          Blank Works
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-gray-300 transition">Home</Link>
          <Link href="/about" className="hover:text-gray-300 transition">About</Link>
          <Link href="/shop" className="hover:text-gray-300 transition">Shop</Link>
          <Link href="/terms" className="hover:text-gray-300 transition">Terms</Link>

          {/* ✅ Corrected Free Sample Link */}
          <Link href="/free-sample">
            <button className="ml-4 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition font-semibold">
              Order Free Sample
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-[#111]">
          <Link href="/" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/shop" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link href="/terms" className="block hover:text-gray-300" onClick={() => setIsOpen(false)}>Terms</Link>

          {/* ✅ Corrected Free Sample Button */}
          <Link href="/free-sample">
            <button className="w-full mt-2 px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition font-semibold">
              Order Free Sample
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
