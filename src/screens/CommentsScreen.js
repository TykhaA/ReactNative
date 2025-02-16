import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useSelector } from "react-redux";
import { addCommentToDB, getDocument } from "../utils/firestore";
import { nanoid } from "nanoid";
import { colors } from "../../styles/global";
import IconArrowTop from "../../icons/IconArrowTop";

const CommentsScreen = ({ route }) => {
  const user = useSelector((state) => state.user.userInfo);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { postId, image } = route?.params;

  useEffect(() => {
    if (postId) {
      getComments();
    }
  }, [postId]);

  const getComments = async () => {
    try {
      const result = await getDocument(postId, "posts");
      setComments(result?.comments || []);
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = async () => {
    if (!comment.trim()) return;
    const commentObj = {
      id: nanoid(),
      comment,
      userId: user?.uid,
      date: new Date().valueOf(),
    };

    try {
      await addCommentToDB(postId, commentObj);
      setComments([...comments, commentObj]);
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentContainer}>
      <Image
        style={styles.avatarIcon}
        source={require("../../assets/user.png")}
      />
      <View style={styles.commentBox}>
        <Text style={styles.commentText}>{item.comment}</Text>
        <Text style={styles.commentDate}>
          {new Date(item.date).toLocaleString()}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: image }}
        style={styles.image}
      ></ImageBackground>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderComment}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={comment}
          onChangeText={setComment}
          placeholder="Коментувати..."
          style={styles.input}
        />
        <TouchableOpacity onPress={addComment} style={styles.sendBlock}>
          <IconArrowTop style={styles.sendIcon}></IconArrowTop>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 10,
    marginBottom: 26,
    overflow: "hidden",
  },
  avatarIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentBox: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 8,
    flex: 1,
  },
  commentText: {
    fontSize: 14,
    color: "#333",
  },
  commentDate: {
    fontSize: 10,
    color: "#999",
    marginTop: 4,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "top",
    justifyContent: "top",
    borderTopColor: "#ddd",
    paddingTop: 8,
    paddingBottom: 8,
    position: "relative",
  },
  input: {
    flex: 1,
    height: 54,
    borderWidth: 1,
    fontSize: 16,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingRight: 45,
    backgroundColor: colors.light_gray,
  },
  sendBlock: {
    position: "absolute",
    right: 14,
    top: 18,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 34,
    height: 34,
    backgroundColor: colors.orange,
    borderRadius: 20,
  },
  sendIcon: {},
});

export default CommentsScreen;
