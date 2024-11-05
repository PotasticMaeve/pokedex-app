import DetailContent from "@/components/detail/DetailContent";
import Navbar from "@/components/Navbar";
import { TabNavigatorParamList } from "@/components/navigation/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function Detail() {
  const navigation =
    useNavigation<NativeStackNavigationProp<TabNavigatorParamList>>();

  const info = {
    name: "Data",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  };

  const sprite = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
  ];

  const ability = ["limber", "Imposter", "Imposter"];

  const data = {
    info,
    sprite,
    ability
  }

  return (
    <View style={styles.detailWrap}>
      <Navbar
        text="Pokemon Detail"
        leftIcon={<MaterialIcons name="arrow-back" size={28} color="black" />}
        onLeftIconPress={() => navigation.goBack()}
      />
      <View style={styles.detailBodyWrap}>
        <DetailContent data={data} />
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
});
