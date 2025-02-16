import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import UserBlock from "../components/UserBlock";

const ProfileScreen = ({ navigation, route }) => {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <View style={styles.container}>
      <UserBlock user={user} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});

export default ProfileScreen;
