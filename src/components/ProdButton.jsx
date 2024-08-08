import React from "react";
import { FaDolly } from "react-icons/fa6";

// "See Products" button which displays the products on a click. (Setup in home.jsx)

const ProdButton = ({ onClick }) => {
  return (
    <button className="prodbtn" onClick={onClick}>
      See Products {<FaDolly />}
    </button>
  );
};

export default ProdButton;
