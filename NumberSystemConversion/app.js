const input = document.getElementById("input-text");
const inputSelect = document.getElementById("input-select");
const output = document.getElementById("output-text");
const outputSelect = document.getElementById("output-select");
const swapBtn = document.getElementById("swap");
const submitBtn = document.getElementById("submit");
swapBtn.addEventListener("click",e=>{
    e.preventDefault();
    swap();
});
function swap(){
    let inputNumberSystem = inputSelect.options;
    let inputselectedIndex = inputNumberSystem.selectedIndex;
    let outputNumberSystem = outputSelect.options;
    let outputselectedIndex = outputNumberSystem.selectedIndex;
    let temp = inputselectedIndex;
    let temp2 = outputselectedIndex;
    inputNumberSystem.selectedIndex = temp2;
    outputNumberSystem.selectedIndex = temp;
}
submitBtn.addEventListener("click",e=>{
    let inputNumberSystem = inputSelect.options;
    let inputselectedIndex = inputNumberSystem.selectedIndex;
    let outputNumberSystem = outputSelect.options;
    let outputselectedIndex = outputNumberSystem.selectedIndex;
    let inputvalue = input.value;
    convert(inputvalue,inputNumberSystem[inputselectedIndex].value,outputNumberSystem[outputselectedIndex].value);
})
function convert(inputNo,inputSystem,outputSystem){
    inputSystem = Number(inputSystem);
    outputSystem = Number(outputSystem);
    let decimalNo = parseInt(inputNo,inputSystem);
    let outputNo = decimalNo.toString(outputSystem).toUpperCase();
    output.value = outputNo;
}