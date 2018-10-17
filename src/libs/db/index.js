import firebase from "firebase";
import "firebase/firestore";
import { firestore } from "firebase-admin";
import { INTERESTED_USERS } from "./constants";

export const initDB = () => {
  const firebase = firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID
  });

  return firebase.firestore();
};

export const addInterestedUser = async ({ db, email }) => {
  try {
    const docRef = await db.collection(INTERESTED_USERS).add({
      email,
      timestamp: firestore.FieldValue.serverTimestamp()
    });
    return docRef;
  } catch (error) {
    console.error(error);
  }
};
