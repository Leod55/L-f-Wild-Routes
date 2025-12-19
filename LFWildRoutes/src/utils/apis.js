const getViaggioById = async (idv) => {
  const response = await fetch(`/api/viaggi/${idv}`);
  return await response.json();
};

const getViaggi = async () => {
  const response = await fetch(`/api/viaggi`);
  return await response.json();
};

const getUtenteByUsername = async (username) => {
  const response = await fetch(`/api/utenti/${username}`);
  return await response.json();
};

const addViaggio = async (
  nome,
  data_partenza,
  data_ritorno,
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
      data_ritorno,
      accompagnatore,
      prezzo,
      descrizione,
      extra,
      foto_viaggio: "defaultimg.jpg",
    }),
  });
  return await response.json();
};

const addUtente = async (
  username,
  password,
  nome,
  cognome,
  email,
  citta,
  data_nascita,
  ruolo,
  foto_utente,
  bio
) => {
  const response = await fetch(`/api/utenti`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      nome,
      cognome,
      email,
      citta,
      data_nascita,
      ruolo: "user",
      foto_utente: "defaultimg.jpg",
      bio,
    }),
  });
  return await response.json();
};

const getUtenti = async () => {
  const response = await fetch(`/api/utenti`);
  return await response.json();
};

const aggiornaPassword = async (username, vecchiaPassword, nuovaPassword) => {
  const response = await fetch(`/api/utenti/password`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      vecchiaPassword,
      nuovaPassword,
    }),
  });
  return await response.json();
};

export {
  getViaggioById,
  getViaggi,
  getUtenteByUsername,
  addViaggio,
  addUtente,
  getUtenti,
  aggiornaPassword,
};
