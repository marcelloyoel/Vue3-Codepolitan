<!-- <script setup>
import {ref} from "vue";

const count = ref(1);
</script>

<template>
      <main>
        <h1>Counter</h1>
        <span id="value">{{ count }}</span>
        <div class="">
            <button @click="count--" id="decrement">-</button>
            <button @click="count++" id="increment">+</button>
        </div>
    </main>
</template>

<style scoped>
main{
    text-align: center;
    background-color: #333333;
    padding: 20px;
    border-radius: 8px;
}

#value{
    font-size: 50px;
}

button{
    font-size: 16px;
    margin: 0 5px;
    background-color: #555555;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border: 4px;
}

button:hover{
    background-color: #777777;
}

button:active{
    animation: pulse 0.5s linear;
}

@keyframes pulse{
    0% {
        transform: scale(1);
    }
    50%{
        transform: scale(1.1);
    }
    100%{
        transform: scale(1);
    }
}
</style> -->