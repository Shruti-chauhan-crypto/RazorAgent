import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiShoppingCart,
  FiMessageCircle,
  FiCreditCard,
} from "react-icons/fi";
import heroImage from "../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Glow */}
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-400/15 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-14 px-6 py-20 lg:flex-row lg:px-12">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 dark:border-blue-900/50 dark:bg-blue-950/30 dark:text-blue-300">
            ✨ AI Growth & Agentic Commerce
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-white lg:text-6xl">
            Shop Smarter with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              RazorAgent
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-lg text-base leading-7 text-slate-600 dark:text-slate-300 lg:text-lg">
            Your AI-powered shopping assistant helps customers discover products,
            build carts, and complete secure Razorpay payments — all inside one
            seamless conversation.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/chat"
              className="flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <FiShoppingCart />
              Start Shopping
            </Link>

            <Link
              to="/dashboard"
              className="flex items-center justify-center gap-2 rounded-2xl border border-blue-600 bg-white px-6 py-3 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white dark:bg-slate-900"
            >
              Merchant Dashboard
              <FiArrowRight />
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
              <FiShoppingCart className="mb-3 text-2xl text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                100+
              </h3>
              <p className="text-sm text-slate-500">Products</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
              <FiMessageCircle className="mb-3 text-2xl text-indigo-600" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                24×7
              </h3>
              <p className="text-sm text-slate-500">AI Assistant</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60">
              <FiCreditCard className="mb-3 text-2xl text-emerald-600" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                100%
              </h3>
              <p className="text-sm text-slate-500">Secure Checkout</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-1 justify-center"
        >
          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />

          {/* Hero Image */}
          <div className="rounded-[28px] border border-white/50 bg-white/60 p-4 shadow-2xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/40">
            <img
              src={heroImage}
              alt="AI Shopping Assistant"
              className="w-full max-w-md object-contain"
            />
          </div>

          {/* Floating Cards */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute left-0 top-10 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/80"
          >
            <p className="text-xs text-slate-500">👟 Sneakers</p>
            <h4 className="font-semibold text-blue-600">₹2,499</h4>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-16 right-0 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/80"
          >
            <p className="text-xs text-slate-500">🎒 Backpack</p>
            <h4 className="font-semibold text-indigo-600">₹1,799</h4>
          </motion.div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute bottom-0 left-16 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/80"
          >
            <p className="text-xs text-slate-500">🎧 Earbuds</p>
            <h4 className="font-semibold text-emerald-600">₹1,999</h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;