const API_HOST = import.meta.env.VITE_HOST

export const getPlanificacionesSinValidar   = async () => {
  
      const response = await fetch(API_HOST+"/planificacionesSinValidar", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include'
      });
      const responseData = await response.json();  
      return responseData;
  };