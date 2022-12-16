const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const NodeCouchDb = require("node-couchdb");

const couch = new NodeCouchDb({
  auth: {
    user: "nurhaliz",
    pass: "nurhaliz24",
  },
});

couch.listDatabases().then(function (dbs) {
  console.log(dbs);
});

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("jalan");
});

app.listen(3014, function () {
  console.log("server started on port 3014");
});
