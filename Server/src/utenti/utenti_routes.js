const { Router } = require("express");
const controllerUtenti = require("./utenti_controller");

const router = Router();

//GET VIAGGI

router.get("/", controllerUtenti.getUtentiList);
router.get('/:username', controllerUtenti.getUtenteByUsername);

//POST VIAGGI

router.post("/", controllerUtenti.addUtente);

//DELETE VIAGGI

router.delete("/:idv", controllerUtenti.deleteUtente);

module.exports = router;
