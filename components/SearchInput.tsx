import { Pokemon } from "@/types";
import debounce from "lodash.debounce";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";

type SearchInputProps = {
  pokemons: Pokemon[];
  setFilteredPokemons: (data: Pokemon[]) => void;
};

const SearchInput = (props: SearchInputProps) => {
  const { pokemons, setFilteredPokemons } = props;
  const { control } = useForm();
  const [search, setSearch] = useState("");

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearch(value);
    }, 300),
    []
  );

  useEffect(() => {
    if (search && pokemons?.length > 0) {
      const matchData = pokemons?.filter((pokemon) =>
        pokemon.name.toLowerCase()?.includes(search.toLowerCase())
      );
      setFilteredPokemons(matchData);
    } else {
      setFilteredPokemons(pokemons);
    }
  }, [search, pokemons]);

  return (
    <View style={styles.searchWrap}>
      <Controller
        name="search"
        control={control}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextInput
            spellCheck={false}
            autoCorrect={false}
            value={value}
            onChangeText={(text) => {
              debouncedSearch(text);
              onChange(text);
            }}
            onBlur={onBlur}
            autoCapitalize="none"
            placeholder="Search by name..."
            style={styles.searchInput}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrap: {
    padding: 15,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#BBBBBB",
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 19,
  },
});

export default SearchInput;
