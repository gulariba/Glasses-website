import { teamMembers } from "@/app/lib/teamMembers";
import Image from "next/image";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default function TeamDetailPage({ params }: Props) {
  const member = teamMembers.find((m) => m.slug === params.slug);

  if (!member) return notFound();

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-green-800 px-6 py-16">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <Image
          src={member.image}
          alt={member.name}
          width={500}
          height={500}
          className="rounded-xl w-full object-cover"
        />
        <div>
          <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
          <h2 className="text-xl text-gray-400 mb-6">{member.role}</h2>
          <p className="text-gray-300 text-lg mb-4">{member.description}</p>
          <p className="text-gray-400 text-base leading-relaxed">{member.bio}</p>
        </div>
      </div>
    </main>
  );
}
