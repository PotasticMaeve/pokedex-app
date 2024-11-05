import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabNavigatorParamList } from "./navigation/types";
import { PokemonData } from "./CardList";

interface CardItemProps {
  data: PokemonData;
}
 
const CardItem = (props: CardItemProps) => {
  const {
    data: { name, image },
  } = props;
  const navigation = useNavigation<NativeStackNavigationProp<TabNavigatorParamList>>();

  const handleCardPress = () => {
    navigation.navigate('detail');
  };

  return (
    <TouchableOpacity style={styles.cardItemWrap} onPress={handleCardPress}>
      <View style={styles.cardImageWrap}>
        <Image
          style={styles.cardImage}
          alt="pokemon-image"
          source={{
            uri: image,
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
    bottom: 10,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  cardText: {
    fontWeight: "500",
    textTransform: "capitalize",
  },
});

export default CardItem;
