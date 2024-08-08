import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import About from "../components/About";

test("renders the About page correctly", () => {
  render(
    <Router>
      <About />
    </Router>
  );

  expect(screen.getByText(/Welcome to our About Page!/i)).toBeInTheDocument();

  const image = screen.getByAltText(/Pet Photo/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "/Images/pets.jpg");

  expect(
    screen.getByText(
      /Whether you're looking for the perfect toy, nutritious food, or essential supplies for your furry friends, we offer a curated selection of top-quality products to keep your pets happy and healthy. Go to the Home Page and select "See Products" to view our selection./i
    )
  ).toBeInTheDocument();

  const link = screen.getByText(/Go Back/i);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "/");
});
