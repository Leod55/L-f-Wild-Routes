const { Router } = require("express");
const controllerUtenti = require("./utenti_controller");

const router = Router();



router.get("/exists/:username", controllerUtenti.utenteEsistente);
router.get("/", controllerUtenti.getUtentiList);
router.get("/:username", controllerUtenti.getUtenteByUsername);



router.post("/", controllerUtenti.addUtente);



router.delete("/:username", controllerUtenti.deleteUtente);


router.put("/:password", controllerUtenti.aggiornaPassword);

module.exports = router;
