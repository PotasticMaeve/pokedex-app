import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabNavigatorParamList } from "./navigation/types";
import { PokemonDetails } from "@/types";

type CardItemProps = {
  data: PokemonDetails;
};

const CardItem = (props: CardItemProps) => {
  const {
    data: {
      name,
      sprites: { front_default },
      id
    },
  } = props;
  const navigation =
    useNavigation<NativeStackNavigationProp<TabNavigatorParamList>>();

  const handleCardPress = () => {
    navigation.navigate("detail", { id });
  };

  return (
    <TouchableOpacity style={styles.cardItemWrap} onPress={handleCardPress}>
      <View style={styles.cardImageWrap}>
        <Image
          style={styles.cardImage}
          alt="pokemon-image"
          source={{
            uri: front_default,
          }}
        />
      </View>
      <View style={styles.cardTextWrap}>
        <Text style={styles.cardText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardImageWrap: {
    height: "75%",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  cardItemWrap: {
    borderWidth: 1,
    borderColor: "#A8A8A8",
    margin: 10,
    height: "90%",
    padding: 10,
    borderRadius: 12,
    position: "relative",
  },
  cardTextWrap: {
    position: "absolute",
    left: 10,
    right: 10,
    bottom: 10,
    display: "flex",
    alignItems: "center",
  },
  cardText: {
    fontWeight: "500",
    textTransform: "capitalize",
  },
});

export default CardItem;
