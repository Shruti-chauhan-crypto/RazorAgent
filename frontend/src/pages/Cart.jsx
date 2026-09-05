import { useState } from "react";
import { FiShoppingCart, FiShield, FiTruck } from "react-icons/fi";

import CartItem from "../components/CartItem";
import CouponBox from "../components/CouponBox";
import OrderSummary from "../components/OrderSummary";
import CartOffer from "../components/CartOffer";
import CheckoutButton from "../components/CheckoutButton";

import useCart from "../hooks/useCart";
import { getCartOffer } from "../data/cartOffers";

const Cart = () => {
  const { cartItems } = useCart();
  const [discount, setDiscount] = useState(0);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const offer = getCartOffer(cartItems, cartTotal);

  const applyCoupon = (code) => {
    if (code.trim().toUpperCase() === "WELCOME10") {
      setDiscount(10);
      alert("🎉 Coupon Applied! You got 10% OFF.");
    } else {
      setDiscount(0);
      alert("❌ Invalid Coupon");
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                <FiShoppingCart />
                Secure Checkout
              </div>

              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Shopping Cart
              </h1>

              <p className="mt-2 text-blue-100">
                Review your products and complete payment securely with Razorpay.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
              <p className="text-sm text-blue-100">Items in Cart</p>
              <h2 className="text-3xl font-bold">{cartItems.length}</h2>
            </div>
          </div>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white py-20 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950/30">
              <FiShoppingCart className="text-3xl text-blue-600" />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-900 dark:text-white">
              Your Cart is Empty 🛒
            </h2>

            <p className="mt-3 text-slate-500 dark:text-slate-400">
              Start chatting with RazorAgent to discover products and add them to
              your cart.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">

            {/* LEFT COLUMN */}
            <div className="space-y-6">
              {/* AI Offer */}
              <CartOffer offer={offer} />

              {/* Cart Items */}
              <div className="space-y-5">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              {/* Coupon */}
              <CouponBox onApply={applyCoupon} />
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-5">
              {/* Trust Card */}
              <div className="rounded-3xl border border-green-200 bg-white p-5 shadow-sm dark:border-green-800 dark:bg-slate-900">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-green-100 p-2 dark:bg-green-900/30">
                    <FiShield className="text-xl text-green-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      Razorpay Secure Checkout
                    </h3>
                    <p className="text-sm text-slate-500">
                      100% encrypted payment gateway
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <FiTruck className="text-blue-600" />
                  Free shipping on eligible orders.
                </div>
              </div>

              {/* Order Summary */}
              <OrderSummary
                discount={discount}
                cartTotal={cartTotal}
              />

              {/* Checkout Button */}
              <CheckoutButton amount={cartTotal * 100} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;