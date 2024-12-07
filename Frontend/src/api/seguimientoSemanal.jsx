const API_HOST = import.meta.env.VITE_HOST

export const getSeguimiento = async (idPlanificacion) => {
    try {
        const response = await fetch(`${API_HOST}/seguimientoSemanal/${idPlanificacion}/SprintHastaSemanalActual`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Error al obtener los datos de las tareas');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
};

export const getSemanaSeguimiento = async (idEmpresa, idSemana) => {
    try {
        const response = await fetch(`${API_HOST}/empresa/${idEmpresa}/seguimientoSemanal/semana/${idSemana}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error('Error al obtener los datos de las tareas');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error en la solicitud:', error);
        throw error;
    }
};