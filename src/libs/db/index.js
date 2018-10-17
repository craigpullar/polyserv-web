import firebase from "firebase";
import "firebase/firestore";
import React from "react";
import { INTERESTED_USERS } from "./constants";
import withDbImport from "./with-db";

export const withDb = withDbImport;
export const initDatabase = () => {
  console.log(process.env);
  const firebaseInstance = firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID
  });

  return firebaseInstance.firestore();
};

export const addInterestedUser = async ({ db, email }) => {
  try {
    const docRef = await db.collection(INTERESTED_USERS).add({
      email
    });
    return docRef;
  } catch (error) {
    console.error(error);
  }
};

export const DatabaseProvider = React.createContext();
