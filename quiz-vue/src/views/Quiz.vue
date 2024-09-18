<script setup>
import QuizHeader from '@/components/QuizHeader.vue';
import QuizContent from '@/components/QuizContent.vue';
import { useRoute } from 'vue-router';
import quizes from '@/data/quizes.json';
import { computed, ref, watch } from 'vue';
import QuizResult from '@/components/QuizResult.vue';

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizes.find((q) => q.id === quizId);

const currentQuestionIndex = ref(0);
// const questionPage = ref(`${currentQuestionIndex.value + 1} / ${quiz.questions.length}`);

// watch(()=> currentQuestionIndex.value, () => {
//     questionPage.value = `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`
// });

const questionPage = computed(() => {
    return `${currentQuestionIndex.value + 1} / ${quiz.questions.length}`
});

const barPercentage = computed(() => {
    return `${((currentQuestionIndex.value + 1) / quiz.questions.length) * 100}%`
});

const numberOfCorrectAnswer = ref(0);

const showResult = ref(false);

function onSelectOption(option){
    if(option.correct){
        numberOfCorrectAnswer.value++;
    }
    if(currentQuestionIndex.value === quiz.questions.length - 1){
        showResult.value = true;
        return;
    }
    currentQuestionIndex.value++;
}
</script>

<template>
    <QuizHeader :questionPage="questionPage" :barPercentage="barPercentage"></QuizHeader>
    <QuizContent v-if="!showResult" :question="quiz.questions[currentQuestionIndex]" @selectedOption="onSelectOption"></QuizContent>
    <QuizResult v-else :quizQuestionsLength="quiz.questions.length" :numberOfCorrectAnswer="numberOfCorrectAnswer"></QuizResult>
</template>

<style scoped>


</style>