const Sequelize = require("sequelize");

const databaseUrl = "postgres://postgres:missme@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

db.sync()
  .then(() => console.log("Table created"))
  .catch(console.error);

module.exports = db;
