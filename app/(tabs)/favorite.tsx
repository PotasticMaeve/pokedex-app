import Navbar from "@/components/Navbar";
import { StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { TabNavigatorParamList } from "@/components/navigation/types";
import CardList from "@/components/CardList";

export default function Favorite() {
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
    <View style={styles.favoriteWrap}>
      <Navbar
        text="Favorite Pokemon"
        leftIcon={<MaterialIcons name="arrow-back" size={28} color="black" />}
        onLeftIconPress={() => navigation.goBack()}
      />
      <View style={styles.favoriteBodyWrap}>
        <CardList data={data} />
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
