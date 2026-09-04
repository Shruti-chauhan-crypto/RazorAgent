import useCart from "../hooks/useCart";

const OrderSummary = ({ discount , cartTotal }) => {
  const { totalPrice } = useCart();

  const delivery = totalPrice > 2000 ? 0 : 99;

  const discountAmount = (totalPrice * discount) / 100;

  const finalAmount =
    totalPrice + delivery - discountAmount;

  return (
    <div className="card sticky top-24 p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Order Summary
      </h2>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>

          <span>₹{totalPrice}</span>
        </div>

        <div className="flex justify-between">
          <span>Discount</span>

          <span className="text-green-600">
            -₹{discountAmount}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Delivery</span>

          <span>
            {delivery === 0 ? "FREE" : `₹${delivery}`}
          </span>
        </div>

        <hr className="border-(--border)" />

        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>

          <span className="text-blue-600">
            ₹{finalAmount}
          </span>
        </div>
      </div>

      <button className="mt-8 w-full rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 py-4 font-medium text-white hover:opacity-90">
        Proceed to Razorpay Checkout
      </button>
    </div>
  );
};

export default OrderSummary;