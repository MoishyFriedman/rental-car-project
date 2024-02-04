import { render, screen } from "@testing-library/react";
import ButtonSubmit from "./ButtonSubmit";

const details = {
  text: "send",
};

describe("button", () => {
  test("check if button text is rendered", () => {
    render(<ButtonSubmit text={details.text} />);
    const buttonText = screen.getByText(details.text);
    expect(buttonText).toBeInTheDocument();
  });
  test("check if button has correct type attribute", () => {
    render(<ButtonSubmit text={details.text} />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toHaveAttribute("type", "submit");
  });
  test("check if button has correct border", () => {
    render(<ButtonSubmit text={details.text} />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toHaveStyle("border-radius: 10px");
  });
});
