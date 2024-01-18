import axios from 'axios';

/*Information to simulate the login
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"

Response 200: "token": "QpwL5tke4Pnpja7X4"


The page of the Api
https://reqres.in

*/

const API_REQ = 'https://reqres.in';

// Función para realizar solicitudes POST
export const post = async (url, data) => {
    try {
        const response = await axios.post(`${API_REQ}/${url}`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};


