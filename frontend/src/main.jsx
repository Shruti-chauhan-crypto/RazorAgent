import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

import ThemeProvider from "./context/ThemeContext";
import CartProvider from "./context/CartContext";
import AuthProvider from "./context/AuthContext";

import { Toaster } from "react-hot-toast";

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>

          <Toaster
            position="top-right"
            gutter={12}
            toastOptions={{
              duration: 3000,

              style: {
                background: "var(--surface)",
                color: "var(--text-primary)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "var(--shadow-md)",
                fontSize: "14px",
                fontWeight: "500",
              },

              success: {
                iconTheme: {
                  primary: "#16a34a",
                  secondary: "#fff",
                },
              },

              error: {
                iconTheme: {
                  primary: "#dc2626",
                  secondary: "#fff",
                },
              },

              loading: {
                iconTheme: {
                  primary: "#2563eb",
                  secondary: "#fff",
                },
              },
            }}
          />

          <App />

        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);