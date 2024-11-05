import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface AbilityProps {
  data: string[];
}

const Ability = (props: AbilityProps) => {
  const { data } = props;
  return (
    <View style={styles.abilityWrap}>
      <Text style={styles.abilityTitle}>Abilities</Text>
      <FlatList
        data={data}
        numColumns={1}
        renderItem={({ item, index }) => {
          return (
            <Text style={styles.abilityTextItem} key={index}>{item}</Text>
          );
        }}
        keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  abilityWrap: {
    paddingTop: 15,
    paddingHorizontal: 15,
    paddingBottom: 200
  },
  abilityTitle: {
    color: "#1D1D1D",
    fontWeight: "700",
    fontSize: 20,
  },
  abilityTextItem: {
    marginTop: 10
  }
});

export default Ability;
