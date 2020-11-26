const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./config/database");

// init app
const app = express();

// decare env vars
dotenv.config({ path: "./config/config.env" });
// connect to mongo
connectDB();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// test route
app.get("/", (req, res) => {
  res.send("Say hello :)");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.NODE_ENV} mode on PORT:${PORT}`
  );
});
