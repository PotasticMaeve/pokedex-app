import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SpriteBox from "./SpriteBox";

const { width } = Dimensions.get("window");
const itemWidth = (width - 10) / 2;

interface SpriteListProps {
  data: string[];
}

const SpriteList = (props: SpriteListProps) => {
  const { data } = props;
  return (
    <View style={{ paddingHorizontal: 5  }}>
      <Text style={styles.spriteTitle}>Sprite Gallery</Text>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.spriteItemWrap}>
              <SpriteBox image={item} key={index} />
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
