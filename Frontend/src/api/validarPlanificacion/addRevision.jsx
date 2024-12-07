
const API_HOST = import.meta.env.VITE_HOST

export const addRevision = async (idEmpresa, comentariopublico) => {
  const response = await fetch(API_HOST+"/addRevision", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      idEmpresa: idEmpresa,
      comentariopublico: comentariopublico,
    }),
    credentials: 'include'
  });

  const data = await response.json();
  return data;
};
