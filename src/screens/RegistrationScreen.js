import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import { useEffect, useState } from "react";

import IconPlus from "../../icons/IconPlus";
import { colors } from "../../styles/global";
import Input from "../components/Input";
import Button from "../components/Button";

const RegistrationScreen = ({ navigation, route }) => {
  const [formData, setFormData] = useState({
    login: "",
    email: "",
    password: "",
    isPasswordVisible: true,
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setFormData((prev) => ({
      ...prev,
      isPasswordVisible: !prev.isPasswordVisible,
    }));
  };

  const handleSubmit = () => {
    navigation.navigate("Home");
    console.log("Login:", formData.login);
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
  };
  const showButton = (
    <TouchableOpacity onPress={togglePasswordVisibility}>
      <Text style={[styles.baseTextInput, styles.passwordButtonText]}>
        Показати
      </Text>
    </TouchableOpacity>
  );
  const onRegistration = () => {
    navigation.navigate("Login");
  };

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={styles.formContainer}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={styles.wrapAvatar}>
          <View style={styles.addPhoto}>
            <IconPlus />
          </View>
        </View>
        <Text style={styles.title}>Реєстрація</Text>
        <View
          style={[
            styles.innerContainer,
            styles.inputContainer,
            styles.formWrap,
          ]}
        >
          <Input
            value={formData.login}
            autofocus={true}
            placeholder="Логін"
            onTextChange={(value) => handleChange("login", value)}
          />
          <Input
            value={formData.email}
            autofocus={true}
            placeholder="Адреса електронної пошти"
            onTextChange={(value) => handleChange("email", value)}
          />
          <Input
            value={formData.password}
            autofocus={true}
            placeholder="Пароль"
            rightButton={showButton}
            outerStyles={styles.passwordButton}
            onTextChange={(value) => handleChange("password", value)}
            secureTextEntry={formData.isPasswordVisible}
          />
        </View>
        <View style={[styles.innerContainer, styles.buttonContainer]}>
          <Button onPress={handleSubmit} style={styles.buttonTransparent}>
            <Text style={[styles.baseTextInput, styles.loginButtonText]}>
              Зареєстуватися
            </Text>
          </Button>
          <View style={styles.signUpContainer}>
            <TouchableWithoutFeedback onPress={formData.Login}>
              <Text style={[styles.signUpText, styles.passwordButtonText]}>
                {" "}
                Вже є акаунт?
                <TouchableWithoutFeedback onPress={onRegistration}>
                  <Text> Увійти</Text>
                </TouchableWithoutFeedback>
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  formContainer: {
    alignItems: "end",
    backgroundColor: colors.white,
    height: "67%",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    alignItems: "center",
    padding: 16,
  },
  innerContainer: {
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
    marginTop: 92,
  },
  wrapAvatar: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: colors.light_gray,
    position: "absolute",
    top: -60,
    zIndex: 2,
  },
  addPhoto: {
    width: 25,
    height: 25,
    position: "absolute",
    right: -12,
    bottom: 14,
    borderWidth: 1,
    borderColor: colors.orange,
    borderStyle: "solid",
    borderRadius: "100%",
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  formWrap: {
    gap: 16,
    marginTop: 32,
    width: "100%",
  },
  baseTextInput: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  passwordButtonText: {
    color: colors.blue,
  },
  passwordButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginButtonText: {
    color: colors.white,
    textAlign: "center",
  },
  loginButtonTextColor: {
    color: colors.blue,
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: 43,
    gap: 16,
  },
  buttonTransparent: {
    backgroundColor: "transparent",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
});
