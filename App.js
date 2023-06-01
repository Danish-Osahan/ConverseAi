import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./screens/Welcome";
import Main from "./screens/Main";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    OrbitronMedium: require("./assets/fonts/Orbitron-Medium.ttf"),
    OrbitronBold: require("./assets/fonts/Orbitron-Bold.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={Welcome}
          name="Welcome"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          component={Main}
          name="Main"
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
