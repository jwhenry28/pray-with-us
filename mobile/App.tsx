import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, Button } from "react-native";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// Define your route params
type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

// Create the typed stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Type the screen props
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function DrawerScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Main" component={DrawerScreens} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
