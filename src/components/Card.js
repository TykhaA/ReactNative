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

const Card = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require("../../assets/card1.png")}
          style={styles.image}
        ></ImageBackground>
      </View>
      <Text style={styles.title}>Ліс</Text>
      <View style={styles.infoContainer}>
        <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.replace("CommentsScreen")}
          >
            <IconComment></IconComment>
          </TouchableOpacity>
          <Text style={styles.count}>{String(0)}</Text>
        </View>
        <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.replace("MapScreen")}>
            <IconLocal></IconLocal>
          </TouchableOpacity>
          <Text style={styles.local}>Ivano-Frankivs'k Region, Ukraine</Text>
        </View>
      </View>
    </View>
  );
};
export default Card;

const styles = StyleSheet.create({
  container: {
    gap: 8,
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
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  count: {
    color: colors.text_gray,
  },
});
