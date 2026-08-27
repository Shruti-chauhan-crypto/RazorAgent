const Home = () => {
  return (
    <main className="min-h-screen bg-(--bg) text-(--text)">

      <section className="max-w-6xl mx-auto px-6 py-24 text-center">

        <p className="text-blue-600 font-semibold mb-4">
          AI Growth & Agentic Commerce
        </p>

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Shop Smarter with{" "}
          <span className="text-blue-600">RazorAgent</span>
        </h1>

        <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
          An AI shopping assistant that recommends products, builds carts,
          and completes Razorpay payments inside one conversation.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Start Shopping
          </button>

          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition">
            View Dashboard
          </button>

        </div>

      </section>

    </main>
  );
};

export default Home;