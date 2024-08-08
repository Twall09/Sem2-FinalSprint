import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
      <h2>Welcome to our About Page!</h2>
      <br />
      <img
        src="/Images/pets.jpg"
        alt="Pet Photo"
        style={{
          width: "300px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      />
      <br />

      <h4>
        Whether you're looking for the perfect toy, nutritious food, or
        essential supplies for your furry friends, we offer a curated selection
        of top-quality products to keep your pets happy and healthy. Go to the
        Home Page and select "See Products" to view our selection.
      </h4>
      <br />
      {/* When you click the "Go Back" button it will go back to the home page. */}
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default About;
