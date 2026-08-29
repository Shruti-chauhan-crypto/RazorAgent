import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const ProductList = ({ products = [] }) => {
  // Empty state
  if (products.length === 0) {
    return (
      <div className="card mt-6 rounded-3xl p-8 text-center">
        <h3 className="text-xl font-semibold text-(--text-primary)">
          No Recommendations Yet
        </h3>

        <p className="mt-3 text-(--text-secondary)">
          Ask RazorAgent something like:
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {[
            "👟 White sneakers under ₹3000",
            "🎧 Wireless earbuds under ₹2000",
            "🎒 College backpack under ₹1500",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:bg-blue-950/40 dark:text-blue-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-6"
    >
      {/* AI Recommendation Banner */}
      <div className="glass mb-6 rounded-3xl border border-blue-200 p-4 dark:border-blue-900">
        <p className="font-medium text-blue-700 dark:text-blue-300">
          🤖 AI picked these products because they best match your budget, style,
          and shopping preferences.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.12,
              duration: 0.45,
            }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductList;