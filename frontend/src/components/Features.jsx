import { features } from "../data/features";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-6 py-20 dark:bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-900/40 dark:bg-blue-950/30 dark:text-blue-300">
            ✨ Powerful AI Commerce Features
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white lg:text-5xl">
            Everything a Merchant Needs to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Grow with AI
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
            RazorAgent combines conversational AI, product discovery, smart
            carts, Razorpay payments, and merchant analytics into one seamless
            shopping experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;