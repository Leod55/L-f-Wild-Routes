const getUtenti = "SELECT * FROM utenti";

//Non uso l'getById per gli utenti perchè come chiave primaria basta lo username
const getUtenteByUsername = "SELECT * FROM utenti WHERE username=$1";

const addUtente =
  "INSERT INTO utenti (username, password, nome, cognome, email, citta, data_nascita, ruolo) VALUES ($1, $2 , $3, $4, $5, $6, $7, $8)";

const deleteUtente = "DELETE FROM utenti WHERE username = $1";

module.exports = {
  getUtenti,
  getUtenteByUsername,
  addUtente,
  deleteUtente,
};
