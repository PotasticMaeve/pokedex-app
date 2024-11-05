import CardList from "@/components/CardList";
import Navbar from "@/components/Navbar";
import SearchInput from "@/components/SearchInput";
import { TabNavigatorParamList } from "@/components/navigation/types";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { StatusBar, StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<TabNavigatorParamList>>();

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
        <SearchInput />
        <CardList />
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
