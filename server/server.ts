import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";
import jwt from "jsonwebtoken";
import mysql, { QueryOptions } from "mysql";

import { verifyToken } from "./JWT";

const app = express();
dotenv.config();
const PORT = process.env.VITE_APP_PORT || 3001;
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

interface User {
  email: string;
  username: string;
  password: string;
}

declare module "express-session" {
  interface SessionData {
    user: User;
  }
}

declare module "express" {
  interface Request {
    user?: User;
  }
}

app.use(
  session({
    secret: process.env.VITE_APP_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000,
      httpOnly: true
    }
  })
);

const db = mysql.createPool({
  user: process.env.VITE_APP_dbUser,
  host: process.env.VITE_APP_dbHost,
  password: process.env.VITE_APP_dbPassword,
  database: process.env.VITE_APP_dbDatabase
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
  } else {
    console.log("Connected to MySQL!");
    connection.release();
  }
});

app.post("/signup", (req, res) => {
  let { username, email, password } = req.body;
  username = username.trim();
  email = email.trim();
  password = password.trim();

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) console.log(err);

    db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?);",
      [username, email, hash],

      (err) => {
        if (err) {
          res.send({ message: err.sqlMessage });
        } else {
          res.status(200).send({ message: "User registered successfully!" });
        }
      }
    );
  });
});

app.post("/login", (req, res) => {
  let { identifier, password } = req.body;
  identifier = identifier.trim();
  password = password.trim();
  let sqlQuery: string | QueryOptions;

  if (/\S+@\S+\.\S+/.test(identifier)) {
    sqlQuery = "SELECT * FROM users WHERE email = ?;";
  } else {
    sqlQuery = "SELECT * FROM users WHERE username = ?;";
  }

  db.query(sqlQuery, [identifier], (err, result) => {
    if (err) res.send({ err: err });

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (err, response) => {
        if (response && process.env.ACCESS_TOKEN_SECRET) {
          const token = jwt.sign(
            { user: result[0] },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1h" }
          );

          res.cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
          });

          req.session.user = result;
          res.send(result);
        } else {
          res.send({ message: "Your credentials don`t match!" });
        }
      });
    } else {
      res.send({ message: "User doesn't exist!" });
    }
  });
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");

  req.session.destroy((err) => {
    if (err) {
      res.status(500).send({ error: "Server error" });
    } else {
      res.send({ message: "Logout successful" });
    }
  });
});

app.get("/profile", verifyToken, (req, res) => {
  if (req.session.user) {
    res.send({ user: req.session.user });
  }
});

app.listen(PORT, () => {
  console.log("Working on " + process.env.VITE_APP_PORT);
});
