import { StyleSheet, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../../styles/global";

import ProfileScreen from "../screens/ProfileScreen";
import StackNavigator from "../navigation/StackNavigator";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import LogoutButton from "../components/LogoutButton";

import IconProfile from "../../icons/IconProfile";
import IconPlus from "../../icons/IconPlus";
import IconGrid from "../../icons/IconGrid";
import IconArrowBack from "../../icons/IconArrowBack";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Post"
      screenOptions={({ navigation }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          display: "flex",
          paddingTop: 9,
        },
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerTintColor: colors.black_primary,
        headerTitleStyle: {
          fontSize: 18,
          fontWeight: "bold",
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => console.log("Log out")}
            style={{ marginLeft: 10 }}
          >
            <LogoutButton />
          </TouchableOpacity>
        ),
        headerRightContainerStyle: { paddingRight: 16 },
      })}
    >
      <Tab.Screen
        name="Post"
        component={StackNavigator}
        options={({ navigation }) => ({
          headerShown: false,
          title: "Публікації",
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.addButton, focused && styles.addButtonFocused]}
            >
              <IconGrid color={focused ? "white" : "black"} />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          title: "Створити публікацію",
          headerRight: () => null,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 10 }}
            >
              <IconArrowBack></IconArrowBack>
            </TouchableOpacity>
          ),
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.addButton, focused && styles.addButtonFocused]}
            >
              <IconPlus color={focused ? "white" : "#212121"} />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <View
              style={[styles.addButton, focused && styles.addButtonFocused]}
            >
              <IconProfile color={focused ? "white" : "black"} />
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonFocused: {
    backgroundColor: colors.orange,
  },
});

export default BottomTabNavigation;
