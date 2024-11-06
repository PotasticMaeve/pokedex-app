import Navbar from "@/components/Navbar";
import { StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { TabNavigatorParamList } from "@/components/navigation/types";
import CardList from "@/components/CardList";
import { useFavorites } from "@/context/FavoriteContext";
import { getPokemonIdFromUrl, usePokemonQuery } from "@/hooks/usePokemonQuery";
import { useParams } from "@/context/ParamContext";

export default function Favorite() {
  const navigation =
    useNavigation<NativeStackNavigationProp<TabNavigatorParamList>>();
  const { favoriteIds } = useFavorites();
  const { limit } = useParams();
  const { pokemons, isLoading, isError, error, pokemonDetailsQueries } =
    usePokemonQuery(limit);
  const favoritePokemons = pokemons.filter((pokemon) =>
    favoriteIds.includes(getPokemonIdFromUrl(pokemon.url))
  );

  return (
    <View style={styles.favoriteWrap}>
      <Navbar
        text="Favorite Pokemon"
        leftIcon={<MaterialIcons name="arrow-back" size={28} color="black" />}
        onLeftIconPress={() => navigation.goBack()}
      />
      <View style={styles.favoriteBodyWrap}>
        <CardList
          pokemons={favoritePokemons}
          pokemonDetailsQueries={pokemonDetailsQueries}
          isLoading={isLoading}
          showLoadMore={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  favoriteWrap: {
    marginTop: 30,
  },
  favoriteBodyWrap: {
    paddingVertical: 10,
    backgroundColor: "white",
  },
});
