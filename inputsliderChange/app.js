let sum = 50;
const maxSum = document.getElementById("max-sum");
const rangeA = document.getElementById("rangeA");
const rangeB = document.getElementById("rangeB");
const valueA = document.getElementById("range-a-value");
const valueB = document.getElementById("range-b-value");
const total = document.getElementById("sum");
maxSum.addEventListener("change",(e)=>{
    sum = maxSum.value;
    sum = Number(sum);
    rangeB.max = sum;
    showAllValues();
})
rangeA.addEventListener("input",(e)=>{
    showAllValues();
    rangeB.max = sum - Number(e.currentTarget.value);
})
rangeB.addEventListener("input",(e)=>{
    showAllValues();
    rangeA.max = sum - Number(e.currentTarget.value);
    console.log(rangeA.max);
})
function showAllValues(){
    valueA.innerText = rangeA.value;
    valueB.innerText = rangeB.value;
    total.innerText = Number(rangeA.value) + Number(rangeB.value);
}
