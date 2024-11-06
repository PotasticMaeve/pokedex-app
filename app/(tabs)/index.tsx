import CardList from "@/components/CardList";
import Navbar from "@/components/Navbar";
import SearchInput from "@/components/SearchInput";
import { TabNavigatorParamList } from "@/components/navigation/types";
import { usePokemonQuery } from "@/hooks/usePokemonQuery";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<TabNavigatorParamList>>();
  const { pokemons, isLoading, isError, error, pokemonDetailsQueries } =
    usePokemonQuery();
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  useEffect(() => {
    if (!isLoading && pokemons) {
      setFilteredPokemons(pokemons);
    }
  }, [isLoading, pokemons]);

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <View style={styles.navbarWrap}>
        <Navbar
          text="Pokedex"
          rightIcon={<Feather name="heart" size={24} color="black" />}
          onRightIconPress={() => navigation.navigate("favorite")}
        />
      </View>
      <View style={styles.bodyWrap}>
        <SearchInput pokemons={pokemons} setFilteredPokemons={setFilteredPokemons} />
        <CardList
          pokemons={filteredPokemons}
          pokemonDetailsQueries={pokemonDetailsQueries}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbarWrap: {
    marginTop: 30,
  },
  bodyWrap: {
    backgroundColor: "white",
  },
});
