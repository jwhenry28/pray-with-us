import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import MainScreen from "./screens/MainScreen";
import SaintScreen from "./screens/SaintScreen";
import { RootStackParamList } from "./types";
import { colors } from "./constants/theme";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: colors.primary }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Saint" component={SaintScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
