const { Router } = require("express");
const controller = require("./viaggi_controller");

const router = Router();

router.get("/", controller.getViaggiList);

router.get("/", (req, res) => {
  res.send("viaggi list");
});

module.exports = router;
