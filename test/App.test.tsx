import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "../src/App";

test("Should contain the correct title", () => {
  render(<App />);
  const title = screen.getByRole("heading");
  expect(title).toHaveTextContent("Todo App");
});
