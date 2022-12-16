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

const dbName = "mahasiswas";
const viewUrl = "_design/all_mahasiswas/_view/all";

couch.listDatabases().then(function (dbs) {
  console.log(dbs);
});

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  couch.get(dbName, viewUrl).then(
    function (data, headers, status) {
      console.log(data.data.rows);
      res.render("index", { mahasiswas: data.data.rows });
    },
    function (err) {
      res.send(err);
    }
  );
});

app.post("/mahasiswas/add", function (req, res) {
  const nim = req.body.nim;
  const nama = req.body.nama;
  const dospem = req.body.dospem;
  const notelp = req.body.notelp;
  const email = req.body.email;

  couch.uniqid().then(function (ids) {
    const id = ids[0];
    couch
      .insert(dbName, {
        _id: id,
        nim: nim,
        nama: nama,
        dospem: dospem,
        notelp: notelp,
        email: email,
      })
      .then(
        function (data, headers, status) {
          res.redirect("/");
        },
        function (err) {
          res.send(err);
        }
      );
  });
});

app.listen(3014, function () {
  console.log("server started on port 3014");
});
