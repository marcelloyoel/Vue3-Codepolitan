<script setup>
const {questionPage, barPercentage} = defineProps(['questionPage', 'barPercentage']);
</script>

<template>
    <header>
        <h4>Question {{ questionPage }}</h4>
        <div class="bar">
            <div class="bar-progress" :style="{width: barPercentage}"></div>
        </div>
    </header>
</template>

<style scoped>
header{
    margin-top: 20px;
}

header h4{
    font-size: 30px;
}

.bar{
    width: 100%;
    height:50px;
    border:3px solid #adf7b6;
}

.bar-progress{
    height: 100%;
    width: 0%;
    background-color: #adf7b6;
}
</style>