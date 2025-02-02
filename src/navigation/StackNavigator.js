import { createStackNavigator } from "@react-navigation/stack";
import PostsScreen from "../screens/PostsScreen";
import MapScreen from "../screens/MapScreen";
import CommentsScreen from "../screens/CommentsScreen";
import IconArrowBack from "../../icons/IconArrowBack";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="PostsMain"
        component={PostsScreen}
        options={{ headerTitle: "Публікації" }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerTitle: "Maps",
          headerRight: () => null,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Post" }],
                })
              }
              style={{ marginLeft: 10 }}
            >
              <IconArrowBack></IconArrowBack>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          headerTitle: "Коментарі",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Post" }],
                })
              }
              style={{ marginLeft: 10 }}
            >
              <IconArrowBack></IconArrowBack>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
