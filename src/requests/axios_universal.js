import axios from "axios";

let typeToken = 'Bearer '

const axiosUniversal = axios.create({
    baseURL: 'https://www.universal-tutorial.com/api',
    headers: {'Authorization': typeToken.concat(import.meta.env.VITE_API_KEY_UNIVERSAL)}
});

export default axiosUniversal;