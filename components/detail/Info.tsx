import { useFavorites } from "@/context/FavoriteContext";
import { Sprites } from "@/types";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type InfoProps = {
  name: string;
  sprites: Sprites;
  id: number;
};

const Info = (props: InfoProps) => {
  const { name, sprites, id } = props;
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handlePress = () => {
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };
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
          {isFavorite(id) ? (
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
