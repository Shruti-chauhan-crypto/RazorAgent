import loadRazorpayScript from "../utils/loadRazorpay";
import {
  createPaymentOrder,
  verifyPayment,
} from "../api/api";

const CheckoutButton = ({ amount }) => {
  const handleCheckout = async () => {
    const loaded = await loadRazorpayScript();

    if (!loaded) {
      alert("Failed to load Razorpay.");
      return;
    }

    const payment = await createPaymentOrder(amount);

    const options = {
      key: payment.key,

      amount: payment.order.amount,

      currency: payment.order.currency,

      name: "RazorAgent",

      description: "AI Shopping Checkout",

      order_id: payment.order.id,

      theme: {
        color: "#2563EB",
      },

      handler: async (response) => {
        const verification = await verifyPayment(response);

        if (verification.success) {
          alert("Payment Successful 🎉");
        }
      },

      prefill: {
        name: "Shruti Chauhan",
        email: "shruti@example.com",
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.open();
  };

  return (
    <button
      onClick={handleCheckout}
      className="w-full rounded-2xl bg-blue-600 py-4 text-white font-semibold hover:bg-blue-700"
    >
      Pay ₹{amount / 100}
    </button>
  );
};

export default CheckoutButton;