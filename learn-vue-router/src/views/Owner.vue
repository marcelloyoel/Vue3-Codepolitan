<script setup>
import { useRoute } from 'vue-router';
import products from '../data/products.json'
const route = useRoute();

const { owner } = products.find((product) => product.id === parseInt(route.params.id));
</script>


<template>
    <div v-if="product">
        <h1>Owner</h1>
        <p>{{ owner.name }}</p>
        <p>{{ owner.email }}</p>
    </div>
    <div v-else>
        <h1>Owner Not Found in Product</h1>
    </div>
</template>