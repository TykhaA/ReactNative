import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import AuthNavigator from "./src/navigation/AuthNavigator";
import BottomTabNavigation from "./src/navigation/BottomTabNavigation";

import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
  });
  const isLoggedIn = true;

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabNavigation /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Roboto-Regular",
  },
});
