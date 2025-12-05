const getViaggioById = async (idv) => {
  const response = await fetch(`/api/viaggi/${idv}`);
  return await response.json();
};

const getViaggi = async () => {
  const response = await fetch(`/api/viaggi`);
  return await response.json();
};

const addViaggio = async (
  nome,
  data_partenza,
  data_arrivo,
  accompagnatore,
  prezzo,
  descrizione,
  extra,
  foto_viaggio
) => {
  const response = await fetch(`/api/viaggi`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome,
      data_partenza,
      data_arrivo,
      accompagnatore,
      prezzo,
      descrizione,
      extra,
      foto_viaggio: "defaultimg.jpg",
    }),
  });
  return await response.json();
};

const getUtenti = async () => {
  const response = await fetch(`/api/utenti`);
  return await response.json();
};

export { getViaggioById, getViaggi, addViaggio, getUtenti };
