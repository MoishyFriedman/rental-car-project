import { render, screen } from "@testing-library/react";
import ActionBar from "./ActionBarCard";

const details = {
  price: 20,
  seats: 5,
};

describe("Action bar", () => {
  test("check if seats number is displayed", () => {
    render(<ActionBar hour_price={details.price} seats_number={details.seats} />);
    const seatsNumberText = screen.getByText(String(details.seats));
    expect(seatsNumberText).toBeInTheDocument();
  });
  test("check if hour price is displayed", () => {
    render(<ActionBar hour_price={details.price} seats_number={details.seats} />);
    const hourPriceText = screen.getByText(String(details.price));
    expect(hourPriceText).toBeInTheDocument();
  });
  test("check if ShekelIcon is rendered", () => {
    render(<ActionBar hour_price={details.price} seats_number={details.seats} />);
    const shekelIcon = screen.getByTestId("shekelIcon");
    expect(shekelIcon).toBeInTheDocument();
  });
  test("check if AirlineSeatReclineNormalIcon is rendered", () => {
    render(<ActionBar hour_price={details.price} seats_number={details.seats} />);
    const seatIcon = screen.getByTestId("AirlineSeatReclineNormalIcon");
    expect(seatIcon).toBeInTheDocument();
  });
  test("check if ModeOfTravelIcon is rendered", () => {
    render(<ActionBar hour_price={details.price} seats_number={details.seats} />);
    const travelIcon = screen.getByTestId("ModeOfTravelIcon");
    expect(travelIcon).toBeInTheDocument();
  });
});
