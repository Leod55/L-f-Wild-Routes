const { Router } = require("express");
const controllerViaggi = require("./viaggi_controller");

const router = Router();

//GET VIAGGI

router.get("/", controllerViaggi.getViaggiList);
router.get("/:idv", controllerViaggi.getViaggioById);

//POST VIAGGI

router.post("/", controllerViaggi.addViaggio);

//DELETE VIAGGI

router.delete("/:idv", controllerViaggi.deleteViaggio);

module.exports = router;
