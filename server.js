const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

const app = express();

app.listen(3000, console.log("Server Started"));

app.set("view engine", ".hbs");

app.engine(
  ".hbs",
  exphbs({
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/components/",
    extname: ".hbs",
  })
);

app.use(
  "/bootstrap",
  express.static(path.join(__dirname + "/node_modules/bootstrap/dist/css"))
);

app.use(
  "/bootstrap",
  express.static(path.join(__dirname + "/node_modules/bootstrap/dist/js"))
);

app.use(
  "/jquery",
  express.static(path.join(__dirname + "/node_modules/jquery/dist"))
);

app.get("/", (req, res) => {
  res.render("Inicio");
});
