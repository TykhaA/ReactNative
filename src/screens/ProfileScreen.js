import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ProfileScreen;
