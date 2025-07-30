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
];

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const product = products.find((p) => p.id === params.productId);

  if (!product) {
    notFound(); // shows Next.js 404 page
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-12 py-16 font-sans">
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
