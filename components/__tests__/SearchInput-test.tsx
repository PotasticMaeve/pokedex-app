import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { useSearch } from "@/context/SearchContext";
import SearchInput from "../SearchInput";

jest.mock("@/context/SearchContext", () => ({
  useSearch: jest.fn(),
}));

describe("SearchInput Component", () => {
  const setFilteredPokemonsMock = jest.fn();
  const setSearchMock = jest.fn();
  const mockPokemons = [
    { url: "https://pokeapi.co/pokemon/1", name: "bulbasaur" },
    { url: "https://pokeapi.co/pokemon/2", name: "ivysaur" },
    { url: "https://pokeapi.co/pokemon/3", name: "venusaur" },
  ];

  beforeEach(() => {
    setFilteredPokemonsMock.mockClear();
    setSearchMock.mockClear();
    useSearch.mockReturnValue({
      search: "",
      setSearch: setSearchMock,
    });
  });

  it("renders search input correctly", () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        pokemons={mockPokemons}
        setFilteredPokemons={setFilteredPokemonsMock}
      />
    );
    const input = getByPlaceholderText("Search by name...");
    expect(input).toBeTruthy();
  });

  it("calls setSearch when user types in the search input", async () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        pokemons={mockPokemons}
        setFilteredPokemons={setFilteredPokemonsMock}
      />
    );

    const input = getByPlaceholderText("Search by name...");
    fireEvent.changeText(input, "bulba");
    await waitFor(() => {
      expect(setSearchMock).toHaveBeenCalledWith("bulba");
    });
  });

  it("filters pokemons based on search value", async () => {
    useSearch.mockReturnValue({
      search: "bulba",
      setSearch: setSearchMock,
    });

    const { getByPlaceholderText } = render(
      <SearchInput
        pokemons={mockPokemons}
        setFilteredPokemons={setFilteredPokemonsMock}
      />
    );

    const input = getByPlaceholderText("Search by name...");
    fireEvent.changeText(input, "bulba");

    await waitFor(() => {
      expect(setFilteredPokemonsMock).toHaveBeenCalledWith([
        { url: "https://pokeapi.co/pokemon/1", name: "bulbasaur" },
      ]);
    });
  });

  it("calls setFilteredPokemons when search value is empty", async () => {
    useSearch.mockReturnValue({
      search: "",
      setSearch: setSearchMock,
    });

    const { getByPlaceholderText } = render(
      <SearchInput
        pokemons={mockPokemons}
        setFilteredPokemons={setFilteredPokemonsMock}
      />
    );

    const input = getByPlaceholderText("Search by name...");
    fireEvent.changeText(input, "");
    await waitFor(() => {
      expect(setFilteredPokemonsMock).toHaveBeenCalledWith(mockPokemons);
    });
  });

  it("does not filter pokemons when search is empty", async () => {
    useSearch.mockReturnValue({
      search: "",
      setSearch: setSearchMock,
    });

    const { getByPlaceholderText } = render(
      <SearchInput
        pokemons={mockPokemons}
        setFilteredPokemons={setFilteredPokemonsMock}
      />
    );

    const input = getByPlaceholderText("Search by name...");
    fireEvent.changeText(input, "   ");
    await waitFor(() => {
      expect(setFilteredPokemonsMock).toHaveBeenCalledWith(mockPokemons);
    });
  });

  it("debounces the search input", async () => {
    jest.useFakeTimers();

    const { getByPlaceholderText } = render(
      <SearchInput
        pokemons={mockPokemons}
        setFilteredPokemons={setFilteredPokemonsMock}
      />
    );

    const input = getByPlaceholderText("Search by name...");
    fireEvent.changeText(input, "bulba");
    jest.runAllTimers();
    expect(setSearchMock).toHaveBeenCalledTimes(1);
    expect(setSearchMock).toHaveBeenCalledWith("bulba");

    jest.useRealTimers();
  });
});
