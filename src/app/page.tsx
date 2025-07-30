"use client";

import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Ayaan Malik",
    role: "Founder & Creative Director",
    img: "/images/member1.jpg",
    slug: "ayaan-malik",
    desc: "Ayaan envisioned Blank Works as a symbol of bold masculinity and originality.",
  },
  {
    name: "Sara Qureshi",
    role: "Lead Product Designer",
    img: "/images/member2.jpg",
    slug: "sara-qureshi",
    desc: "She fuses functionality with art — designing frames that fit, feel, and inspire.",
  },
  {
    name: "Imran Zafar",
    role: "Marketing Strategist",
    img: "/images/member3.jpg",
    slug: "imran-zafar",
    desc: "He builds campaigns that connect the brand with modern men, globally.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white font-sans">
      {/* ✅ Hero Section */}
      <section className="relative h-[80vh] w-full">
        <Image
          src="/images/bg1.jpg"
          alt="Eyewear Collection"
          layout="fill"
          objectFit="cover"
          className="brightness-125 contrast-110" // ✅ Transparency removed, brightness increased
        />
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-12">
          {/* ✅ Overlay removed for clarity */}
          <div className="max-w-xl space-y-4 bg-black/20 p-6 rounded-md">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Authentic Eyewear<br />for Powerful Men
            </h1>
            <p className="text-gray-200 text-base md:text-lg">
              Bold frames. Timeless appeal. Made to make you stand out.
            </p>
            <Link href="/free-sample">
              <button className="px-5 py-2 bg-white text-black text-sm rounded-full hover:bg-gray-300 transition-all duration-300">
                Order Free Sample
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ✅ About Team Section */}
      <section className="px-6 md:px-12 py-16 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">Meet the Blank Works Team</h2>
          <p className="text-gray-400 text-base">
            Crafted by visionaries who believe eyewear is more than an accessory — it’s identity.
          </p>

          <div className="grid gap-8 md:grid-cols-3 pt-12">
            {teamMembers.map((member, idx) => (
              <Link
                key={idx}
                href={`/team/${member.slug}`}
                className="space-y-3 block group hover:scale-105 transition"
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover w-full"
                />
                <h3 className="text-lg font-medium group-hover:text-white">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
                <p className="text-sm text-gray-500">{member.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
