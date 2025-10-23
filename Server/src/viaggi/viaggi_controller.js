const pool = require("../../db");
const queries = require("./viaggi_queries");

const getViaggiList = (req, res) => {
  pool.query(queries.getViaggi, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getViaggioById = (req, res) => {
  const idv = parseInt(res.params.idv);
  pool.query(queries.getViaggioById, [idv], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addViaggio = (req, res) => {
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

  pool.query(queries.getViaggioById, [nome], (error, results) => {
    if (error) throw error;
    if (results.rows.length > 0) {
      res.status(400).send("Il viaggio è gia presente nel database");
    } else {
      pool.query(
        queries.addViaggio,
        [
          nome,
          data_partenza,
          data_arrivo,
          accompagnatore,
          prezzo,
          descrizione,
          extra,
          foto_viaggio,
        ],
        (error) => {
          if (error) throw error;
          res.status(201).send("Viaggio aggiunto correttamente al database");
        }
      );
    }
  });
};

const deleteViaggio = (req, res) => {
  const idv = parseInt(res.params.idv);

  pool.query(queries.deleteViaggio, [idv], (error, results) => {
    if (error) throw error;
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
