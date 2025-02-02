import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Button from "../components/Button";
import UserBlock from "../components/UserBlock";
import Card from "../components/Card";

const PostsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <UserBlock></UserBlock>
      <Card></Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    paddingHorizontal: 16,
    gap: 32,
  },
});

export default PostsScreen;
