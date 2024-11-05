import Feather from "@expo/vector-icons/Feather";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { PokemonDetails } from "@/types";

const Info = (props: PokemonDetails) => {
  const [activeFavorite, setActiveFavorite] = useState(false);
  const { name, sprites } = props;

  const handlePress = () => setActiveFavorite(!activeFavorite);
  return (
    <View>
      <View style={styles.detailImageWrap}>
        {sprites.front_default && (
          <Image
            style={styles.detailImage}
            alt="pokemon-image-detail"
            source={{
              uri: sprites.front_default,
            }}
          />
        )}
      </View>
      <View style={styles.infoWrap}>
        <Text style={styles.infoText}>{name}</Text>
        <TouchableOpacity onPress={handlePress}>
          {activeFavorite ? (
            <FontAwesome name="heart" size={24} color="black" />
          ) : (
            <Feather name="heart" size={24} color="black" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailImageWrap: {
    height: 250,
    padding: 20,
  },
  detailImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  infoWrap: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoText: {
    fontWeight: "700",
    fontSize: 36,
    textTransform: "capitalize",
  },
});
export default Info;
