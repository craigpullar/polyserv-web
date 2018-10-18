import moment from "moment";
import { INTERESTED_USERS } from "./constants";

const addInterestedUser = ({ database }) => async ({ email }) => {
  try {
    const docRef = await database.collection(INTERESTED_USERS).add({
      email,
      timestamp: moment().valueOf()
    });
    return docRef;
  } catch (error) {
    console.error(error);
  }
};

export default addInterestedUser;
