const express = require("express");
const filmRoutes = require("./src/viaggi/viaggi_routes");
const app = express();
const port = 3000;

app.use("/film", filmRoutes);
app.listen(port, () => console.log(`app listening on port ${port}!`));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "lfwildroutes",
  password: "Postgre.55",
  port: 5432,
});

module.exports = pool;
