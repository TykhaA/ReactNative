import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import Button from "../components/Button";
import IconCamera from "../../icons/IconCamera";
import IconTrash from "../../icons/IconTrash";

import { colors } from "../../styles/global";
import IconLocal from "../../icons/IconLocal";

const CreatePostsScreen = ({
  value,
  onTextChange,
  autofocus = false,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.imageContainer}>
            <TouchableWithoutFeedback>
              <View style={styles.imageBtn}>
                <IconCamera></IconCamera>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.baseText}>Редагувати фото</Text>
        </View>
        <View style={styles.containerForm}>
          <View style={styles.input}>
            <TextInput
              value={value}
              autoFocus={autofocus}
              onChangeText={onTextChange}
              placeholder={"Назва..."}
              secureTextEntry={secureTextEntry}
              style={styles.baseTextInput}
              autoCapitalize="none"
            />
          </View>
          <View style={[styles.input, styles.inputIcon]}>
            <IconLocal></IconLocal>
            <TextInput
              value={value}
              autoFocus={autofocus}
              onChangeText={onTextChange}
              placeholder={"Місцевість..."}
              secureTextEntry={secureTextEntry}
              style={styles.baseTextInput}
              autoCapitalize="none"
            />
          </View>
        </View>
        <Button buttonStyle={[styles.button, styles.buttonStyle]}>
          <Text style={styles.btnText}>Опублікувати</Text>
        </Button>
      </View>
      <View>
        <Button buttonStyle={[styles.button, styles.buttonStyleTrash]}>
          <IconTrash></IconTrash>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 32,
    gap: 32,
    paddingBottom: 34,
  },
  wrapper: {
    width: "100%",
    gap: 32,
  },
  imageContainer: {
    backgroundColor: colors.light_gray,
    borderColor: colors.border_gray,
    borderWidth: 1,
    width: "100%",
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 8,
  },
  imageBtn: {
    width: 60,
    height: 60,
    backgroundColor: colors.white,
    borderRadius: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  baseText: {
    color: colors.text_gray,
  },
  buttonStyle: {
    width: "100%",
  },
  btnText: {
    color: colors.white,
    fontSize: 16,
    textAlign: "center",
  },
  containerForm: {
    gap: 32,
    width: "100%",
  },
  input: {
    paddingLeft: 0,
    paddingVertical: 16,
    height: 50,
    borderBottomWidth: 2,
    borderColor: colors.border_gray,
  },
  baseTextInput: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
    color: colors.black_primary,
    flex: 1,
  },
  inputIcon: {
    position: "relative",
    paddingLeft: 0,
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },
  buttonStyleTrash: {
    backgroundColor: colors.light_gray,
  },
});

export default CreatePostsScreen;
