import { FiCheckCircle } from "react-icons/fi";

const PaymentSuccess = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="card rounded-3xl p-10 text-center">

        <FiCheckCircle className="mx-auto text-6xl text-green-600" />

        <h2 className="mt-5 text-3xl font-bold">
          Payment Successful
        </h2>

        <p className="mt-2 text-[var(--text-secondary)]">
          Your order has been placed successfully.
        </p>

        <button className="mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;