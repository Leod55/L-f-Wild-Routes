const pool = require("../../db");
const queries = require("./viaggi_queries");

const getViaggiList = (req, res) => {
  pool.query(queries.getViaggi, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getViaggioById = (req, res) => {
  /*Prendo l'id del viaggio (idv) dalla richiesta e lo converto in intero*/
  const idv = parseInt(req.params.idv);

  /*Utilizzo la query getViaggioById passando l'id del viaggio (idv) come parametro*/
  pool.query(queries.getViaggioById, [idv], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows); 
  });
};

const addViaggio = (req, res) => {
  /*Prendo i dati del viaggio dalla richiesta*/
  const {
    nome,
    data_partenza,
    data_ritorno,
    accompagnatore,
    prezzo,
    descrizione,
    extra,
    foto_viaggio,
  } = req.body;

  //qui posso provare a prendere anche l'id oppure mi creo getViaggioByNome
  pool.query(queries.getViaggioByNome, [nome], (error, results) => {
    if (error) throw error;

    /*Se la query da qualche riga come risultato significa che il viaggio è gia nel database*/
    if (results.rows.length > 0) {
      res
        .status(400)
        .json({ message: "Il viaggio è già presente nel database" });
    } else {
      /*Se non è già presente chiamo la query passando come parametri i dati della richiesta*/
      pool.query(
        queries.addViaggio,
        [
          nome,
          data_partenza,
          data_ritorno,
          accompagnatore,
          prezzo,
          descrizione,
          extra,
          foto_viaggio,
        ],
        (error) => {
          if (error) throw error;
          res.status(201).json({ message: "Viaggio aggiunto con successo" });
        }
      );
    }
  });
};

const deleteViaggio = (req, res) => {
  const idv = parseInt(req.params.idv);

  pool.query(queries.deleteViaggio, [idv], (error, results) => {
    if (error) throw error;

    /*Se non ci sono righe significa che il viaggio da eliminare non c'è*/
    if (results.rowCount === 0) {
      res.status(404).json({ message: "Viaggio non trovato" });
    } else {
      res.status(200).json({ message: "Viaggio eliminato con successo" });
    }
  });
};

module.exports = {
  getViaggiList,
  getViaggioById,
  addViaggio,
  deleteViaggio,
};
