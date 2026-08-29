import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import useCart from "../hooks/useCart";

const Navbar = () => {

  const { cartItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-blue-600">
          RazorAgent
        </Link>

        <div className="hidden md:flex gap-8 font-medium text-slate-700 dark:text-slate-200">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>

          <Link to="/chat" className="hover:text-blue-600 dark:hover:text-blue-400">
            Assistant
          </Link>

          <Link
            to="/dashboard"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Dashboard
          </Link>
        </div>

        <div className="flex items-center gap-4 text-slate-700 dark:text-slate-200">
          <Link to="/cart" className="relative">
            <FiShoppingCart size={22} />

            {cartItems.length > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartItems.length}
              </span>
            )}
          </Link>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;