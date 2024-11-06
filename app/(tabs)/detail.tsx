import DetailContent from "@/components/detail/DetailContent";
import Navbar from "@/components/Navbar";
import { TabNavigatorParamList } from "@/components/navigation/types";
import { fetchPokemonDetails } from "@/hooks/usePokemonQuery";
import { PokemonDetails } from "@/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

type RouteParams = {
  id: number;
};

const { height } = Dimensions.get("window");

export default function Detail() {
  const navigation =
    useNavigation<NativeStackNavigationProp<TabNavigatorParamList>>();
  const { params } = useRoute();
  const { id } = params as RouteParams;
  const { data, isLoading, isError, error } = useQuery<PokemonDetails, Error>({
    queryKey: ["pokemonDetails", id],
    queryFn: () => fetchPokemonDetails(id),
    enabled: !!id,
  });

  return (
    <View style={styles.detailWrap}>
      <Navbar
        text="Pokemon Detail"
        leftIcon={<MaterialIcons name="arrow-back" testID="left-icon" size={28} color="black" />}
        onLeftIconPress={() => navigation.goBack()}
      />
      <View style={styles.detailBodyWrap}>
        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        ) : (
          data && <DetailContent data={data} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailWrap: {
    marginTop: 30,
  },
  detailBodyWrap: {
    backgroundColor: "white",
  },
  loading: {
    height: height,
    backgroundColor: "white",
    marginTop: "70%",
    alignItems: "center",
  },
});
