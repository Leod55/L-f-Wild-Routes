const getViaggi = "SELECT * FROM viaggi";
const getViaggioById = "SELECT * FROM viaggi WHERE idv=$1";

const addViaggio =
  "INSERT INTO viaggi (idv, nome, data_partenza, data_arrivo, accompagnatore, prezzo, descrizione, extra, foto_viaggio) VALUES ($1, $2 , $3, $4, $5, $6, $7, $8, $9)";

const deleteViaggio = "DELETE FROM viaggi WHERE idv = $1";

const updateViaggio =
  "UPDATE viaggi SET nome = $2, data_partenza = $3, data_arrivo = $4, accompagnatore = $5, prezzo = $6, descrizione = $7, extra = $8, foto_viaggio = $9 WHERE idv = $1";

module.exports = {
  getViaggi,
  getViaggioById,
  addViaggio,
  deleteViaggio,
  updateViaggio,
};
