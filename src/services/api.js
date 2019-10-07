import { create } from 'axios';

const api = create({
    baseURL: 'http://192.168.500.55:3333',
})

export default api;