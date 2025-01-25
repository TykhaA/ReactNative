import { StyleSheet, TouchableOpacity } from "react-native";

import { colors } from "../../styles/global";

const Button = ({ children, onPress, buttonStyle, buttonBg = true }) => {
  return (
    <TouchableOpacity
      style={[
        style.button,
        buttonStyle,
        buttonBg ? style.buttonColor : style.buttonTransparent,
      ]}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};
export default Button;

const style = StyleSheet.create({
  button: {
    borderRadius: 100,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  buttonTransparent: {
    backgroundColor: "transparent",
  },
  buttonColor: {
    backgroundColor: colors.orange,
  },
});
