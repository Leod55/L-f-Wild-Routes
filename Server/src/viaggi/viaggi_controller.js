const pool = require("../../db");
const queries = require("./viaggi_queries");

// controlli (adatta i limiti se modifichi lo schema DB)
function checkLengths(body) {
  const limits = {
    nome: 200,
    accompagnatore: 200,
    descrizione: 2000,
    extra: 200,
    foto_viaggio: 200,
  };
  const tooLong = [];
  for (const [field, max] of Object.entries(limits)) {
    const val = body[field];
    if (typeof val === "string" && val.length > max) {
      tooLong.push({ field, length: val.length, max });
    }
  }
  return tooLong;
}

const getViaggiList = async (req, res) => {
  console.log("GET /viaggi - start");
  try {
    const result = await pool.query(queries.getViaggi);
    console.log("GET /viaggi - query OK, rows:", result.rowCount);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("GET /viaggi - DB error:", error);
    return res.status(500).json({ error: "Errore server" });
  }
};

const getViaggioById = async (req, res) => {
  console.log("GET /viaggi/:id - start", req.params);
  const idv = parseInt(req.params.id, 10);
  if (Number.isNaN(idv))
    return res.status(400).json({ error: "id non valido" });
  try {
    const result = await pool.query(queries.getViaggioById, [idv]);
    console.log("GET /viaggi/:id - query OK, rows:", result.rowCount);
    return res.status(200).json(result.rows);
  } catch (error) {
    console.error("GET /viaggi/:id - DB error:", error);
    return res.status(500).json({ error: "Errore server" });
  }
};

const addViaggio = async (req, res) => {
  console.log("POST /viaggi - start", {
    bodyPreview: req.body && Object.keys(req.body),
  });
  try {
    const {
      nome,
      data_partenza,
      data_arrivo,
      accompagnatore,
      prezzo,
      descrizione,
      extra,
      foto_viaggio,
    } = req.body;

    if (!nome) return res.status(400).json({ error: "campo 'nome' richiesto" });

    const tooLong = checkLengths(req.body);
    if (tooLong.length > 0) {
      console.warn("POST /viaggi - campi troppo lunghi:", tooLong);
      return res
        .status(400)
        .json({ error: "Campi troppo lunghi", details: tooLong });
    }

    console.log("POST /viaggi - executing INSERT...");
    const result = await pool.query(queries.addViaggio, [
      nome,
      data_partenza,
      data_arrivo,
      accompagnatore,
      prezzo,
      descrizione,
      extra,
      foto_viaggio,
    ]);
    console.log("POST /viaggi - INSERT OK, returning:", result.rows[0]);
    return res
      .status(201)
      .json({ message: "Viaggio aggiunto", inserted: result.rows[0] || null });
  } catch (error) {
    console.error("POST /viaggi - error:", error);
    return res
      .status(500)
      .json({ error: "Errore inserimento DB", details: error.message });
  }
};

const deleteViaggio = (req, res) => {
  const idv = parseInt(req.params.idv);

  pool.query(queries.deleteViaggio, [idv], (error, results) => {
    if (error) throw error;

    /*Se non ci sono righe significa che il viaggio da eliminare non c'è*/
    if (results.rowCount === 0) {
      res.status(404).send("Viaggio non trovato");
    } else {
      res.status(200).send("Viaggio eliminato");
    }
  });
};

module.exports = {
  getViaggiList,
  getViaggioById,
  addViaggio,
  deleteViaggio,
};
