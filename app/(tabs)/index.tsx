import Navbar from "@/components/Navbar";
import CardList from "@/components/CardList";
import SearchInput from "@/components/SearchInput";
import Feather from "@expo/vector-icons/Feather";
import { StatusBar, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { TabNavigatorParamList } from "@/components/navigation/types";

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<TabNavigatorParamList>>();
  const data = [
    {
      name: "data 1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
      name: "data 2",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
      name: "data 3",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
      name: "data 4",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
    {
      name: "data 5",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    },
  ];

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
        <CardList data={data} />
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
