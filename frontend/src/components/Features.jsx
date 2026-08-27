import { features } from '../data/features';
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <section className="bg-(--bg) px-6 py-24 text-(--text)">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 font-medium text-blue-600">
            Powerful AI Commerce Features
          </p>

          <h2 className="text-4xl font-bold lg:text-5xl">
            Everything a Merchant Needs to Grow with AI
          </h2>

          <p className="mt-5 text-lg leading-8"
             style={{ color: "var(--text-secondary)" }}
          >
            RazorAgent combines conversational AI, product discovery, smart carts,
            Razorpay payments, and merchant analytics into one seamless shopping experience.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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