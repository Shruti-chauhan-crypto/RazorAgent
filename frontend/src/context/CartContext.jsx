import { createContext, useMemo, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add product
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        toast.success(`Increased quantity of ${product.name}`);

        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      toast.success(`${product.name} added to cart 🛒`);

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.flatMap((item) => {
        if (item.id !== id) return item;

        if (item.quantity === 1) {
          toast.success(`${item.name} removed from cart`);
          return [];
        }

        return { ...item, quantity: item.quantity - 1 };
      })
    );
  };

  // Remove item
  const removeFromCart = (id) => {
    const item = cartItems.find((item) => item.id === id);

    setCartItems((prev) => prev.filter((item) => item.id !== id));

    if (item) {
      toast.success(`${item.name} removed from cart`);
    }
  };

  // Clear Cart (NEW)
  const clearCart = () => {
    setCartItems([]);
    toast.success("Cart cleared successfully 🧹");
  };

  // Total Price
  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,     
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;