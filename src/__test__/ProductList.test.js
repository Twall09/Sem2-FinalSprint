import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductList from "../components/ProductList";

const listProducts = [
  // Just examples
  {
    id: 1,
    name: "Pet Bed",
    price: 29.99,
    image: "/Images/petbed.jpeg",
    description: "Comfortable pet bed",
  },
  {
    id: 2,
    name: "Dog Food",
    price: 19.99,
    image: "/Images/dogfood.jpeg",
    description: "Nutritious dog food",
  },
];

test("renders products and handles add to cart", async () => {
  const listAddToCart = jest.fn();
  render(<ProductList products={listProducts} addToCart={listAddToCart} />);

  expect(screen.getByText("Pet Bed")).toBeInTheDocument();
  expect(screen.getByText("Dog Food")).toBeInTheDocument();

  await userEvent.click(screen.getAllByText("Add to Cart")[0]);
  expect(listAddToCart).toHaveBeenCalledWith(listProducts[0]);
});
