const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/product");

const app = express();

app.use(express.json());

app.use(cors());

const products = require("./routes/product");

app.use("/product", products);
app.get("/", (req, res) => {
  res.send("Welcome to Clockwheels");
});

const db = require("./db.js");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
