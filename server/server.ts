import express, { Express, Request, Response } from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";

const app: Express = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.VITE_MYSQL_PASS,
  database: "moviexd_profile_system",
});

app.post("/register", (req: Request, res: Response) => {
  const name = req.body.name;
  const username = req.body.username;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const bio = req.body.bio;

  db.query(
    "INSERT INTO users (name, username, lastName, email, password, bio) VALUES (?, ?, ?, ?, ?, ?)",
    [name, username, lastName, email, password, bio],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send("It's working");
    }
  );
});

// app.post("/login", (req: Request, res: Response) => {
//   db.query("SELECT * FROM users WHERE username = ? AND password = ?");
// });

app.listen(process.env.VITE_PORT, () => {
  console.log("Working");
});
