const API_HOST = import.meta.env.VITE_HOST

export const rechazar = async (idEmpresa) => {
    const rechazarResponse = await fetch(API_HOST+"/rechazar", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idEmpresa }),
      credentials: 'include'
    });
  
    const data = await rechazarResponse.json();
  
    return data;
  };
  