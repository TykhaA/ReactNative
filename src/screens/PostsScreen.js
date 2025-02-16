import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Button from "../components/Button";
import UserBlock from "../components/UserBlock";
import Card from "../components/Card";
import { useSelector } from "react-redux";

import { fetchAllPosts } from "../utils/firestore";

const PostsScreen = ({ navigation, route }) => {
  const user = useSelector((state) => state.user.userInfo);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const result = await fetchAllPosts();
        setPosts(result);
      } catch (error) {
        console.log(error);
      }
    };

    getAllPosts();
  }, []);

  const renderItem = ({ item }) => <Card data={item} />;

  return (
    <View style={styles.container}>
      <UserBlock user={user}></UserBlock>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => item.id?.toString() || index.toString()}
        renderItem={renderItem}
      />
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
