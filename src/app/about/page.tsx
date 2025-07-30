
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-[#0f0f0f] text-green-600 min-h-screen px-6 md:px-12 py-20 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-semibold text-center">
          About Blank Works
        </h1>
        <p className="text-center text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
          Blank Works isn’t just an eyewear label. It’s a mindset. We craft bold,
          masculine frames for modern visionaries who aren’t afraid to stand out.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-400">
              We believe confidence begins with clarity. Our goal is to empower men to
              express their individuality through eyewear that’s unapologetically bold,
              beautifully crafted, and timeless in appeal.
            </p>
          </div>
          <Image
            src="/images/mission.jpg"
            alt="Our Mission"
            width={500}
            height={400}
            className="rounded-lg object-cover w-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12 md:mt-20">
          <Image
            src="/images/craftsmanship.jpg"
            alt="Craftsmanship"
            width={500}
            height={400}
            className="rounded-lg object-cover w-full"
          />
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Craftsmanship</h2>
            <p className="text-gray-400">
              Each frame is a fusion of high-end materials, precision engineering, and
              original design. Our eyewear is built to last — in quality and style.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
