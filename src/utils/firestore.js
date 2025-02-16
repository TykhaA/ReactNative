import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db, storage } from "../../config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const addUser = async (userId, userData) => {
  try {
    await setDoc(doc(db, "users", userId), userData, { merge: true });
  } catch (error) {
    console.error("Error adding user:", error);
  }
};

export const addPost = async (userId, post) => {
  try {
    await setDoc(
      doc(db, "posts", userId),
      { userId, posts: [post] },
      { merge: true }
    );
  } catch (error) {
    console.error("Error adding post:", error);
  }
};

export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const getPosts = async (id) => {
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const updateUserInFirestore = async (uid, data) => {
  try {
    await setDoc(doc(db, "users", uid), data, { merge: true });
  } catch (error) {
    console.error("Error saving user data to Firestore:", error);
  }
};

export const uploadImage = async (userId, file, fileName) => {
  try {
    const imageRef = ref(storage, `postPhotos/${userId}/${fileName}`);
    const result = await uploadBytes(imageRef, file);

    const imageUrl = await getImageUrl(imageRef);
    return imageUrl;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

export const getImageUrl = async (imageRef) => {
  const url = await getDownloadURL(imageRef);
  return url;
};

export const fetchAllPosts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const posts = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const getDocument = async (docId, collectionName) => {
  const docRef = doc(db, collectionName, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const addCommentToDB = async (postId, comment) => {
  try {
    await updateDoc(doc(db, "posts", postId), {
      comments: arrayUnion(comment),
    });
  } catch (error) {
    console.error("Error adding comment:", error);
  }
};
