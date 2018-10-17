import { INTERESTED_USERS } from "./constants";

const addInterestedUser = ({ database }) => async ({ email }) => {
  try {
    const docRef = await database.collection(INTERESTED_USERS).add({
      email
    });
    return docRef;
  } catch (error) {
    console.error(error);
  }
};

export default addInterestedUser;
