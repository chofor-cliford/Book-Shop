import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mysql from "mysql";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "chofo123",
  database: "test",
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM book";
  db.query(q, (err, data) => {
    if (err) return res.json({ msg: err });
    return res.json(data);
  });
});

app.post("/books", (req, res) => {
  const { title, desc, cover, price } = req.body;
  const q = "INSERT INTO book (`title`, `desc`, `cover`, `price`) VALUES (?)";

  const values = [title, desc, cover, price];
  db.query(q, [values], (err, data) => {
    if (err) return res.json({ msg: err });
    return res.json({ msg: "You've Sucessfully Created the book" });
  });
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const q = "DELETE FROM book WHERE id = ?";

  db.query(q, [id], (err, data) => {
    if (err) return res.json({ msg: err });
    return res.json({ msg: "You've Sucessfully Deleted the book" });
  });
});

app.patch("/books/:id", (req, res) => {
  const { id } = req.params;
  const { title, desc, cover, price } = req.body;
  const q =
    "UPDATE book SET `title` = ?, `desc` = ?, `cover` = ?, `price` = ? WHERE id = ?";

  db.query(q, [title, desc, cover, price, id], (err, data) => {
    if (err) return res.json({ msg: err });
    return res.json({ msg: "You've Sucessfully Updated the book" });
  });
});

app.get("/books/search", (req, res) => {
  const { book } = req.query;
  const q = "SELECT * FROM book WHERE `title` REGEXP ? OR `desc` REGEXP ?";

  db.query(q, [book, book], (err, data) => {
    if (err) return res.json({ msg: err });
    return res.json(data);
  });
});

app.get("/book/:id", (req, res) => {
  const { id } = req.params;
  const q = "SELECT * FROM book WHERE id = ?";

  db.query(q, [id], (err, data) => {
    if (err) return res.json({ msg: err });
    return res.json(data);
  });
});

app.listen(PORT, () => console.log(`Server runing on port: ${PORT}`));
