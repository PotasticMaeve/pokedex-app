import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import CardItem from "./CardItem";
import { usePokemonQuery } from "@/hooks/usePokemonQuery";

const { width } = Dimensions.get("window");
const itemWidth = (width - 10) / 2;

const CardList = () => {
  const { pokemons, isLoading, isError, error, pokemonDetailsQueries } =
    usePokemonQuery();
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      renderItem={({ item, index }) => {
        const pokemonDetails = pokemonDetailsQueries[index]?.data;
        const isFetching = pokemonDetailsQueries[index]?.isLoading;

        return (
          <View style={styles.cardItemWrap}>
            {isFetching ? (
              <View style={styles.loading}>
                <ActivityIndicator  size="small" color="blue" />
              </View>
            ) : (
              pokemonDetails && <CardItem data={pokemonDetails} key={index} />
            )}
          </View>
        );
      }}
      contentContainerStyle={styles.cardListWrap}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};
const styles = StyleSheet.create({
  cardListWrap: {
    paddingHorizontal: 5,
    paddingBottom: 400,
  },
  cardItemWrap: {
    width: itemWidth,
    height: 200,
  },
  loading: {
    display: "flex",
    justifyContent: 'center',
    alignItems: "center",
    height: '100%'
  }
});

export default CardList;
