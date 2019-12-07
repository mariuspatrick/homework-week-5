const express = require("express");
const bodyParser = require("body-parser");
const router = require("./sequelize-rest");
const cors = require("cors");

const app = express();
const middleWare = cors();
const port = 3000;

app.use(middleWare);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get("/message", (req, res) => res.send("Hello"));

app.post("/messages", (req, res, next) => {
  if (Object.getOwnPropertyNames(req.body).length === 0) {
    res.status(400).end();
  } else {
    console.log(req.body);
    res.json({
      message: "Message received loud and clear"
    });
  }
});

app.use(router);

app.listen(port, console.log(`Listening on port: ${port}`));
