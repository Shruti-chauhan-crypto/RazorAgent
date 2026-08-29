import { FiTrash2 } from "react-icons/fi";
import QuantitySelector from "./QuantitySelector";
import useCart from "../hooks/useCart";

const CartItem = ({ item }) => {
  const { removeItem } = useCart();

  return (
    <div className="card flex gap-5 p-5">
      <img
        src={item.image}
        alt={item.name}
        className="h-28 w-28 rounded-xl object-cover"
      />

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-sm text-blue-600">{item.category}</p>

          <h3 className="text-lg font-semibold">{item.name}</h3>

          <p className="mt-2 text-xl font-bold text-blue-600">
            ₹{item.price}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <QuantitySelector item={item} />

          <button
            onClick={() => removeItem(item.id)}
            className="flex items-center gap-2 text-red-500 hover:text-red-600"
          >
            <FiTrash2 />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;