import { render } from "@testing-library/react-native";
import React from "react";
import SpriteList from "../detail/SpriteList";

jest.mock("../detail/SpriteBox", () => jest.fn(() => <></>));

describe("SpriteList Component", () => {
  const mockSprites = {
    back_default: "http://example.com/test.png",
    back_female: "http://example.com/test.png",
    back_shiny: "http://example.com/test.png",
    back_shiny_female: "http://example.com/test.png",
    front_default: "http://example.com/test.png",
    front_default_female: "http://example.com/test.png",
    front_shiny: "http://example.com/test.png",
    front_shiny_female: "http://example.com/test.png",
  };

  it("renders the sprite title correctly", () => {
    const { getByText } = render(<SpriteList data={mockSprites} />);
    expect(getByText("Sprite Gallery")).toBeDefined();
  });

  it("renders the FlatList with the correct number of columns", () => {
    const { getByTestId } = render(<SpriteList data={mockSprites} />);
    const flatList = getByTestId("sprite-gallery");
    expect(flatList).toBeTruthy();
    expect(flatList.props.data.length).toBe(8);
  });

  it("does not render any image for null or undefined values", () => {
    const spritesWithNulls = {
      ...mockSprites,
      back_female: null,
      front_default_female: null,
    };

    const { getByTestId } = render(<SpriteList data={spritesWithNulls} />);
    const flatList = getByTestId("sprite-gallery");
    expect(flatList.props.data.length).toBe(6);
  });
});
