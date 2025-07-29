// app/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen px-6 md:px-12 py-20 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl md:text-5xl font-semibold text-center">
          Terms & Conditions
        </h1>

        <p className="text-gray-400 text-base leading-relaxed">
          Welcome to Blank Works. By using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our site.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Use of Website</h2>
          <p className="text-gray-400">
            All content provided on this site is for informational purposes only. We reserve the right to modify or discontinue any aspect of the website at any time without notice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Intellectual Property</h2>
          <p className="text-gray-400">
            All materials including logo, design, images, and text are owned by Blank Works and may not be used or reproduced without our written consent.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. Product Information</h2>
          <p className="text-gray-400">
            We strive to display accurate information, but we do not guarantee that descriptions or pricing are error-free. Prices and availability are subject to change.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Limitation of Liability</h2>
          <p className="text-gray-400">
            We are not liable for any damages arising from your use of the website or purchase of products. Use at your own risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Governing Law</h2>
          <p className="text-gray-400">
            These terms are governed by the laws of your country or region. Disputes will be resolved exclusively in the courts of the applicable jurisdiction.
          </p>
        </section>
      </div>
    </main>
  );
}
