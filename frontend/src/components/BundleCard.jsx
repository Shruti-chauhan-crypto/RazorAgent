import { FiGift, FiShoppingCart, FiTag } from "react-icons/fi";
import useCart from "../hooks/useCart";
import { motion } from "framer-motion";

const BundleCard = ({ bundle }) => {
  const { addToCart } = useCart();

  if (!bundle || !bundle.products) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mt-6 overflow-hidden rounded-3xl border border-green-200 bg-white shadow-lg dark:border-green-800 dark:bg-slate-900"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-5 text-white">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/20 p-3">
            <FiGift className="text-2xl" />
          </div>

          <div>
            <h3 className="text-lg font-bold">{bundle.bundle_title}</h3>
            <p className="text-sm text-green-100">
              AI Bundle Recommendation · Save {bundle.discount}% today
            </p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="space-y-4 p-5">
        {bundle.products.map((item) => (
          <div
            key={item.id}
            className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-3 transition-all duration-300 hover:border-green-300 hover:bg-white hover:shadow-md dark:border-slate-700 dark:bg-slate-800/60 dark:hover:bg-slate-800"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-2xl object-cover"
              />

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
                  {item.brand}
                </p>

                <h4 className="font-semibold text-slate-900 dark:text-white">
                  {item.name}
                </h4>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-bold text-blue-600">
                    ₹{item.price}
                  </span>

                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Bundle Deal
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => addToCart(item)}
              className="rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 p-3 text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-green-500/30"
            >
              <FiShoppingCart />
            </button>
          </div>
        ))}

        {/* Footer */}
        <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiTag className="text-green-600" />
              <span className="font-medium text-green-700 dark:text-green-300">
                Bundle Savings
              </span>
            </div>

            <span className="text-xl font-bold text-green-600">
              {bundle.discount}% OFF
            </span>
          </div>

          <p className="mt-2 text-sm text-green-700 dark:text-green-300">
            Buy all recommended products together to unlock this exclusive AI
            bundle discount during checkout.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BundleCard;