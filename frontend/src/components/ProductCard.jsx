import { FiShoppingCart, FiStar } from "react-icons/fi";
import useCart from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-900">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Discount Badge */}
        <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
          {product.discount}% OFF
        </span>

        {/* Rating Badge */}
        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-semibold text-yellow-600 shadow-md backdrop-blur dark:bg-slate-900/80">
          <FiStar className="fill-yellow-400 text-yellow-400" />
          {product.rating}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Brand */}
        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-600 dark:bg-blue-950/30 dark:text-blue-300">
          {product.brand}
        </span>

        {/* Product Name */}
        <h3 className="line-clamp-2 text-lg font-semibold leading-6 text-slate-900 dark:text-white">
          {product.name}
        </h3>

        {/* Price */}
        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-600">
              ₹{product.price}
            </p>
            <p className="text-xs text-slate-500">
              Inclusive of all taxes
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => addToCart(product)}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
        >
          <FiShoppingCart />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;