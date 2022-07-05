const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const mainRoutes = require("./routes/mainRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoutes);

app.use(errorController.get404);

app.use("/favicon.ico", express.static("./public/favicon.ico"));

app.listen(3000);
