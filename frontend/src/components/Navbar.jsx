import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiLogOut,
  FiShoppingCart,
  FiMessageCircle,
  FiBarChart2,
  FiPackage,
  FiHome,
} from "react-icons/fi";

import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Theme Toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navItemClass = ({ isActive }) =>
    `flex items-center gap-2 rounded-xl px-3 py-2 transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-[var(--text-secondary)] hover:bg-[var(--surface-secondary)] hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md">
      <div className="container-custom flex h-16 items-center justify-between px-6 py-10">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-full h-10 w-10 bg-blue-600 py-2 px-2 text-white font-bold">
            RA
          </div>

          <div>
            <h1 className="text-lg font-bold text-blue-600">
              RazorAgent
            </h1>

            <p className="text-xs text-[var(--text-secondary)]">
              AI Merchant Assistant
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/" className={navItemClass}>
            <FiHome />
            Home
          </NavLink>

          <NavLink to="/chat" className={navItemClass}>
            <FiMessageCircle />
            Chat
          </NavLink>

          <NavLink to="/dashboard" className={navItemClass}>
            <FiBarChart2 />
            Dashboard
          </NavLink>

          <NavLink to="/cart" className={navItemClass}>
            <FiShoppingCart />
            Cart
          </NavLink>

          <NavLink to="/orders" className={navItemClass}>
            <FiPackage />
            Orders
          </NavLink>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-full border border-[var(--border)] p-2 hover:bg-[var(--surface-secondary)]"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>

          {/* Merchant Profile */}
          {isAuthenticated && (
            <div className="hidden items-center gap-3 md:flex">

              <div className="text-right">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  {user?.name}
                </p>

                <p className="text-xs text-[var(--text-secondary)]">
                  {user?.email}
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>

              <button
                onClick={handleLogout}
                className="rounded-xl border border-red-300 p-2 text-red-600 transition hover:bg-red-50 dark:hover:bg-red-900/20"
                title="Logout"
              >
                <FiLogOut size={18} />
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            className="rounded-lg p-2 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] md:hidden">
          <div className="container-custom flex flex-col gap-2 py-4">

            <NavLink
              to="/"
              className={navItemClass}
              onClick={() => setMenuOpen(false)}
            >
              <FiHome />
              Home
            </NavLink>

            <NavLink
              to="/chat"
              className={navItemClass}
              onClick={() => setMenuOpen(false)}
            >
              <FiMessageCircle />
              Chat
            </NavLink>

            <NavLink
              to="/dashboard"
              className={navItemClass}
              onClick={() => setMenuOpen(false)}
            >
              <FiBarChart2 />
              Dashboard
            </NavLink>

            <NavLink
              to="/cart"
              className={navItemClass}
              onClick={() => setMenuOpen(false)}
            >
              <FiShoppingCart />
              Cart
            </NavLink>

            <NavLink
              to="/orders"
              className={navItemClass}
              onClick={() => setMenuOpen(false)}
            >
              <FiPackage />
              Orders
            </NavLink>

            {isAuthenticated && (
              <>
                <div className="mt-3 rounded-xl bg-[var(--surface-secondary)] p-3">
                  <p className="font-semibold">{user?.name}</p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {user?.email}
                  </p>
                </div>

                <button
                  onClick={handleLogout}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-red-600 py-3 text-white"
                >
                  <FiLogOut />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;