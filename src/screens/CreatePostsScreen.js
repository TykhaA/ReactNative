import React, { useEffect, useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Button from "../components/Button";
import IconCamera from "../../icons/IconCamera";
import IconTrash from "../../icons/IconTrash";

import { colors } from "../../styles/global";
import IconLocal from "../../icons/IconLocal";

import * as Location from "expo-location";
import "react-native-get-random-values";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GOOGLE_PLACES_API_KEY = "AIzaSyAlh2dhlnJoA0ge-G-3to3p_ww8nYyKT3s";

const CreatePostsScreen = ({
  route,
  navigation,
  autofocus = false,
  secureTextEntry = false,
}) => {
  const params = route?.params;
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [locationCoords, setLocationCoords] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const googlePlacesRef = useRef();

  useEffect(() => {
    setIsButtonDisabled(!(selectedImage && title.trim() && address.trim()));
  }, [selectedImage, title, address]);

  const navigateToCameraScreen = () => {
    navigation.navigate("CameraScreen");
  };

  const navigateToMapScreen = () => {
    navigation.navigate("MapScreen", locationCoords);
  };

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;

      setSelectedImage(uri);
    }
  };

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    setLocationCoords({ latitude, longitude });
  };

  useEffect(() => {
    getLocation();
    if (!params?.photo) return;

    setSelectedImage(params.photo);
  }, [params]);

  const createPost = () => {
    if (!isButtonDisabled) {
      onClearData();
      navigation.navigate("Post");
    }
  };

  const selectPlace = (data, details) => {
    setLocationCoords({
      latitude: details.geometry.location.lat,
      longitude: details.geometry.location.lng,
    });
    setAddress(data.description);
  };

  const onClearData = () => {
    setSelectedImage("");
    setTitle("");
    setAddress("");
    googlePlacesRef.current?.clear();
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View>
          <View style={styles.imageContainer}>
            {selectedImage && (
              <Image source={{ uri: selectedImage }} style={styles.image} />
            )}
            <TouchableOpacity
              style={styles.cameraIconWrapper}
              onPress={navigateToCameraScreen}
              hitSlop={20}
            >
              <View style={styles.imageBtn}>
                <IconCamera></IconCamera>
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={pickImage}>
            <Text style={styles.baseText}>
              {selectedImage ? "Редагувати фото" : "Завантажте фото"}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerForm}>
          <View style={styles.input}>
            <TextInput
              value={title}
              autoFocus={autofocus}
              onChangeText={setTitle}
              placeholder={"Назва..."}
              secureTextEntry={secureTextEntry}
              style={styles.baseTextInput}
              autoCapitalize="none"
            />
          </View>
          <View style={[styles.inputIcon, styles.placeContainer]}>
            <TouchableOpacity onPress={navigateToMapScreen} hitSlop={20}>
              <IconLocal style={styles.IconLocal}></IconLocal>
            </TouchableOpacity>
            <GooglePlacesAutocomplete
              ref={googlePlacesRef}
              placeholder="Місцевість..."
              onPress={(data, details = null) => {
                selectPlace(data, details);
              }}
              query={{
                key: GOOGLE_PLACES_API_KEY,
              }}
              fetchDetails={true}
              debounce={200}
              minLength={2}
              enablePoweredByContainer={false}
              listViewDisplayed="auto"
              styles={{
                textInput: styles.input,
                textInputContainer: {
                  position: "absolute",
                  zIndex: 1,
                },
                listView: {
                  zIndex: 3,
                  position: "absolute",
                  top: 50,
                  left: -40,
                  right: 0,
                },
              }}
            />
          </View>
        </View>
        <Button
          buttonStyle={[
            styles.button,
            styles.buttonStyle,
            isButtonDisabled && styles.disabledButton,
          ]}
          onPress={createPost}
          disabled={isButtonDisabled}
        >
          <Text
            style={[styles.btnText, isButtonDisabled && styles.disabledButton]}
          >
            Опублікувати
          </Text>
        </Button>
      </View>
      <View>
        <Button
          buttonStyle={[styles.button, styles.buttonStyleTrash]}
          onPress={onClearData}
        >
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
  placeContainer: {
    flexDirection: "row",
    alignItems: "top",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  cameraIconWrapper: {
    position: "absolute",
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    backgroundColor: colors.light_gray,
    color: colors.text_gray,
  },
  IconLocal: {
    position: "relative",
    top: 15,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 34,
  },
});

export default CreatePostsScreen;
