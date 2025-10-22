const { Router } = require("express");
const controller = require("./viaggi_controller");

const router = Router();

//GET VIAGGI

router.get("/", controller.getViaggiList);
router.get("/:id", controller.getViaggioById);

//POST VIAGGI

router.post("/", controller.addViaggio);

module.exports = router;
