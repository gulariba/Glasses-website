export default function ReturnPolicyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-green-600 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Return &amp; Exchange Policy</h1>

        <p className="text-gray-400 mb-6">
          At Blank Works, your satisfaction is our top priority. If you&rsquo;re not completely happy with your purchase, we&rsquo;re here to help.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Eligibility for Returns</h2>
        <p className="text-gray-400">
          You can return any item within 7 days of delivery, provided it is unused, unwashed, and in its original packaging with all tags attached.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Non-Returnable Items</h2>
        <p className="text-gray-400">
          Due to hygiene reasons, lingerie and innerwear are not eligible for return or exchange.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Exchange Policy</h2>
        <p className="text-gray-400">
          We offer size exchanges if the desired size is available. If not, you may opt for store credit.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Refund Method</h2>
        <p className="text-gray-400">
          Refunds are issued in the form of store credit, which can be used on any future purchase.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. How to Request a Return</h2>
        <p className="text-gray-400">
          Email us at <a href="mailto:support@blankworks.com" className="underline">support@blankworks.com</a> with your order number and reason for return. We&rsquo;ll guide you through the process.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Shipping for Returns</h2>
        <p className="text-gray-400">
          Customers are responsible for return shipping unless the item received was incorrect or damaged.
        </p>

        <p className="text-gray-400 mt-8">
          For any further questions, don&rsquo;t hesitate to <a href="/contact" className="underline">contact us</a>.
        </p>
      </div>
    </main>
  );
}
