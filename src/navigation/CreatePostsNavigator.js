import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import MapScreen from "../screens/MapScreen";
import CameraScreen from "../screens/CameraScreen";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import IconArrowBack from "../../icons/IconArrowBack";
const Stack = createStackNavigator();

const CreatePostsNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="CreatePosts"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <IconArrowBack></IconArrowBack>
            </TouchableOpacity>
          ),
        }}
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
                  routes: [{ name: "CreatePosts" }],
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
        name="CameraScreen"
        component={CameraScreen}
        options={{
          headerTitle: "Камера",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: "CreatePosts" }],
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

export default CreatePostsNavigator;
