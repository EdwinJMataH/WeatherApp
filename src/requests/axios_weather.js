import axios from "axios";

const baseURLCoordinates = 'http://api.openweathermap.org/geo/1.0/direct';
const baseURLWeather = 'https://api.openweathermap.org/data/2.5/weather';

const axiosCoordinates = axios.create({
    baseURL: baseURLCoordinates,
});

const axiosWeather = axios.create({
    baseURL: baseURLWeather,
});



export {
    axiosCoordinates, axiosWeather
};