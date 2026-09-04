import { FiXCircle } from "react-icons/fi";

const PaymentFailure = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="card rounded-3xl p-10 text-center">

        <FiXCircle className="mx-auto text-6xl text-red-600" />

        <h2 className="mt-5 text-3xl font-bold">
          Payment Failed
        </h2>

        <p className="mt-2 text-[var(--text-secondary)]">
          Something went wrong while processing payment.
        </p>

        <button className="mt-6 rounded-xl bg-red-600 px-6 py-3 text-white">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default PaymentFailure;