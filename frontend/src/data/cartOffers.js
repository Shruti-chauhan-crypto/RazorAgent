export const getCartOffer = (cartItems, total) => {
  if (total < 3000) {
    return {
      title: "Free Shipping Offer 🚚",
      message: `Add ₹${3000 - total} more to unlock FREE shipping.`,
      type: "shipping",
    };
  }

  if (cartItems.length >= 3) {
    return {
      title: "Bundle Discount 🎉",
      message: "You've unlocked an extra 10% bundle discount!",
      type: "discount",
    };
  }

  return null;
};