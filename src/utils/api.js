import axios from 'axios';

// Defines where the Axios requests are sent
export default axios.create({
    baseURL: 'http://localhost:8000',
    responseType: 'json',
});
