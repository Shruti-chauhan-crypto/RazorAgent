import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <section className="section-padding bg-[var(--bg)] min-h-screen flex items-center justify-center">

      <div className="card rounded-3xl p-10 text-center max-w-md">

        <FiCheckCircle className="mx-auto text-7xl text-green-600" />

        <h1 className="mt-5 text-3xl font-bold">
          Order Confirmed 🎉
        </h1>

        <p className="mt-3 text-[var(--text-secondary)]">
          Thank you for shopping with RazorAgent.
        </p>

        <p className="mt-1 text-[var(--text-secondary)]">
          Your payment was successful and your order has been placed.
        </p>

        <div className="mt-8 space-y-3">

          <Link
            to="/orders"
            className="block rounded-xl bg-blue-600 py-3 text-white font-semibold"
          >
            View My Orders
          </Link>

          <Link
            to="/dashboard"
            className="block rounded-xl border border-[var(--border)] py-3"
          >
            Back to Dashboard
          </Link>

        </div>
      </div>

    </section>
  );
};

export default OrderSuccess;