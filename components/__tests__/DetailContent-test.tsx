import { PokemonDetails } from "@/types";
import { render } from "@testing-library/react-native";
import React from "react";
import Ability from "../detail/Ability";
import DetailContent from "../detail/DetailContent";
import Info from "../detail/Info";
import SpriteList from "../detail/SpriteList";

jest.mock("../detail/Info", () => jest.fn(() => <></>));
jest.mock("../detail/SpriteList", () => jest.fn(() => <></>));
jest.mock("../detail/Ability", () => jest.fn(() => <></>));

describe("DetailContent Component", () => {
  const mockData: PokemonDetails = {
    name: "Bulbasaur",
    id: 1,
    abilities: [
      { ability: { name: "Overgrow" } },
      { ability: { name: "Chlorophyll" } },
    ],
    sprites: {
      back_default: "http://example.com/test.png",
      back_female: "http://example.com/test.png",
      back_shiny: "http://example.com/test.png",
      back_shiny_female: "http://example.com/test.png",
      front_default: null,
      front_default_female: null,
      front_shiny: null,
      front_shiny_female: null,
    },
  };

  it("renders correctly", () => {
    render(<DetailContent data={mockData} />);

    expect(Info).toHaveBeenCalled();
    expect(SpriteList).toHaveBeenCalled();
    expect(Ability).toHaveBeenCalled();
  });

  it("renders the Info section correctly", () => {
    render(<DetailContent data={mockData} />);

    expect(Info).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Bulbasaur",
        id: 1,
      }),
      {}
    );
  });

  it("renders the SpriteList section correctly", () => {
    render(<DetailContent data={mockData} />);

    expect(SpriteList).toHaveBeenCalledWith(
      expect.objectContaining({
        data: mockData.sprites,
      }),
      {}
    );
  });

  it("renders the Ability section correctly", () => {
    render(<DetailContent data={mockData} />);

    expect(Ability).toHaveBeenCalledWith(
      expect.objectContaining({
        data: mockData.abilities,
      }),
      {}
    );
  });
});
