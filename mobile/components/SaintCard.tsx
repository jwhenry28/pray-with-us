import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { SaintCardData, RootStackParamList } from "../types";

type SaintCardProps = {
  item: SaintCardData;
};

const SaintCard = ({ item }: SaintCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const selectSaintHandler = () => {
    navigation.navigate("Saint", { saintId: item.id });
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={selectSaintHandler}
        style={({ pressed }) => [
          styles.pressableBase,
          pressed && styles.pressablePressed,
          { backgroundColor: item.color },
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <Text style={styles.title}>{item.name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 10,
  },
  pressableBase: {
    flex: 1,
    borderRadius: 12,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 8,
  },
  pressablePressed: {
    opacity: 0.5,
  },
  imageContainer: {
    height: 400,
    width: "80%",
    borderColor: "black",
    borderWidth: 4,
    backgroundColor: "black",
  },
  image: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default SaintCard;
