"use client";

import { notFound } from "next/navigation";
import Image from "next/image";

// Same product list
const products = [
  {
    id: "classic-black",
    name: "Classic Black Frame",
    price: "Rs. 5,200",
    image: "/images/pic1.jpg",
    description: "A timeless black frame with sleek matte finish.",
  },
  {
    id: "bold-metal",
    name: "Bold Metal Aviator",
    price: "Rs. 6,800",
    image: "/images/pic2.jpg",
    description: "Stylish metal aviators for a bold look.",
  },
  {
    id: "vintage-round",
    name: "Vintage Round Frame",
    price: "Rs. 4,500",
    image: "/images/pic3.jpg",
    description: "Retro round frames perfect for classic taste.",
  },
  {
    id: "modern-clear",
    name: "Modern Clear Edge",
    price: "Rs. 5,000",
    image: "/images/pic4.jpg",
    description: "Modern transparent edge frames with clean lines.",
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

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = products.find((p) => p.id === params.productId);

  if (!product) {
    notFound(); // shows Next.js 404 page
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-green-600 px-6 md:px-12 py-16 font-sans">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-400 text-xl mb-2">{product.price}</p>
          <p className="text-gray-300 mb-6">{product.description}</p>

          {/* ✅ Order Free Sample Button */}
          <button
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
            onClick={() => alert(`Free sample of "${product.name}" ordered!`)}
          >
            Order Free Sample
          </button>
        </div>
      </div>
    </main>
  );
}
