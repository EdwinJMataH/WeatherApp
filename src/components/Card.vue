<script setup>
    import useWeather from "../composables/useWeather.js";
    const { kelvinToCelsius } = useWeather();

    const props = defineProps({
        weather: {
            type: Object,
            required: true
        }
    });

</script>

<template>

<div class="w-full md:w-3/4 lg:w-2/4 xl:w-2/5 mx-auto bg-white dark:bg-slate-600 p-10 rounded-xl ring-8 ring-white ring-opacity-80">
    <div class="flex justify-between">
        <div class="flex flex-col">
            <span class="text-6xl font-bold text-gray-900 dark:text-white">{{ kelvinToCelsius(weather.main.temp) }} &#8451;</span>
            <span class="font-semibold mt-1 text-gray-900 dark:text-white">{{ weather.name }}</span>
        </div>
        <img :src="`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" :alt="weather?.name" class="w-28">
    </div>
    <div class="flex justify-between mt-12">
        <div class="flex flex-col items-center">
            <span class="font-semibold text-lg text-gray-900 dark:text-white">Min: <span class="font-normal">{{ kelvinToCelsius(weather?.main.temp_min) }} &#8451;</span></span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-semibold text-lg text-gray-900 dark:text-white">Max: <span class="font-normal">{{ kelvinToCelsius(weather?.main.temp_max) }} &#8451;</span></span>
        </div>
        <div class="flex flex-col items-center">
            <span class="font-semibold text-lg text-gray-900 dark:text-white">Humidity: <span class="font-normal">{{ weather?.main.humidity }}</span> %</span>
        </div>
    </div>
</div>
</template>
