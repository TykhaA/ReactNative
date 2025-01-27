import { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";

import { colors } from "../../styles/global";

const Input = ({
  value,
  onTextChange,
  placeholder,
  outerStyles,
  rightButton,
  autofocus = false,
  secureTextEntry = false,
}) => {
  return (
    <View style={[styles.input, outerStyles]}>
      <TextInput
        value={value}
        autoFocus={autofocus}
        onChangeText={onTextChange}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.baseTextInput}
        autoCapitalize="none"
      />

      {rightButton && <View style={styles.rightButton}>{rightButton}</View>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 16,
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border_gray,
    backgroundColor: colors.light_gray,
    width: "100%",
  },
  baseTextInput: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    color: colors.blue,
    flex: 1,
  },
  rightButton: {
    minWidth: 80,
  },
});
