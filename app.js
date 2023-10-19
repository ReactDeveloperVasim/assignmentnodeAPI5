const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/iphone", (req, res) => {
  res.send([
    "Iphone 12 pro",
    "Iphone 12 pro max",
    "Iphone 13 pro",
    "Iphone 13 pro max",
    "Iphone 14 pro ",
    "Iphone 14 pro max",
    "Iphone se 2020",
  ]);
});

app.get("/samsung", (req, res) => {
  res.send([
    "Samsung Fold 5 5G",
    "Samsung Flip 5 5G",
    "Samsung S23 5G",
    "Samsung S23 Ultra",
    "Samsung M40 4G",
    "Samsung A30 4G",
  ]);
});

app.get("/redmi", (req, res) => {
  res.send([
    "Redme Note 11T 5G",
    "Redme Note 11S 5G",
    "Redme 10 Power",
    "Redme Note 12 pro 5G",
  ]);
});

app.get("/realme", (req, res) => {
  res.send([
    "Realme 11 pro",
    "Realme c55",
    "Realme Narzo 50 pro",
    "Realme Narzo 70 pro",
    "Realme Narzo N55",
    "Realme 6 PRO",
    "Realme Narzo N53",
    "Realme Narzo N20",
  ]);
});

app.get("/oneplus", (req, res) => {
  res.send([
    "OnePlus 11",
    "OnePlus 9R",
    "OnePlus 8T",
    "OnePlus 9R Pro",
    "OnePlus Nord3",
    "OnePlus 10 Pro",
  ]);
});

app.listen(5010, () => {
  console.log("App Server is running on port 5010");
});
