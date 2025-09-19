const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const router = require("./routes/route");
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/college")
.then(() => { console.log("MongoDB Connected")});

app.use(express.json());
app.use(express.urlencoded({ extended : true }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/", router);




app.listen(port, () => {
    console.log("Server Started");
});