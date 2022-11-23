import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: "http://localhost:9000"
    baseURL: `https://directorymernbackend-production.up.railway.app`
})
export default axiosInstance; 