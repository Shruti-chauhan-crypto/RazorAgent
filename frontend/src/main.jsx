import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import ThemeProvider from "./context/ThemeContext";
import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthContext";

// Restore saved theme before rendering the app
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);