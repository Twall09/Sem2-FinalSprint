import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saveCart = localStorage.getItem("cart");
    return saveCart ? JSON.parse(saveCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // local storage allows the items to remain in the cart even if the page is refreshed.
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // allows the function of adding to cart work
  };

  const removeFromCart = (productId) => {
    setCart(
      (prevCart) => prevCart.filter((product) => product.id !== productId) // gives the remove option for each product added
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartCount: cart.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
