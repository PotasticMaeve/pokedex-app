import React from "react";
import { Image, StyleSheet, View } from "react-native";

interface SpriteBoxProps {
  image: string
}

const SpriteBox = (props: SpriteBoxProps) => {
  const { image } = props
  return (
    <View style={styles.spriteBoxWrap}>
      <Image
        style={styles.spriteImage}
        alt="pokemon-image-sprite"
        source={{
          uri: image,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  spriteBoxWrap: {
    borderWidth: 1,
    borderColor: "#A8A8A8",
    margin: 10,
    height: "85%",
    padding: 10,
    position: "relative",
    borderRadius: 5,
  },
  spriteImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  }
});

export default SpriteBox;
