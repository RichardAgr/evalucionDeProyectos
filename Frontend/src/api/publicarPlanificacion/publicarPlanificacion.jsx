const API_HOST = import.meta.env.VITE_HOST;

export const publicarPlanificacion = async (idEmpresa) => {
    const response = await fetch(API_HOST+"/publicarPlanificacion", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        idEmpresa: idEmpresa,
      }),
      credentials: 'include'
    });
  
    const data = await response.json();
    return data;
  };
  