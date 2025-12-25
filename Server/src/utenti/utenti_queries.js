const getUtenti = "SELECT * FROM utenti";

//Non uso l'getById per gli utenti perchè come chiave primaria basta lo username
const getUtenteByUsernameQ = "SELECT * FROM utenti WHERE username=$1";

const addUtente =
  "INSERT INTO utenti (username, password, nome, cognome, email, citta, data_nascita, bio, ruolo) VALUES ($1, $2 , $3, $4, $5, $6, $7, $8, $9)";

const deleteUtente = "DELETE FROM utenti WHERE username = $1";

const aggiornaPassword = "UPDATE utenti SET password = $1 WHERE username = $2";

const utenteEsistente = 'SELECT username FROM utenti WHERE username = $1';

module.exports = {
  getUtenti,
  getUtenteByUsernameQ,
  addUtente,
  deleteUtente,
  aggiornaPassword,
  utenteEsistente
};
