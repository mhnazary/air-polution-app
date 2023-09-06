import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import CountryItem from "../components/CountryItem";

// Create a mock Redux store
test("renders component with correct data", () => {
  const component = renderer.create(
    <MemoryRouter>
      <CountryItem
        data={{ latitude: 46.9479, longitude: 7.4474 }}
        image="https://raw.githubusercontent.com/Ginohmk/worldMaps/main/maps/ch/vector.svg"
        country="Switzerland"
        capital="Bern"
      />
    </MemoryRouter>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
