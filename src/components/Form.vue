<script setup>
    import { onMounted, watch, defineEmits  } from "vue";
    import useUniversal from "../composables/useUniversal.js";
    const { getCountries, getStates, getCities, countries, states, cities, universal } = useUniversal();

    const emit = defineEmits();

    onMounted(async () => {
        await getCountries()
    });

    const getState = async(nameCountry) => {
        await getStates(nameCountry[1])
    };

    const getCity = async(nameState) => {
        await getCities(nameState)
    };

    watch(() => Object.values(universal).includes(''), (status) => {
        if (!status) {
            emit('get-weather', universal)
        }
    });
</script>

<template>
    <div class="w-full md:w-3/4 lg:w-2/4 xl:w-2/5 mx-auto">
        <form>
            <div >
                <div class="mb-3">
                    <label for="country" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country</label>
                    <select v-model="universal.country" @update:model-value="getState" id="country"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Select a country</option>
                        <option v-for="country in countries" :key="country.country_short_name" :value="[country.country_short_name, country.country_name]">{{ country.country_name }}</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="state" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                    <select v-model="universal.state" @update:model-value="getCity" id="state"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Select a state</option>
                        <option v-for="state in states" :key="state.state_name" :value="state.state_name">{{ state.state_name }}</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                    <select v-model="universal.city" id="city"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Select a city</option>
                        <option v-for="city in cities" :key="city.city_name" :value="city.city_name">{{ city.city_name }}</option>
                    </select>
                </div>
            </div>
        </form>


    </div>
</template>
