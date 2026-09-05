import { Link } from "react-router-dom";
import { FiHome, FiArrowLeft } from "react-icons/fi";

const NotFound = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-6">
      <div className="max-w-lg text-center">

        <h1 className="text-8xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-[var(--text-primary)]">
          Page Not Found
        </h2>

        <p className="mt-4 text-[var(--text-secondary)]">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            <FiHome />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-6 py-3 hover:bg-[var(--surface-secondary)]"
          >
            <FiArrowLeft />
            Go Back
          </button>

        </div>
      </div>
    </section>
  );
};

export default NotFound;