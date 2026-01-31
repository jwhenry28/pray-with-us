import { View, Text } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

import { SaintData, RootStackParamList } from "../types";
import useGetSaintData from "../hooks/useGetSaintData";

type SaintScreenProps = {
  route: RouteProp<RootStackParamList, "Saint">;
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const SaintScreen = ({ route, navigation }: SaintScreenProps) => {
  const saintId = route.params.saintId;
  const { data } = useGetSaintData({ id: saintId });

  return (
    <View>
      <Text>{data.id}</Text>
      {data.prayer.map((p) => (
        <Text key={p}>{p}</Text>
      ))}
    </View>
  );
};

export default SaintScreen;
