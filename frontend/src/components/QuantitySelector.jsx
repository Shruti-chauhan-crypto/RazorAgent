import { FiMinus, FiPlus } from "react-icons/fi";
import useCart from "../hooks/useCart";

const QuantitySelector = ({ item }) => {
  const { increaseQuantity, decreaseQuantity } = useCart();

  return (
    <div className="flex items-center gap-3 rounded-xl border border-(--border) px-3 py-2">
      <button
        onClick={() => decreaseQuantity(item.id)}
        className="rounded p-1 hover:bg-slate-100 dark:hover:bg-slate-700"
      >
        <FiMinus />
      </button>

      <span className="w-6 text-center font-semibold">
        {item.quantity}
      </span>

      <button
        onClick={() => increaseQuantity(item.id)}
        className="rounded p-1 hover:bg-slate-100 dark:hover:bg-slate-700"
      >
        <FiPlus />
      </button>
    </div>
  );
};

export default QuantitySelector;