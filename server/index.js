/**
 * Module dependencies.
 */
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const dotenv = require("dotenv");
dotenv.load({ path: path.join(process.cwd(), ".env") });

const app = express();
app.set("port", 8088);

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("error", err => {
  console.error(err);
  console.log(
    "%s MongoDB connection error. Please make sure MongoDB is running."
  );
  process.exit();
});

const micrositeController = require("./controllers/microsite");

/**
 * Start Express server.
 */
app.listen(app.get("port"), () => {
  console.log("App is running at http://localhost:%d", app.get("port"));
});
