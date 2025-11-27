const getViaggioById = async (idv) => {
  const response = await fetch(`/api/viaggi/${idv}`);
  return await response.json();
};

const getViaggi = async () => {
  const response = await fetch(`/api/viaggi`);
  return await response.json();
};

export { getViaggioById, getViaggi };
