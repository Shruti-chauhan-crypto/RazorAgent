import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { signupUser } from "../api/api";
import useAuth from "../hooks/useAuth";

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.name || !form.email || !form.password) {
      setError("Please fill all fields.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      const data = await signupUser(form);

      // Save JWT token + user
      login(data.token, data.user);

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Signup failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-4">
      <div className="card w-full max-w-md rounded-3xl p-8 shadow-lg">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[var(--text-primary)]">
            Create Merchant Account
          </h1>

          <p className="mt-2 text-[var(--text-secondary)]">
            Join RazorAgent and start growing your business.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-5 rounded-xl bg-red-100 px-4 py-3 text-sm text-red-600 dark:bg-red-900/20 dark:text-red-400">
            {error}
          </div>
        )}

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Full Name
            </label>

            <div className="flex items-center rounded-xl border border-[var(--border)] px-4 py-3 focus-within:border-blue-500">
              <FiUser className="text-xl text-[var(--text-secondary)]" />

              <input
                type="text"
                name="name"
                placeholder="Shruti Chauhan"
                value={form.name}
                onChange={handleChange}
                className="ml-3 w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email
            </label>

            <div className="flex items-center rounded-xl border border-[var(--border)] px-4 py-3 focus-within:border-blue-500">
              <FiMail className="text-xl text-[var(--text-secondary)]" />

              <input
                type="email"
                name="email"
                placeholder="merchant@example.com"
                value={form.email}
                onChange={handleChange}
                className="ml-3 w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-[var(--border)] px-4 py-3 focus-within:border-blue-500">
              <FiLock className="text-xl text-[var(--text-secondary)]" />

              <input
                type="password"
                name="password"
                placeholder="Minimum 8 characters"
                value={form.password}
                onChange={handleChange}
                className="ml-3 w-full bg-transparent outline-none"
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-[var(--text-secondary)]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;