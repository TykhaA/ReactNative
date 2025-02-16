import {
  StyleSheet,
  TouchableOpacity,
  View,
  ImageBackground,
  Text,
} from "react-native";

import { colors } from "../../styles/global";
import IconComment from "../../icons/IconComment";
import IconLocal from "../../icons/IconLocal";

import { useNavigation } from "@react-navigation/native";

const Card = ({ data }) => {
  const { id, image, title, address, location } = data.posts[0] || {};
  const comments = data.comments || [];
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: image }}
          style={styles.image}
        ></ImageBackground>
      </View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.infoContainer}>
        <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("CommentsScreen", {
                postId: id,
                image: image,
              })
            }
          >
            <IconComment></IconComment>
          </TouchableOpacity>
          <Text style={styles.count}>{String(comments.length)}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MapScreen", {
                latitude: location.latitude || 37.78825,
                longitude: location.longitude || -122.4324,
              })
            }
          >
            <IconLocal />
          </TouchableOpacity>
          <Text style={styles.local}>{address}</Text>
        </View>
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 16, // Add marginBottom to separate cards
  },
  imageContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 240,
  },
  title: {
    fontFamily: "500",
    fontSize: 16,
    color: colors.black_primary,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  count: {
    color: colors.text_gray,
  },
  local: {
    color: colors.text_gray,
  },
});
