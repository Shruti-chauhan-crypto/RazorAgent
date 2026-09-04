import { FiShoppingCart, FiStar } from "react-icons/fi";
import useCart from "../hooks/useCart";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card rounded-3xl overflow-hidden transition hover:scale-[1.02]">

      <img
        src={product.image}
        alt={product.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-5 space-y-3">

        <p className="text-xs font-semibold text-blue-600 uppercase">
          {product.brand}
        </p>

        <h3 className="font-semibold text-lg">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">

          <span className="text-2xl font-bold text-blue-600">
            ₹{product.price}
          </span>

          <span className="flex items-center gap-1 text-yellow-500">
            <FiStar />
            {product.rating}
          </span>

        </div>

        <p className="text-sm text-green-600 font-medium">
          {product.discount}% OFF
        </p>

        <button
          onClick={() => addToCart(product)}
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white hover:bg-blue-700"
        >
          <FiShoppingCart />
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;