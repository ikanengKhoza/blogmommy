const express = require("express");
const app = express();
const { Client } = require("pg");

const port = process.env.PORT || 3100;
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
client.connect();

app.get("/", (req, res) => {
  res.send("working enpoint front page");
});

app.post("/", function (req, res) {
  const newTitle = req.body.title;
  const newText = req.body.url;
  const newAuthor = req.body.rating;

  if (
    newTitle === undefined ||
    newTitle === "" ||
    newText === undefined ||
    newText === "" ||
    newAuthor === undefined ||
    newAuthor === ""
  ) {
    return res
      .status(400)
      .send("check that you have filled the form correctly");
  }

  client
    .query("INSERT INTO blogs (title, text, author) VALUES ($1, $2, $3)", [
      newTitle,
      newText,
      newAuthor,
    ])
    .then(() => res.send("new video created!"))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

app.listen(port, function () {
  console.log("Server is listening on port 3100. Ready to accept requests!");
});
