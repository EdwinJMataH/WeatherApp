import axiosUniversal from "../requests/axios_universal";
import { ref, reactive } from "vue";
export default function useUniversal() {

    let countries = ref();
    let states    = ref();
    let cities    = ref();
    let universal = reactive({
        country: '',
        state: '',
        city: '',
    });

    const getCountries = async() =>  {
        try {
            const response  = await axiosUniversal.get('/countries');
            countries.value = {};
            countries.value = response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const getStates = async(nameCountry) =>  {
        try {
            universal.state = '';
            universal.city  = '';
            const response  = await axiosUniversal.get(`/states/${nameCountry}`);
            states.value    = {};
            states.value    = response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    const getCities = async(nameState) =>  {
        try {
            universal.city = '';
            const response = await axiosUniversal.get(`/cities/${nameState}`);
            cities.value   = {};
            cities.value   = response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    return {
        getCountries,
        getStates,
        getCities,
        countries,
        states,
        cities,
        universal
    }
}