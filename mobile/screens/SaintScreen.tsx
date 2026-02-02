import { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

import { RootStackParamList } from "../types";
import TypewriterText from "../components/TypewriterText";

type SaintScreenProps = {
  route: RouteProp<RootStackParamList, "Saint">;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SaintScreen = ({ route, navigation }: SaintScreenProps) => {
  const saint = route.params.saint;

  const [prayerIndex, setPrayerIndex] = useState(0);
  const [typeWriterDone, setTypewriterDone] = useState(false);

  const prayerSet = saint.prayer;
  const currentPrayer = prayerSet[prayerIndex];

  const nextPrayerHandler = () => {
    const nextIndex = prayerIndex + 1;
    if (nextIndex === prayerSet.length) {
      navigation.navigate("Main");
      return;
    }

    setPrayerIndex(nextIndex);
    setTypewriterDone(false);
  };

  const onPressHandler = () => {
    if (typeWriterDone) {
      nextPrayerHandler();
    }
  };

  const onTypewriterDone = () => {
    setTypewriterDone(true);
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.outerContainer,
        { backgroundColor: saint.color },
        pressed && styles.pressed,
      ]}
      onPress={onPressHandler}
      disabled={!typeWriterDone}
    >
      <TypewriterText
        text={currentPrayer}
        style={styles.text}
        onDoneTyping={onTypewriterDone}
      />
      <Text style={styles.title}>{saint.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderRadius: 16,
    margin: 8,
  },
  pressed: {
    opacity: 0.5,
  },
  title: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    marginTop: 2,
    marginBottom: 12,
    fontFamily: "monospace",
  },
  text: {
    flex: 19,
    fontSize: 36,
    textAlign: "center",
    textAlignVertical: "center",
    letterSpacing: 4,
    lineHeight: 72,
    fontFamily: "monospace",
  },
});

export default SaintScreen;
