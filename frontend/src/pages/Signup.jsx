import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiUser, FiMail, FiLock, FiShoppingBag } from "react-icons/fi";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";

const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    storeName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const { name, storeName, email, password, confirmPassword } = formData;

    if (!name || !storeName || !email || !password || !confirmPassword) {
      setError("Please fill all the fields.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    signup({
      name,
      storeName,
      email,
      password,
    });

    navigate("/dashboard");
  };

  return (
    <section className="min-h-screen bg-(--bg)">
      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Branding Section */}
        <div className="hidden lg:flex flex-col justify-center bg-linear-to-br from-blue-600 via-indigo-600 to-purple-600 px-16 text-white">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-md">
              AI Powered Commerce
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight">
              Join RazorAgent
            </h1>

            <p className="mt-5 text-lg text-blue-100">
              Create your AI-powered merchant account and start selling with
              conversational commerce powered by Razorpay.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "🤖 AI Product Recommendations",
                "💳 Razorpay Smart Checkout",
                "📊 Merchant Analytics Dashboard",
                "⚡ AI Upselling & Revenue Growth",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Form Section */}
        <div className="flex items-center justify-center px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card w-full max-w-md rounded-[28px] p-8"
          >
            {/* Logo */}
            <div className="mb-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                <FiShoppingBag size={28} />
              </div>

              <h2 className="mt-5 text-3xl font-bold text-(--text-primary)">
                Create Merchant Account
              </h2>

              <p className="mt-2 text-sm text-(--text-secondary)">
                Join RazorAgent and grow your business with AI.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Merchant Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Merchant Name
                </label>

                <div className="flex items-center rounded-xl border border-(--border) px-4 py-3 focus-within:border-blue-500">
                  <FiUser className="text-slate-400" />

                  <input
                    type="text"
                    name="name"
                    placeholder="Shruti Chauhan"
                    value={formData.name}
                    onChange={handleChange}
                    className="ml-3 w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Store Name */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Store Name
                </label>

                <div className="flex items-center rounded-xl border border-(--border) px-4 py-3 focus-within:border-blue-500">
                  <FiShoppingBag className="text-slate-400" />

                  <input
                    type="text"
                    name="storeName"
                    placeholder="Razor Fashion Store"
                    value={formData.storeName}
                    onChange={handleChange}
                    className="ml-3 w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Email Address
                </label>

                <div className="flex items-center rounded-xl border border-(--border) px-4 py-3 focus-within:border-blue-500">
                  <FiMail className="text-slate-400" />

                  <input
                    type="email"
                    name="email"
                    placeholder="merchant@example.com"
                    value={formData.email}
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

                <div className="flex items-center rounded-xl border border-(--border) px-4 py-3 focus-within:border-blue-500">
                  <FiLock className="text-slate-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Minimum 6 characters"
                    value={formData.password}
                    onChange={handleChange}
                    className="ml-3 w-full bg-transparent outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-slate-500"
                  >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Confirm Password
                </label>

                <div className="flex items-center rounded-xl border border-(--border) px-4 py-3 focus-within:border-blue-500">
                  <FiLock className="text-slate-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="ml-3 w-full bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg"
              >
                Create Account
              </button>
            </form>

            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-(--text-secondary)">
              Already have a merchant account?{" "}
              <Link
                to="/login"
                className="font-semibold text-blue-600 hover:underline"
              >
                Login here
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Signup;