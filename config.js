import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDBTmBgScs0gRW9pdFQ-1loD1YJ7XfSQn8",
  authDomain: "reactnative-43d98.firebaseapp.com",
  databaseURL: "<https://reactnative-43d98.firebaseio.com>",
  projectId: "reactnative-43d98",
  storageBucket: "gs://reactnative-43d98.firebasestorage.app",
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
export const storage = getStorage(app);
