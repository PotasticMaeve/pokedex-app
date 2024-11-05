import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Ability from "./Ability";
import Info from "./Info";
import SpriteList from "./SpriteList";
import { PokemonData } from "../CardList";

interface DetailContentProps {
  data: {
    info: PokemonData;
    sprite: string[];
    ability: string[];
  };
}

const DetailContent = (props: DetailContentProps) => {
  const { data } = props;
  const sections = ["info", "sprite", "ability"];

  const renderContent = ({ item, index }: { item: string; index: number }) => {
    switch (index) {
      case 0:
        return <Info {...data.info} />;
      case 1:
        return <SpriteList data={data.sprite} />;
      case 2:
        return <Ability data={data.ability} />;
      default:
        return null;
    }
  };

  return (
    <FlatList
      data={sections}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderContent}
    />
  );
};
const styles = StyleSheet.create({});

export default DetailContent;
