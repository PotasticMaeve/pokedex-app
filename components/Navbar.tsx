import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface NavbarProps {
  leftIcon?: JSX.Element;
  text?: string;
  rightIcon?: JSX.Element;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
}

const Navbar = (props: NavbarProps) => {
  const {
    leftIcon,
    text = "Pokedex",
    rightIcon,
    onLeftIconPress,
    onRightIconPress,
  } = props;

  return (
    <SafeAreaView style={styles.navbarWrap}>
      {leftIcon ? (
        <TouchableOpacity onPress={onLeftIconPress}>
          {leftIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.clearfix} />
      )}
      <Text style={styles.navbarText}>{text}</Text>
      {rightIcon ? (
        <TouchableOpacity onPress={onRightIconPress}>
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.clearfix} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  navbarWrap: {
    height: 60,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  navbarText: {
    fontWeight: "700",
    color: "#1D1D1D",
    fontSize: 20,
  },
  clearfix: {
    width: 24,
  },
});

export default Navbar;
