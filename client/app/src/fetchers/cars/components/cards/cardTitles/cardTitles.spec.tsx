import { render, screen } from "@testing-library/react";
import Titles from "./CardTitles";

const details = {
  model: "jeep",
  description: "nice car and good to hard way",
};

describe("Card titles", () => {
  test("check if model text is rendered", () => {
    render(<Titles model={details.model} description={details.description} />);
    const modelText = screen.getByText(details.model);
    expect(modelText).toBeInTheDocument();
  });

  test("check if description text is rendered", () => {
    render(<Titles model={details.model} description={details.description} />);
    const descriptionText = screen.getByText(details.description);
    expect(descriptionText).toBeInTheDocument();
  });
  test("check if model text has correct font size", () => {
    render(<Titles model={details.model} description={details.description} />);
    const modelText = screen.getByText(details.model);
    expect(modelText).toHaveStyle("font-size: xx-large");
  });

  test("check if description text has correct font", () => {
    render(<Titles model={details.model} description={details.description} />);
    const descriptionText = screen.getByText(details.description);
    expect(descriptionText).toHaveStyle("font-family: math");
  });
});
