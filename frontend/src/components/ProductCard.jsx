import { motion } from 'framer-motion';
import { FiShoppingCart } from 'react-icons/fi';

import RatingStars from './RatingStars';
import useCart from '../hooks/useCart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="card overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      <div className="space-y-4 p-5">
        <div>
          <p className="text-sm font-medium text-blue-600">
            {product.category}
          </p>

          <h3 className="mt-1 text-xl font-semibold">
            {product.name}
          </h3>
        </div>

        <RatingStars rating={product.rating} />

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>
        </div>

        <div className="rounded-2xl bg-blue-50 p-3 dark:bg-blue-950/40">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            🤖 AI Suggestion: {product.reason}
          </p>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 py-3 font-medium text-white transition hover:scale-105"
        >
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;