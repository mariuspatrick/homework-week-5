const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.get("/message", (req, res) => res.send("Hello"));

app.post("/messages", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Message received loud and clear"
  });
});

app.listen(port, console.log(`Listening on port: ${port}`));
