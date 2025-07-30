// app/faq/page.tsx
export default function FAQPage() {
  const faqs = [
    {
      question: "What makes Blank Works eyewear unique?",
      answer:
        "Each pair is crafted with premium materials and a minimalist design aesthetic, offering both style and comfort for daily wear.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we offer international shipping. Shipping fees and delivery times vary by location and are calculated at checkout.",
    },
    {
      question: "How do I track my order?",
      answer:
        "Once your order ships, you’ll receive an email with a tracking number and a link to track your package.",
    },
    {
      question: "Can I return or exchange my eyewear?",
      answer:
        "Yes, you can return or exchange unused items within 14 days of delivery. Visit our Returns page for full details.",
    },
    {
      question: "Are the lenses UV protected?",
      answer:
        "Yes, all our lenses offer 100% UV protection to keep your eyes safe in style.",
    },
    {
      question: "Do you offer prescription lenses?",
      answer:
        "Currently, we do not offer prescription lenses. However, our frames are optician-ready and can be fitted with your own lenses.",
    },
  ];

  return (
    <main className="bg-[#0f0f0f] text-green-800 min-h-screen px-6 md:px-12 py-20 font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-semibold mb-12 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-6">
              <h2 className="text-xl font-medium mb-2">{faq.question}</h2>
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
