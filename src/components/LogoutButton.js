import { StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../../styles/global";
import IconLogout from "../../icons/IconLogout";

const LogoutButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={[style.button]} onPress={onPress}>
      <IconLogout></IconLogout>
    </TouchableOpacity>
  );
};
export default LogoutButton;

const style = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
  },
});
