const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./routes/route.js");
const app = express();
const cors = require("cors");
const path = require("path");
const connectDB = require("./db");

app.use(express.json());
app.use(cors());
app.use("/books", router);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
//building mongodb connection
dotenv.config();
connectDB();

app.listen(process.env.PORT || 5000, () => {
  console.log("live on port");
});
