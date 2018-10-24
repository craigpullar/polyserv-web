import firebase from "firebase";
import "firebase/firestore";

const initialiseDatabase = () => {
  const firestore = firebase
    .initializeApp({
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID
    })
    .firestore();

  firestore.settings({ timestampsInSnapshots: true });
  return firestore;
};

export default initialiseDatabase;
