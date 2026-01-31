import Carousel from "react-native-reanimated-carousel";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import useGetSaintCardsData from "../hooks/useGetSaintCardsData";

import SaintCard from "./SaintCard";

const { width: screenWidth } = Dimensions.get("window");

const SaintCarousel = () => {
  const { isLoading, data } = useGetSaintCardsData();
  return (
    <View style={styles.container}>
      <Carousel
        width={screenWidth}
        height={500}
        data={data}
        scrollAnimationDuration={500}
        renderItem={({ item }) => <SaintCard item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SaintCarousel;
