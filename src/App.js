import "./App.css";
import Header from "./components/Header";
import ShoppingCart from "./components/ShoppingCart";
import About from "./components/About";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import { CartProvider } from "./context/CartContext"; // cart provider allows the cart operations and start the checkout flow. Had to do some research on this

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/products" element={<ProductList />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
