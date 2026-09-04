import { FiGift, FiShoppingCart } from "react-icons/fi";
import useCart from "../hooks/useCart";
import { motion } from "framer-motion";

const BundleCard = ({ bundle }) => {
  const { addToCart } = useCart();

  if (!bundle || !bundle.products) return null;

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mt-5 rounded-3xl border border-green-200 bg-green-50 p-5 dark:border-green-700 dark:bg-green-900/20"
    >
      <div className="flex items-center gap-3">
        <FiGift className="text-2xl text-green-600" />

        <div>
          <h3 className="font-bold text-green-700 dark:text-green-300">
            {bundle.bundle_title}
          </h3>

          <p className="text-sm text-green-600">
            Save {bundle.discount}% when purchased together.
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-4">
        {bundle.products.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl bg-white p-3 dark:bg-slate-800"
          >
            <div className="flex items-center gap-3">
              <img
                src={item.image}
                alt={item.name}
                className="h-16 w-16 rounded-xl object-cover"
              />

              <div>
                <h4 className="font-medium">{item.name}</h4>

                <p className="text-sm text-slate-500">
                  {item.brand}
                </p>

                <p className="font-semibold text-blue-600">
                  ₹{item.price}
                </p>
              </div>
            </div>

            <button
              onClick={() => addToCart(item)}
              className="rounded-lg bg-green-600 px-3 py-2 text-white hover:bg-green-700"
            >
              <FiShoppingCart />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BundleCard;