import React from "react";
import { Dimensions, FlatList, StyleSheet, View } from "react-native";
import CardItem from "./CardItem";

const { width } = Dimensions.get("window");
const itemWidth = (width - 10) / 2;

export interface PokemonData {
  name: string
  image: string
}
interface CardListProps {
  data: PokemonData[]
}

const CardList = (props: CardListProps) => {
  const { data } = props
  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({ item, index }) => {
        return (
          <View style={styles.cardItemWrap}>
            <CardItem data={item} key={index} />
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
});

export default CardList;
