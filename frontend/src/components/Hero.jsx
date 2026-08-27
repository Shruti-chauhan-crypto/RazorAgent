import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiShoppingCart, FiMessageCircle, FiCreditCard } from 'react-icons/fi';
import heroImage from '../assets/images/hero.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background Glow */}
      <div className="absolute -top-20 left-0 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl"></div>

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 py-20 lg:flex-row lg:px-12">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            ✨ AI Growth & Agentic Commerce
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
            Shop Smarter with{' '}
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              RazorAgent
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Your AI-powered shopping assistant that helps customers discover
            products, build carts, and complete Razorpay payments — all inside
            one conversation.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/chat"
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              <FiShoppingCart />
              Start Shopping
            </Link>

            <Link
              to="/dashboard"
              className="flex items-center justify-center gap-2 rounded-xl border border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
            >
              Merchant Dashboard
              <FiArrowRight />
            </Link>
          </div>

          {/* Statistics */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border bg-(--surface) border-(--border) p-5 shadow-md hover:shadow-xl transition-all ">
              <FiShoppingCart className="mx-auto mb-2 text-2xl text-blue-600" />
              <h3 className="text-2xl font-bold text-blue-600">100+</h3>
              <p className="text-sm text-slate-500">Products</p>
            </div>

            <div className="rounded-3xl border bg-(--surface) border-(--border) p-5 shadow-md hover:shadow-xl transition-all ">
              <FiMessageCircle className="mx-auto mb-2 text-2xl text-purple-600" />
              <h3 className="text-2xl font-bold text-purple-600">24×7</h3>
              <p className="text-sm text-slate-500">AI Assistant</p>
            </div>

            <div className="rounded-3xl border bg-(--surface) border-(--border) p-5 shadow-md hover:shadow-xl transition-all ">
              <FiCreditCard className="mx-auto mb-2 text-2xl text-green-600" />
              <h3 className="text-2xl font-bold text-green-600">100%</h3>
              <p className="text-sm text-slate-500">Razorpay Checkout</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex flex-1 justify-center"
        >
          {/* Hero Image */}
          <img
            src={heroImage}
            alt="AI Shopping Assistant"
            className="w-full max-w-md"
          />

          {/* Floating Card 1 */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
            className="absolute left-0 top-10 rounded-2xl bg-white/80 p-3 shadow-xl backdrop-blur-md dark:bg-slate-800/80"
          >
            <p className="text-xs text-slate-500">👟 Sneakers</p>
            <h4 className="font-semibold">₹2499</h4>
          </motion.div>

          {/* Floating Card 2 */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute bottom-16 right-0 rounded-2xl bg-white/80 p-3 shadow-xl backdrop-blur-md dark:bg-slate-800/80"
          >
            <p className="text-xs text-slate-500">🎒 Backpack</p>
            <h4 className="font-semibold">₹1799</h4>
          </motion.div>

          {/* Floating Card 3 */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute bottom-0 left-20 rounded-2xl bg-white/80 p-3 shadow-xl backdrop-blur-md dark:bg-slate-800/80"
          >
            <p className="text-xs text-slate-500">🎧 Earbuds</p>
            <h4 className="font-semibold">₹1999</h4>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;