import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiShoppingBag,
} from "react-icons/fi";
import { motion } from "framer-motion";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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

    if (!formData.email || !formData.password) {
      setError("Please enter email and password.");
      return;
    }

    const success = login(formData.email, formData.password);

    if (success) {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
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
              Welcome Back
            </h1>

            <p className="mt-5 text-lg text-blue-100">
              Login to your RazorAgent merchant account and manage your AI-powered
              store, orders, payments, and analytics.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "📊 Merchant Dashboard",
                "💳 Razorpay Checkout & Payments",
                "🤖 AI Shopping Assistant",
                "📈 Revenue & Customer Analytics",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Login Card */}
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
                Merchant Login
              </h2>

              <p className="mt-2 text-sm text-(--text-secondary)">
                Sign in to continue with RazorAgent.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-5">

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
                    placeholder="Enter password"
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

              {/* Remember Me */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-(--text-secondary)">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="accent-blue-600"
                  />
                  Remember Me
                </label>

                <button
                  type="button"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-linear-to-r from-blue-600 to-indigo-600 py-3 font-semibold text-white transition hover:scale-[1.02] hover:shadow-lg"
              >
                Login to RazorAgent
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-(--border)" />
              <span className="text-xs text-(--text-secondary)">OR</span>
              <div className="h-px flex-1 bg-(--border)" />
            </div>

            {/* Demo Account */}
            <div className="rounded-xl bg-blue-50 p-4 text-sm dark:bg-blue-950/30">
              <p className="font-medium text-blue-700 dark:text-blue-300">
                Demo Merchant Account
              </p>

              <p className="mt-1 text-blue-600 dark:text-blue-400">
                Create an account from the Signup page first, then use those
                credentials here.
              </p>
            </div>

            {/* Signup Link */}
            <p className="mt-6 text-center text-sm text-(--text-secondary)">
              Don't have a merchant account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-blue-600 hover:underline"
              >
                Create Account
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Login;