
import { get } from '../apiService'

// Función para realizar solicitudes GET específicas para obtener datos de usuarios
export const getAkatsukis = async () => {
    try {
        return await get('akatsuki');
    } catch (error) {
        throw error;
    }
};
