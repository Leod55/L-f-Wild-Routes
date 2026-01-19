const { Router } = require("express");
const controllerViaggi = require("./viaggi_controller");

const router = Router();



router.get("/", controllerViaggi.getViaggiList);
router.get("/:idv", controllerViaggi.getViaggioById);



router.post("/", controllerViaggi.addViaggio);



router.delete("/:idv", controllerViaggi.deleteViaggio);

module.exports = router;
