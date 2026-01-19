const pool = require("../../db");
const queries = require("./session_queries");
const utentiQueries = require("../utenti/utenti_queries");

const login = (req, res) => {
  const { username, password } = req.body;

  pool.query(utentiQueries.getUtenteByUsernameQ, [username], (error, results) => {
    if (error) throw error;

    if (results.rows.length === 0) {
      res.status(401).json({ message: "Utente non trovato" });
    } else {
      const user = results.rows[0];

      if (user.password === password) {
        req.session.username = user.username;
        res.status(200).json(req.session);
      } else {
        res.status(401).json({ message: "Password errata" });
      }
    }
  });
};

const logout = (req, res) => {
  if (req.session.username) {
    req.session.destroy();
    res.status(200).json({ message: "Logout effettuato" });
  } else {
    res.status(400).json({ message: "Non sei loggato" });
  }
};

const isLogged = (req, res) => {
  if (req.session.username) {
    res.status(200).json(req.session);
  } else {
    res.status(401).json({ message: "Non sei loggato" });
  }
};

module.exports = {
  login,
  logout,
  isLogged,
};
