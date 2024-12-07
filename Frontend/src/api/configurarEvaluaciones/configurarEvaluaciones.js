// definir la url inicial de la api
const API_HOST = import.meta.env.VITE_HOST

/**
 * modifica los datos para configurar una evaluacion final
 * @returns {Promise<Object>} Las planificaciones con su ID
 */
export async function configurarEvaluacion(datosEvaluacion) {
  try {
    const response = await fetch(`${API_HOST}/configurarEvaluacion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosEvaluacion),
      credentials: "include",
    });


    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al configurar la evaluación:", error);
    return {
      error: true,
      message: error.message || "Ocurrió un error inesperado",
    };
  }

}

export async function getEvaluacionesGrupo(idGrupo) {
    const response = await fetch(
      `${API_HOST}/getEvaluacionesGrupo/${idGrupo}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;

}

export async function getDatosEvaluacion(idGrupo) {
    const response = await fetch(
      `${API_HOST}/getDatosEvaluacion/${idGrupo}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;

}
