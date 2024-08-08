import React from "react";
import { GiPlantsAndAnimals } from "react-icons/gi";

const Slogan = () => {
  const sloganStyle = {
    width: "100%",
    height: "50vh",
    backgroundImage: `url("/Images/banner.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "white",
  };

  const sloganContent = {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "20px",
    borderRadius: "8px",
  };
  return (
    <div style={sloganStyle}>
      <div style={sloganContent}>
        <h1>
          Your Pets
          <br />
          Happy Place
        </h1>
        <br />
        <GiPlantsAndAnimals size={30} />
        <br />
        <p>
          At Pet Paradise, we provide a wide range of products and
          <br /> services to cater to the unique needs of your beloved pets.
        </p>
      </div>
    </div>
  );
};

export default Slogan;
