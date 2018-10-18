import moment from "moment";
import { INTERESTED_USERS } from "./constants";

const addInterestedUser = ({ database }) => async ({ email }) =>
  await database.collection(INTERESTED_USERS).add({
    email,
    timestamp: moment().valueOf()
  });

export default addInterestedUser;
