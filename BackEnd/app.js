const express = require("express");
const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234567",
});

// connect
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySql Connected....");
});

// Create DB
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE pharmacy";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created successfully ....");
  });
});

const app = express();

app.listen("3306", () => {
  console.log("Server Started on Port 3306");
});
