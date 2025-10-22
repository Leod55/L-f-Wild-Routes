const getViaggi = "SELECT * FROM viaggi";
const getViaggioById = "SELECT * FROM viaggi WHERE idv=$1";

const addViaggio =
  "INSERT INTO viaggi (nome, data_partenza, data_arrivo, accompagnatore, prezzo, descrizione, extra, foto_viaggio) VALUES ($1, $2 , $3, $4, $5, $6)";

module.exports = {
  getViaggi,
  getViaggioById,
  addViaggio,
};
