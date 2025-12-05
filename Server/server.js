const express = require("express");
const session = require("express-session");

const viaggiRoutes = require("./src/viaggi/viaggi_routes");
const utentiRoutes = require("./src/utenti/utenti_routes");
const sessionRoutes = require("./src/sessions/session_routes");

const app = express();
const port = 3000;

app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 300000, secure: false },
  })
);

app.get("/", (req, res) => {
  res.send("Benvenuti su L&F Wild Routes!");
});

app.use("/viaggi", viaggiRoutes);
app.use("/utenti", utentiRoutes);
app.use("/session", sessionRoutes);

app.listen(port, () => console.log(`app listening on port ${port}!`));
