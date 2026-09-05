import { useState } from "react";
import toast from "react-hot-toast";
import useCart from "../hooks/useCart";

import { createOrder, verifyPayment } from "../api/api";
import loadRazorpay from "../utils/loadRazorpay";

const CheckoutButton = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    console.log("🟢 Checkout button clicked");
    console.log("Razorpay Key:", import.meta.env.VITE_RAZORPAY_KEY_ID);

    if (cartItems.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }

    const razorpayLoaded = await loadRazorpay();
    console.log("Razorpay SDK Loaded:", razorpayLoaded);

    if (!razorpayLoaded) {
      toast.error("Failed to load Razorpay SDK.");
      return;
    }

    const loadingToast = toast.loading("Preparing secure payment...");

    try {
      const data = await createOrder(totalPrice);

      console.log("Order Response:", data);

      const paymentObject = new window.Razorpay({
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        order_id: data.order.id,
        name: "RazorAgent",
        description: "AI Shopping Assistant Checkout",

        handler: async (response) => {
          console.log("Payment Success:", response);

          await verifyPayment(response);

          toast.dismiss(loadingToast);
          toast.success("Payment Successful 🎉");
          clearCart();
        },

        theme: {
          color: "#2563EB",
        },
      });

      toast.dismiss(loadingToast);
      paymentObject.open();

    } catch (err) {
      toast.dismiss(loadingToast);
      console.error("Checkout Error:", err);
      toast.error("Unable to start payment.");
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading || cartItems.length === 0}
      className="w-full rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {loading ? "Processing Payment..." : `Pay ₹${totalPrice}`}
    </button>
  );
};

export default CheckoutButton;