import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SpriteBox from "./SpriteBox";
import { Sprites } from "@/types";

const { width } = Dimensions.get("window");
const itemWidth = (width - 10) / 2;

type SpriteListProps = {
  data: Sprites;
};

const SpriteList = (props: SpriteListProps) => {
  const { data } = props;
  const images = {
    back_default: data.back_default,
    back_female: data.back_female,
    back_shiny: data.back_shiny,
    back_shiny_female: data.back_shiny_female,
    front_default: data.front_default,
    front_default_female: data.front_default_female,
    front_shiny: data.front_shiny,
    front_shiny_female: data.front_shiny_female,
  };
  const imagesWithoutNull =
    images && Object.values(images).filter((item) => typeof item === "string");

  return (
    <View style={{ paddingHorizontal: 5 }}>
      <Text style={styles.spriteTitle}>Sprite Gallery</Text>
      <FlatList
        testID="sprite-gallery"
        data={imagesWithoutNull}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.spriteItemWrap}>
              {item && <SpriteBox image={item} key={index} />}
            </View>
          );
        }}
        contentContainerStyle={styles.spriteWrap}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  spriteTitle: {
    marginHorizontal: 10,
    color: "#1D1D1D",
    fontWeight: "700",
    fontSize: 20,
  },
  spriteWrap: {
    paddingBottom: 150,
  },
  spriteItemWrap: {
    width: itemWidth,
    height: 130,
  },
});

export default SpriteList;
