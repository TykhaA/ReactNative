import { StyleSheet, View, Image, Text } from "react-native";

import { colors } from "../../styles/global";

const UserBlock = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatarIcon}
        source={require("../../assets/user.png")}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Natali Romanova</Text>
        <Text style={styles.email}>email@example.com</Text>
      </View>
    </View>
  );
};
export default UserBlock;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
  },
  avatarIcon: {
    width: 60,
    height: 60,
  },
  name: {
    fontSize: 13,
    fontWeight: 700,
  },
  email: {
    fontSize: 11,
    color: "rgba(33, 33, 33, 0.7)",
  },
});
