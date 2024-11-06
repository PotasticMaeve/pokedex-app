import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CardItem from "./CardItem";
import { Pokemon } from "@/types";

const { width, height } = Dimensions.get("window");
const itemWidth = (width - 10) / 2;

type CardListProps = {
  pokemons: Pokemon[];
  pokemonDetailsQueries: any;
};

const CardList = (props: CardListProps) => {
  const { pokemons, pokemonDetailsQueries } = props;

  if (pokemons.length === 0) {
    return (
      <View style={styles.emptyStateWrap}>
        <Text style={styles.emptyStateText}>No Pokemon found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      renderItem={({ item, index }) => {
        const pokemonDetailsQuery = pokemonDetailsQueries.find(
          (query: any) => query?.data?.name === item.name
        );

        const pokemonDetails = pokemonDetailsQuery?.data;
        return (
          <View style={styles.cardItemWrap}>
            {!pokemonDetails ? (
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
    minHeight: height,
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
  emptyStateWrap: {
    height: height,
    backgroundColor: "white",
    marginTop: "75%",
    alignItems: "center",
  },
  emptyStateText: {
    fontSize: 15,
  },
});

export default CardList;
