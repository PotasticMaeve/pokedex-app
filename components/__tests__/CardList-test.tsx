import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useSearch } from "@/context/SearchContext";
import { Pokemon } from "@/types";
import CardList from "../CardList";
import { NavigationContainer } from "@react-navigation/native";

jest.mock("@/context/SearchContext", () => ({
  useSearch: jest.fn(),
}));

describe("CardList Component", () => {
  const mockPokemons: Pokemon[] = [
    { name: "bulbasaur", url: "https://pokeapi.co/pokemon/1" },
    { name: "ivysaur", url: "https://pokeapi.co/pokemon/2" },
    { name: "venusaur", url: "https://pokeapi.co/pokemon/3" },
  ];

  const mockPokemonDetailsQueries = [
    { data: { name: "bulbasaur", url: "https://pokeapi.co/pokemon/1" } },
    { data: { name: "ivysaur", url: "https://pokeapi.co/pokemon/2" } },
    { data: { name: "venusaur", url: "https://pokeapi.co/pokemon/3" } },
  ];

  const mockSetLimit = jest.fn();

  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <NavigationContainer>{children}</NavigationContainer>
  );

  it("renders a list of Pokémon cards", () => {
    (useSearch as jest.Mock).mockReturnValue({ search: "" });

    const { getByText } = render(
      <Wrapper>
        <CardList
          pokemons={mockPokemons}
          pokemonDetailsQueries={mockPokemonDetailsQueries}
          setLimit={mockSetLimit}
          isLoading={false}
          showLoadMore={true}
        />
      </Wrapper>
    );

    expect(getByText("bulbasaur")).toBeTruthy();
    expect(getByText("ivysaur")).toBeTruthy();
    expect(getByText("venusaur")).toBeTruthy();
  });

  it("shows the Load More button when showLoadMore is true and no search is active", () => {
    (useSearch as jest.Mock).mockReturnValue({ search: "" });

    const { getByText } = render(
      <Wrapper>
        <CardList
          pokemons={mockPokemons}
          pokemonDetailsQueries={mockPokemonDetailsQueries}
          setLimit={mockSetLimit}
          isLoading={false}
          showLoadMore={true}
        />
      </Wrapper>
    );
    expect(getByText("Load More")).toBeTruthy();
  });

  it("hides the Load More button when a search term is present", () => {
    (useSearch as jest.Mock).mockReturnValue({ search: "bulbasaur" });

    const { queryByText } = render(
      <Wrapper>
        <CardList
          pokemons={mockPokemons}
          pokemonDetailsQueries={mockPokemonDetailsQueries}
          setLimit={mockSetLimit}
          isLoading={false}
          showLoadMore={true}
        />
      </Wrapper>
    );
    expect(queryByText("Load More")).toBeNull();
  });

  it("calls loadMorePokemons when the Load More button is pressed", () => {
    (useSearch as jest.Mock).mockReturnValue({ search: "" });

    const { getByText } = render(
      <Wrapper>
        <CardList
          pokemons={mockPokemons}
          pokemonDetailsQueries={mockPokemonDetailsQueries}
          setLimit={mockSetLimit}
          isLoading={false}
          showLoadMore={true}
        />
      </Wrapper>
    );
    fireEvent.press(getByText("Load More"));
    expect(mockSetLimit).toHaveBeenCalledWith(expect.any(Function));
  });

  it("shows 'Loading...' text on the Load More button when isLoading is true", () => {
    (useSearch as jest.Mock).mockReturnValue({ search: "" });

    const { getByText } = render(
      <Wrapper>
        <CardList
          pokemons={mockPokemons}
          pokemonDetailsQueries={mockPokemonDetailsQueries}
          setLimit={mockSetLimit}
          isLoading={true}
          showLoadMore={true}
        />
      </Wrapper>
    );
    expect(getByText("Loading...")).toBeTruthy();
  });

  it("does not show Load More button when showLoadMore is false", () => {
    (useSearch as jest.Mock).mockReturnValue({ search: "" });

    const { queryByText } = render(
      <Wrapper>
        <CardList
          pokemons={mockPokemons}
          pokemonDetailsQueries={mockPokemonDetailsQueries}
          setLimit={mockSetLimit}
          isLoading={false}
          showLoadMore={false}
        />
      </Wrapper>
    );
    expect(queryByText("Load More")).toBeNull();
  });
});
