const express = require("express");
const viaggiRoutes = require("./src/viaggi/viaggi_routes");
const app = express();
const port = 3000;

app.use(express.json());

// logging middleware minimo
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

app.get("/health", (req, res) =>
  res.status(200).json({ ok: true, timestamp: Date.now() })
);

app.use("/viaggi", viaggiRoutes);

app.get("/", (req, res) => {
  res.send("Benvenuti su L&F Wild Routes!");
});

app.listen(port, () => console.log(`app listening on port ${port}!`));
