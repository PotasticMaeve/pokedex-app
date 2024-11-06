import { Pokemon } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import { Button, Dimensions, FlatList, StyleSheet, View } from "react-native";
import CardItem from "./CardItem";
import { useSearch } from "@/context/SearchContext";

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
  const flatListRef = useRef<FlatList>(null);
  const [activeLoadMore, setActiveLoadMore] = useState(false);
  const { search } = useSearch();

  const loadMorePokemons = () => {
    setActiveLoadMore(true);
    setLimit((prevLimit) => prevLimit + 10);
  };

  useEffect(() => {
    if (search) {
      setActiveLoadMore(false);
    }
  }, [search]);

  const handleContentSizeChange = (
    contentWidth: number,
    contentHeight: number
  ) => {
    if (flatListRef.current && activeLoadMore) {
      flatListRef.current.scrollToOffset({
        animated: false,
        offset: contentHeight,
      });
    }
  };

  return (
    <FlatList
      ref={flatListRef}
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
          {!search && pokemons?.length > 0 && (
            <Button
              title={isLoading ? "Loading..." : "Load More"}
              onPress={loadMorePokemons}
              disabled={isLoading}
            />
          )}
        </View>
      }
      onContentSizeChange={handleContentSizeChange}
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
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default CardList;
