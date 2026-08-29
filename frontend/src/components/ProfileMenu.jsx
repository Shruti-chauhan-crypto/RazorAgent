import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiChevronDown,
  FiLogOut,
  FiShoppingBag,
  FiUser,
  FiMessageCircle,
  FiLayout,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../hooks/useAuth";

const ProfileMenu = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const initials =
    user?.name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase() || "M";

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-full border border-(--border) bg-(--surface) px-3 py-2 shadow-sm transition hover:shadow-md"
      >
        {/* Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-indigo-600 font-semibold text-white">
          {initials}
        </div>

        {/* Merchant Name */}
        <div className="hidden text-left md:block">
          <p className="text-sm font-semibold text-(--text-primary)">
            {user?.name}
          </p>

          <p className="text-xs text-(--text-secondary)">
            {user?.storeName}
          </p>
        </div>

        <FiChevronDown
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.96 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 z-50 mt-2 w-72 overflow-hidden rounded-3xl border border-(--border) bg-(--surface) shadow-xl"
          >
            {/* Header */}
            <div className="bg-linear-to-r from-blue-600 to-indigo-600 p-5 text-white">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-xl font-bold backdrop-blur">
                  {initials}
                </div>

                <div>
                  <h3 className="font-semibold">{user?.name}</h3>

                  <p className="text-sm text-blue-100">
                    {user?.storeName}
                  </p>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="p-3">

              <Link
                to="/dashboard"
                className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <FiLayout className="text-blue-600" />
                Dashboard
              </Link>

              <Link
                to="/chat"
                className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <FiMessageCircle className="text-purple-600" />
                AI Shopping Assistant
              </Link>

              <Link
                to="/cart"
                className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <FiShoppingBag className="text-green-600" />
                Shopping Cart
              </Link>

              <Link
                to="/profile"
                className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <FiUser className="text-orange-500" />
                Merchant Profile
              </Link>

              <hr className="my-3 border-(--border)" />

              <button
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 transition hover:bg-red-50 dark:hover:bg-red-950/30"
              >
                <FiLogOut />
                Logout
              </button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileMenu;