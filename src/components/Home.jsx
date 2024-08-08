import React, { useContext, useState } from "react";
import Slogan from "./Slogan";
import ProductList from "./ProductList";
import ProdButton from "./ProdButton";
import CartContext from "../context/CartContext";

// This component sort of acts as the main page. Displays the main content right below the header and also displays the products once you click the button

const Home = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showProductList, setShowProductList] = useState(false);

  const { addToCart } = useContext(CartContext);

  const handleButtonClick = () => {
    setIsLoading(true);
    fetch("http://localhost:3001/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        setShowProductList(true);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      });
  };

  return (
    <div className="slogan-container">
      <Slogan />
      <ProdButton onClick={handleButtonClick}>See Products</ProdButton>
      {isLoading && <p>Loading...</p>}
      {showProductList && (
        <ProductList products={products} addToCart={addToCart} />
      )}
    </div>
  );
};

export default Home;
