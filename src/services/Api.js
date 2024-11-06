import axios from 'axios';

export const Api = axios.create({
    baseURL: 'https://json-server-api-4zle.onrender.com', // Substitua pela URL correta do seu servidor
    headers: {
        'Content-Type': 'application/json',
    },
});