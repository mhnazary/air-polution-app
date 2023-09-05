import React from "react";
import { render } from "@testing-library/react";
import AirItems from "../components/AirItem";

// how i can write test for this component

describe("AirItems", () => {
  it("renders the component with the provided detailItem prop", () => {
    const detailItem = {
      name: "Pollutant Name",
      value: "100 μg/m3",
    };

    const { getByText } = render(<AirItems detailItem={detailItem} />);
    const nameElement = getByText(/Pollutant Name/i);
    const valueElement = getByText(/100 μg\/m3/i);
  });
});
