import React, { useContext, useState } from "react";
import CartContext from "../context/CartContext";
import Checkout from "./Checkout";

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [successMessage, setSuccessMessage] = useState("");
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  // will remove item from cart and provide a message confirming that
  const handleRemove = (productId, productName) => {
    removeFromCart(productId);
    setSuccessMessage(`${productName} has been removed from your cart!`);
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  // once you click the checkout button, it will display the checkout form.
  const handleCheckoutButton = () => {
    setShowCheckoutForm(true);
  };

  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {successMessage && <div className="remove-msg">{successMessage}</div>}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p> // if shopping cart has 0 items, it will display this message
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => handleRemove(item.id, item.name)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && !showCheckoutForm && (
        <button onClick={handleCheckoutButton}>Proceed to Checkout</button>
      )}
      {showCheckoutForm && <Checkout />}
    </div>
  );
};

export default ShoppingCart;
