import withDatabaseImport from "./with-database";
import addInterestedUser from "./add-interested-user";
import DatabaseProviderImport from "./database-provider";
import initialiseDatabase from "./initialise-database";

export const withDatabase = withDatabaseImport;
export const DatabaseProvider = DatabaseProviderImport;

const Database = () => {
  const database = initialiseDatabase();

  return {
    addInterestedUser: addInterestedUser({ database })
  };
};

export default Database;
