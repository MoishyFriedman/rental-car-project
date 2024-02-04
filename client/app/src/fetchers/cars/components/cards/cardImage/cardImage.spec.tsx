import { render, screen } from "@testing-library/react";
import CardImage from "./CardImage";

const details = {
  img: "https://img.freepik.com/free-vector/gray-sedan-car-isolated-white-vector_53876-67104.jpg?w=826&t=st=1703764829~exp=1703765429~hmac=8c4fde2a21a964bd0809814e9dd2669f2fe0262c8fb4bae5e91df0c29c32e617",
  alt: "car",
};

describe("Card img", () => {
  test("check if img element exists", () => {
    render(<CardImage img={details.img} alt={details.alt} />);
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeDefined();
    expect(imgElement).toHaveAttribute("alt", details.alt);
    expect(imgElement).toHaveAttribute("src", details.img);
    expect(imgElement).toHaveStyle("width: 50%");
  });
});
