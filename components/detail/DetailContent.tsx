import { PokemonDetails } from "@/types";
import React from "react";
import { FlatList } from "react-native";
import Ability from "./Ability";
import Info from "./Info";
import SpriteList from "./SpriteList";

type DetailContentProps = {
  data: PokemonDetails;
};

const DetailContent = (props: DetailContentProps) => {
  const { data } = props;
  const sections = ["info", "sprite", "ability"];

  const renderContent = ({ item }: { item: string }) => {
    switch (item) {
      case "info":
        return <Info {...data} />;
      case "sprite":
        return <SpriteList data={data.sprites} />;
      case "ability":
        return <Ability data={data.abilities} />;
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

export default DetailContent;
