import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SearchInput = () => {
  const [searchVal, setSearchVal] = useState("");

  const handleSearch = (text: string) => {
    setSearchVal(text);
  };
  return (
    <View style={styles.searchWrap}>
      <TextInput
        value={searchVal}
        spellCheck={false}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search by name..."
        style={styles.searchInput}
        onChangeText={handleSearch}
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

