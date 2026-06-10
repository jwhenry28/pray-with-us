import { View, Text, Image, StyleSheet } from "react-native";

import SaintCarousel from "../components/SaintCarousel";

const MainScreen = () => {
  return (
    <View style={styles.outerContainer}>
      <SaintCarousel />
      <Image
        source={require("../assets/cross.png")}
        style={styles.crossImage}
      />
      <Text style={styles.text}>Select a Saint</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: "column",
  },
  crossImage: {
    width: 120,
    height: 120,
    marginVertical: 64,
    alignSelf: "center",
    resizeMode: "contain",
  },
  text: {
    fontSize: 24,
    color: "black",
    fontFamily: "Inter_400Regular",
    alignSelf: "center",
  },
});

export default MainScreen;
