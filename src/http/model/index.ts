import { Sequelize } from "sequelize";
import sequelize from "./db";

interface Database {
    Sequelize: typeof Sequelize;
    sequelize: Sequelize;
    models: {

    }
}

const db: Database = {} as Database;
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.models = {

};

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

export default db;