"use client";

import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "classic-black",
    name: "Classic Black Frame",
    price: "Rs. 5,200",
    image: "/images/pic1.jpg",
    description: "A timeless black frame that suits every outfit and occasion.",
  },
  {
    id: "bold-metal",
    name: "Bold Metal Aviator",
    price: "Rs. 6,800",
    image: "/images/pic2.jpg",
    description: "A bold metal aviator frame with a modern touch of class.",
  },
  {
    id: "vintage-round",
    name: "Vintage Round Frame",
    price: "Rs. 4,500",
    image: "/images/pic3.jpg",
    description: "A vintage round frame for retro lovers and style icons.",
  },
  {
    id: "modern-clear",
    name: "Modern Clear Edge",
    price: "Rs. 5,000",
    image: "/images/pic4.jpg",
    description: "A clear-edge modern frame that gives a light and clean look.",
  },
  {
    id: "sleek-gray",
    name: "Sleek Gray Frame",
    price: "Rs. 5,600",
    image: "/images/pic5.jpg",
    description: "Minimalist sleek gray frame for daily and professional use.",
  },
  {
    id: "tortoise-shell",
    name: "Tortoise Shell Classic",
    price: "Rs. 6,200",
    image: "/images/pic6.jpg",
    description: "A timeless tortoise shell pattern frame with golden temples.",
  },
  {
    id: "double-bridge",
    name: "Double Bridge Style",
    price: "Rs. 7,000",
    image: "/images/pic7.jpg",
    description: "Trendy double bridge frame for a bold statement look.",
  },
  {
    id: "transparent-blue",
    name: "Transparent Blue Fade",
    price: "Rs. 5,400",
    image: "/images/pic8.jpg",
    description: "Transparent blue fading frame with a futuristic feel.",
  },
];

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-12 py-16 font-sans">
      <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
        Explore Our Collection
      </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:scale-105 transition-transform"
          >
            <Link href={`/product/${product.id}`}>
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover w-full h-64 cursor-pointer"
              />
            </Link>
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-medium">{product.name}</h2>
              <p className="text-gray-400 text-sm">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
