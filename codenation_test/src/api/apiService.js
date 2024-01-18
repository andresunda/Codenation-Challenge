import axios from 'axios';

// Configuración básica
const API_NARUTO = 'https://narutodb.xyz/api';

// Función para realizar solicitudes GET
export const get = async (url) => {
    try {
        const response = await axios.get(`${API_NARUTO}/${url}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
