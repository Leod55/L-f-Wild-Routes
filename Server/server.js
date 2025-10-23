const express = require("express");
const viaggiRoutes = require("./src/viaggi/viaggi_routes");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/viaggi", viaggiRoutes);
app.listen(port, () => console.log(`app listening on port ${port}!`));

app.get("/", (req, res) => {
  res.send("Benvenuti su L&F Wild Routes!");
});
