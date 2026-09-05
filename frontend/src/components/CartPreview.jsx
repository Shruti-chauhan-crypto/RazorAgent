import { FiShoppingCart, FiCreditCard, FiCheckCircle } from "react-icons/fi";
import useCart from "../hooks/useCart";
import CheckoutButton from "./CheckoutButton";

const CartPreview = () => {
  const { cartItems } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <aside className="m-3 sticky top-24 hidden w-80 xl:block">
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5 text-white">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white/20 p-2">
              <FiShoppingCart className="text-xl" />
            </div>

            <div>
              <h3 className="text-lg font-bold">Shopping Cart</h3>
              <p className="text-sm text-blue-100">
                {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {cartItems.length === 0 ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
                <FiShoppingCart className="text-2xl text-slate-400" />
              </div>

              <p className="font-medium text-slate-600 dark:text-slate-300">
                Your cart is empty
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Start chatting with RazorAgent to add products.
              </p>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-2xl bg-slate-50 p-3 dark:bg-slate-800/60"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-800 dark:text-white">
                        {item.name}
                      </p>

                      <p className="text-xs text-slate-500">
                        AI Recommended Product
                      </p>
                    </div>

                    <span className="font-bold text-blue-600">
                      ₹{item.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-slate-200 dark:border-slate-700" />

              {/* Secure Payment Info */}
              <div className="mb-5 flex items-center gap-2 rounded-xl bg-blue-50 p-3 dark:bg-blue-950/20">
                <FiCheckCircle className="text-blue-600" />
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Secure checkout powered by Razorpay
                </p>
              </div>

              {/* Total */}
              <div className="mb-6 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Subtotal</span>
                  <span>₹{total}</span>
                </div>

                <div className="mt-2 flex items-center justify-between text-xl font-bold text-slate-900 dark:text-white">
                  <span>Total</span>
                  <span className="text-blue-600">₹{total}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <CheckoutButton />
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default CartPreview;