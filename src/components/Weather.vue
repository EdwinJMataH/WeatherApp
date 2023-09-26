<script setup>
    import Spinner from "./Spinner.vue";
    import Form from "./Form.vue";
    import Card from "./Card.vue";
    import useWeather from "../composables/useWeather.js";
    const { getCoordinates, weather, hasWeather, loader } = useWeather();

    const getWeather = async(universal) => {
        await getCoordinates(universal);
    };

</script>

<template> 
    <section class="text-gray-600 body-font container mx-auto py-20">
        <div class="mx-5">
            <h1 class="text-3xl font-medium title-font dark:text-white text-black mb-16 text-center">Weather App</h1>
            <div class="flex flex-col -m-4 gap-10">
                <Form @get-weather="getWeather"/>
                <Card v-if="hasWeather" :weather="weather"/>
                <Spinner v-if="loader"/>

            </div>
        </div>
    </section>
</template>
