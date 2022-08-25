const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
const bodyparser = require("body-parser");
app.use(cors());

const { Client } = require("pg");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Listening on port ${port}`));

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client.connect();

app.get("/", (req, res) => {
  client
    .query("SELECT * FROM blogs")
    .then((result) => res.json(result.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).json(error);
    });
});

app.post("/", function (req, res) {
  const newTitle = req.body.title;
  const newText = req.body.url;
  const newAuthor = req.body.rating;

  // if (
  //   newTitle === undefined ||
  //   newTitle === "" ||
  //   newText === undefined ||
  //   newText === "" ||
  //   newAuthor === undefined ||
  //   newAuthor === ""
  // ) {
  //   return res
  //     .status(400)
  //     .send("check that you have filled the form correctly");
  // }

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
