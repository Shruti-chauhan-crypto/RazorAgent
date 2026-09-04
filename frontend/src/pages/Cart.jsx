import { useState } from "react";

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

  // Calculate cart total
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // AI Cart Offer (Free Shipping / Bundle Offer)
  const offer = getCartOffer(cartItems, cartTotal);

  // Coupon Handler
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
    <section className="section-padding bg-[var(--bg)] min-h-screen">
      <div className="container-custom">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[var(--text-primary)]">
            Shopping Cart
          </h1>

          <p className="mt-2 text-[var(--text-secondary)]">
            Review your items before checkout.
          </p>
        </div>

        {/* Empty Cart */}
        {cartItems.length === 0 ? (
          <div className="card rounded-3xl py-20 text-center">
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              Your Cart is Empty 🛒
            </h2>

            <p className="mt-3 text-[var(--text-secondary)]">
              Start chatting with RazorAgent to discover amazing products.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              {/* Smart AI Offer */}
              <CartOffer offer={offer} />

              {/* Cart Items */}
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              {/* Coupon */}
              <CouponBox onApply={applyCoupon} />
            </div>

            {/* RIGHT SIDE */}
            <OrderSummary
              discount={discount}
              cartTotal={cartTotal}
            />
            <CheckoutButton amount={cartTotal * 100} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;