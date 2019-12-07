const Sequelize = require("sequelize");

const databaseUrl = "postgres://postgres:missme@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

const Movie = db.define("movie", {
  title: {
    type: Sequelize.STRING
  },
  yearOfRelease: {
    type: Sequelize.INTEGER
  },
  synopsis: {
    type: Sequelize.STRING
  }
});

db.sync()
  .then(() => console.log("Table created succesfully!"))
  .catch(err => {
    console.error("Unable to create tables, shutting down...", err);
    process.exit(1);
  });
