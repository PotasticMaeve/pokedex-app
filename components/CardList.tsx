import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import CardItem from "./CardItem";
import { Pokemon } from "@/types";

const { width } = Dimensions.get("window");
const itemWidth = (width - 10) / 2;

type CardListProps = {
  pokemons: Pokemon[];
  pokemonDetailsQueries: any;
};

const CardList = (props: CardListProps) => {
  const { pokemons, pokemonDetailsQueries } = props;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      renderItem={({ item, index }) => {
        const pokemonDetailsQuery = pokemonDetailsQueries.find(
          (query: any) => query?.data?.name === item.name
        );

        const pokemonDetails = pokemonDetailsQuery?.data;
        const isFetching = pokemonDetailsQuery?.isLoading;

        return (
          <View style={styles.cardItemWrap}>
            {isFetching ? (
              <View style={styles.loading}>
                <ActivityIndicator size="small" color="blue" />
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
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default CardList;
