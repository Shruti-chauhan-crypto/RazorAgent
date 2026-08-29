import { FiShoppingCart } from 'react-icons/fi';
import useCart from '../hooks/useCart';

const CartPreview = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside className="card sticky top-24 hidden h-fit w-80 p-6 xl:block">
      <div className="mb-5 flex items-center gap-3">
        <FiShoppingCart className="text-blue-600" />
        <h3 className="text-xl font-semibold">Shopping Cart</h3>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-sm text-slate-500">No items added yet.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between"
              >
                <span>{item.name}</span>
                <span className="font-semibold">₹{item.price}</span>
              </div>
            ))}
          </div>

          <hr className="my-5 border-(--border)" />

          <div className="mb-4 flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span className="text-blue-600">₹{total}</span>
          </div>

          <button className="w-full rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 py-3 text-white">
            Proceed to Razorpay Checkout
          </button>
        </>
      )}
    </aside>
  );
};

export default CartPreview;