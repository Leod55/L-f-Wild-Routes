const getViaggi = "SELECT * FROM viaggi";
const getViaggioById =
  "SELECT viaggi.*, accompagnatore FROM viaggi WHERE viaggi.idv=$1";

const getViaggioByNome =
  "SELECT viaggi.*, accompagnatore FROM viaggi WHERE viaggi.nome=$1";

const addViaggio =
  "INSERT INTO viaggi (nome, data_partenza, data_ritorno, accompagnatore, prezzo, descrizione, extra, foto_viaggio) VALUES ($1, $2 , $3, $4, $5, $6, $7, $8)";

const deleteViaggio = "DELETE FROM viaggi WHERE idv = $1";



module.exports = {
  getViaggi,
  getViaggioById,
  getViaggioByNome,
  addViaggio,
  deleteViaggio,
};
