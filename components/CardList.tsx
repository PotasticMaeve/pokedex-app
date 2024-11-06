import { Pokemon } from "@/types";
import React from "react";
import {
  ActivityIndicator,
  Button,
  Dimensions,
  FlatList,
  StyleSheet,
  View,
} from "react-native";
import CardItem from "./CardItem";

const { width, height } = Dimensions.get("window");
const itemWidth = (width - 10) / 2;

type CardListProps = {
  pokemons: Pokemon[];
  pokemonDetailsQueries: any;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
  isLoading: boolean;
};

const CardList = (props: CardListProps) => {
  const { pokemons, pokemonDetailsQueries, setLimit, isLoading } = props;

  const loadMorePokemons = () => {
    setLimit((prevLimit) => prevLimit + 10);
  };

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="blue" />
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
        if (pokemonDetails) {
          return (
            <View style={styles.cardItemWrap}>
              <CardItem data={pokemonDetails} key={index} />
            </View>
          );
        } else return <></>;
      }}
      contentContainerStyle={styles.cardListWrap}
      keyExtractor={(_, index) => index.toString()}
      ListFooterComponent={
        <View style={styles.buttonContainer}>
          <Button title="Load More" onPress={loadMorePokemons} />
        </View>
      }
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
    marginTop: "70%",
    alignItems: "center",
    height: height,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default CardList;
