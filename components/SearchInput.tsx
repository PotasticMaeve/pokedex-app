import React, { useCallback } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TextInput, View } from "react-native";
import debounce from "lodash.debounce";

const SearchInput = () => {
  const { control } = useForm();

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      console.log("Search value submitted:", value);
    }, 500),
    []
  );

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
