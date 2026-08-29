import { useState } from "react";
import CartItem from "../components/CartItem";
import CouponBox from "../components/CouponBox";
import OrderSummary from "../components/OrderSummary";
import useCart from "../hooks/useCart";

const Cart = () => {
  const { cartItems } = useCart();
  const [discount, setDiscount] = useState(0);

  const applyCoupon = (code) => {
    if (code.toUpperCase() === "WELCOME10") {
      setDiscount(10);
      alert("Coupon Applied! 🎉 10% OFF");
    } else {
      setDiscount(0);
      alert("Invalid Coupon");
    }
  };

  return (
    <section className="section-padding bg-(--bg)">
      <div className="container-custom">
        <h1 className="mb-10 text-4xl font-bold">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="card rounded-3xl py-20 text-center">
            <h2 className="text-2xl font-semibold">
              Your Cart is Empty 🛒
            </h2>

            <p className="mt-3 text-(--text-secondary)">
              Start chatting with RazorAgent to discover products.
            </p>
          </div>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}

              <CouponBox onApply={applyCoupon} />
            </div>

            <OrderSummary discount={discount} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;