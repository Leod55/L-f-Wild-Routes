const { Router } = require("express");
const controllerUtenti = require("./utenti_controller");

const router = Router();

//GET UTENTI

router.get("/", controllerUtenti.getUtentiList);
router.get("/:username", controllerUtenti.getUtenteByUsername);

//POST UTENTI

router.post("/", controllerUtenti.addUtente);

//DELETE UTENTI

router.delete("/:username", controllerUtenti.deleteUtente);

// PUT
router.put("/:password", controllerUtenti.aggiornaPassword);

module.exports = router;
