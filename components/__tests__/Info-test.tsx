import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Sprites } from "@/types";
import { useFavorites } from "@/context/FavoriteContext";
import Info from "../detail/Info";

jest.mock("@/context/FavoriteContext", () => ({
  useFavorites: jest.fn(),
}));

describe("Info Component", () => {
  const mockSprites: Sprites = {
    back_default: "http://example.com/test.png",
    back_female: "http://example.com/test.png",
    back_shiny: "http://example.com/test.png",
    back_shiny_female: "http://example.com/test.png",
    front_default: null,
    front_default_female: null,
    front_shiny: null,
    front_shiny_female: null,
  };

  const mockAddFavorite = jest.fn();
  const mockRemoveFavorite = jest.fn();
  const mockIsFavorite = jest.fn();

  beforeEach(() => {
    mockAddFavorite.mockClear();
    mockRemoveFavorite.mockClear();
    mockIsFavorite.mockClear();
  });

  it("calls addFavorite when heart icon is pressed and not a favorite", () => {
    mockIsFavorite.mockReturnValue(false);

    useFavorites.mockReturnValue({
      addFavorite: mockAddFavorite,
      removeFavorite: mockRemoveFavorite,
      isFavorite: mockIsFavorite,
      favoriteIds: [],
    });

    const { getByTestId } = render(
      <Info name="Bulbasaur" sprites={mockSprites} id={1} />
    );

    const heartIcon = getByTestId("heart-outline");
    fireEvent.press(heartIcon);
    expect(mockAddFavorite).toHaveBeenCalledWith(1);
  });

  it("calls removeFavorite when heart icon is pressed and already a favorite", () => {
    mockIsFavorite.mockReturnValue(true);

    useFavorites.mockReturnValue({
      addFavorite: mockAddFavorite,
      removeFavorite: mockRemoveFavorite,
      isFavorite: mockIsFavorite,
      favoriteIds: [],
    });

    const { getByTestId } = render(
      <Info name="Bulbasaur" sprites={mockSprites} id={1} />
    );

    const heartIcon = getByTestId("heart-full");
    fireEvent.press(heartIcon);
    expect(mockRemoveFavorite).toHaveBeenCalledWith(1);
  });
});
