import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import FormFilter from "./formFilter";

const details = {
  modelArray: ["jeep"],
  priceArray: [20],
};

describe("form filter", () => {
  const user = userEvent;
  test("check if button triggers onSubmit function", () => {
    render(<FormFilter modelArray={details.modelArray} priceArray={details.priceArray} />);
    const submitButton = screen.getByRole("button");
    user.click(submitButton);
  });
  test("check if option model exist", () => {
    render(<FormFilter modelArray={details.modelArray} priceArray={details.priceArray} />);
    const option = screen.getByDisplayValue(details.modelArray[0]);
    expect(option).toBeInTheDocument();
  });
  test("check if option model text exist", () => {
    render(<FormFilter modelArray={details.modelArray} priceArray={details.priceArray} />);
    const option = screen.getByText(details.modelArray[0]);
    expect(option).toBeInTheDocument();
  });
});
