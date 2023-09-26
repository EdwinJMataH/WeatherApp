import  { axiosCoordinates, axiosWeather } from "../requests/axios_weather";
import { ref, computed } from "vue";
export default function useWeather() {

    let weather = ref({});
    let loader  = ref(true);

    const getCoordinates = async(universal) =>  {
        const { city, country, state } = universal;
        try {
            const responseCoordinates = await axiosCoordinates.get('', {
                params: {
                    q: `${city},${country[0]}`,
                    limit: 1,
                    appid: `${import.meta.env.VITE_API_KEY_OPEN_WEATHER}`,
                },
            });

            const { lat, lon } = responseCoordinates.data[0];

            const responseWeather = await axiosWeather.get('', {
                params: {
                    lat: `${lat}`,
                    lon: `${lon}`,
                    appid: `${import.meta.env.VITE_API_KEY_OPEN_WEATHER}`,
                },
            });

            weather.value = responseWeather.data;

        } catch (error) {
            // Maneja errores aquí
            console.error(error);
            throw error;
        } finally {
            loader.value = false;
        }
    }

    const hasWeather = computed(()=>{
        return Object.values(weather.value).length > 0;
    });

    const kelvinToCelsius = temperature => parseInt(temperature - 273.15);

    return {
        getCoordinates,
        weather,
        loader,
        hasWeather,
        kelvinToCelsius
    }

}

