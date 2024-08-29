let value = document.getElementById('value');
const countDecrease = document.getElementById('decrement');
const countIncrease = document.getElementById('increment');
let count = 0;

value.textContent = count;

countIncrease.addEventListener("click", ()=>{
    count++
    value.textContent = count;
});
countDecrease.addEventListener("click", ()=>{
    count--;
    value.textContent = count;
});