require("dotenv").config();
const cors = require("cors");
const express = require("express");
const shuffle = require("lodash.shuffle");

const app = express();
const { books, authors } = require("./stubs");

app.use(express.json());
app.use(cors());

app.get("/api/health-check", (req, res) => {
  res.status(200).send({ success: true });
});

app.get("/api/books", (req, res) => {
  res.status(200).send(shuffle(books));
});

app.get("/api/authors", (req, res) => {
  res.status(200).send(shuffle(authors));
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
