const express = require("express");
const viaggiRoutes = require("./src/viaggi/viaggi_routes");
const utentiRoutes = require("./src/utenti/utenti_routes");
const app = express();
const port = 3000;
const session = require("express-session");

app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 300000, secure: false },
  })
);

app.use("/viaggi", viaggiRoutes);
app.use("/utenti", utentiRoutes);
app.listen(port, () => console.log(`app listening on port ${port}!`));

app.get("/", (req, res) => {
  res.send("Benvenuti su L&F Wild Routes!");
});
