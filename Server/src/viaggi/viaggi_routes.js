const { Router } = require("express");
const controller = require("./viaggi_controller");

const router = Router();

//GET VIAGGI

router.get("/", controller.getViaggiList);
router.get("/:idv", controller.getViaggioById);

//POST VIAGGI

router.post("/", controller.addViaggio);

router.delete("/:idv", controller.deleteViaggio);

module.exports = router;
