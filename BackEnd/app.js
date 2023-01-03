const express = require("express");
const mysql = require("mysql");

// create connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pharmacy",
});

// connect
db.connect((err) => {
  try {
    console.log("MySql Connected .....");
  } catch {
    throw err;
  }
});

const app = express();

// Create DB
app.get("/pharmacyDb", (req, res) => {
  let sql = "CREATE DATABASE Pharmacy";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Database created........");
  });
});

// Create table
app.get("/users", (req, res) => {
  let sql =
    "CREATE TABLE users (id int AUTO_INCREMENT PRIMARY KEY, FirstName varchar(100), LastName varchar(100),username varchar(100), password varchar(100))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Users table created......");
  });
});

app.get("/drugs", (req, res) => {
  let sql =
    "CREATE TABLE drugs (id int AUTO_INCREMENT PRIMARY KEY, name varchar(100), price varchar(100),image varchar(100), description varchar(255),category varchar(100)), expirationDate date NOT NULL";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Drugs table created......");
  });
});

app.listen("3000", () => {});
