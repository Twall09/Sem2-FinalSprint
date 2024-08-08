import React from "react";
import { render, screen } from "@testing-library/react";
import Slogan from "../components/Slogan";
import { GiPlantsAndAnimals } from "react-icons/gi";

jest.mock("react-icons/gi", () => ({
  GiPlantsAndAnimals: () => <svg data-testid="icon" />,
}));

test("renders the Slogan component correctly", () => {
  render(<Slogan />);

  expect(screen.getByText(/Your Pets/i)).toBeInTheDocument();
  expect(screen.getByText(/Happy Place/i)).toBeInTheDocument();

  expect(screen.getByTestId("icon")).toBeInTheDocument();

  expect(
    screen.getByText(
      /At Pet Paradise, we provide a wide range of products and services to cater to the unique needs of your beloved pets./i
    )
  ).toBeInTheDocument();
});
