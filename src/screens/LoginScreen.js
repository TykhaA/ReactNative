import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Pressable,
  Keyboard,
} from "react-native";

import { useEffect, useState } from "react";

import { colors } from "../../styles/global";
import Input from "../components/Input";
import Button from "../components/Button";

import { loginDB } from "../utils/auth";
import { useDispatch } from "react-redux";

const LoginScreen = ({ route, navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const dispatch = useDispatch();

  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  const showButton = (
    <TouchableOpacity onPress={showPassword}>
      <Text style={[styles.baseTextInput, styles.passwordButtonText]}>
        Показати
      </Text>
    </TouchableOpacity>
  );

  const onSignUp = () => {
    navigation.navigate("Registration");
  };
  const handleSubmit = async () => {
    try {
      await loginDB({ email, password }, dispatch);
    } catch (err) {
      Alert.alert("err");
      console.error("Login error:", err);
    }
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("../../assets/bg.png")}
        style={styles.background}
      >
        <KeyboardAvoidingView
          style={styles.formContainer}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Text style={styles.title}>Увійти</Text>
          <View
            style={[
              (styles.innerContainer, styles.inputContainer, styles.formWrap),
            ]}
          >
            <Input
              value={email}
              autofocus={true}
              placeholder="Адреса електронної пошти"
              onTextChange={handleEmailChange}
            />
            <Input
              value={password}
              autofocus={true}
              placeholder="Пароль"
              rightButton={showButton}
              outerStyles={styles.passwordButton}
              onTextChange={handlePasswordChange}
              secureTextEntry={isPasswordVisible}
            />
          </View>
          <View style={[styles.innerContainer, styles.buttonContainer]}>
            <Button onPress={handleSubmit}>
              <Text style={[styles.baseTextInput, styles.loginButtonText]}>
                Увійти
              </Text>
            </Button>
            <View style={styles.signUpContainer}>
              <Text style={[styles.baseText, styles.passwordButtonText]}>
                Немає акаунту?
                <TouchableWithoutFeedback onPress={onSignUp}>
                  <Text style={styles.signUpText}> Зареєструватися</Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </Pressable>
  );
};

export default LoginScreen;

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
    marginTop: 32,
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
    paddingHorizontal: 10,
  },
  passwordButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
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
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },
  signUpText: {
    textDecorationLine: "underline",
  },
});
