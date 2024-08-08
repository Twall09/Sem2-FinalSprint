import React, { useState } from "react";

// The list once displayed. Gives the option to add to cart or see the details.

const ProductList = ({ products, addToCart }) => {
  const [successMessage, setSuccessMessage] = useState("");
  const [showDetails, setShowDetails] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setSuccessMessage(`${product.name} has been successfully added to cart!`);
    setTimeout(() => setSuccessMessage(""), 3000); // success message will show for 3 seconds
  };

  const toggleDetails = (productId) => {
    setShowDetails((prevId) => (prevId === productId ? null : productId)); // show different details for a specific product
  };

  // Will map the products from my mock API in db.json, display the information, price fixed to 2 decimal places
  return (
    <div className="gallery">
      {successMessage && <div className="success">{successMessage}</div>}
      <div className="prod-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <br />
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <br />
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
            <button onClick={() => toggleDetails(product.id)}>Details</button>
            {showDetails === product.id && (
              <div className="prod-details">
                <p>{product.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
