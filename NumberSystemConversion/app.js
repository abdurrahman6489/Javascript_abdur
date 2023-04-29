const input = document.getElementById("input-text");
const inputSelect = document.getElementById("input-select");
const output = document.getElementById("output-text");
const outputSelect = document.getElementById("output-select");
const swapBtn = document.getElementById("swap");
const submitBtn = document.getElementById("submit");
swapBtn.addEventListener("click", (e) => {
  e.preventDefault();
  swap();
});

function findSelectedIndexOfSelectInput(selectElem) {
  let selectedIndex = selectElem.options.selectedIndex;
  return selectedIndex;
}

function swap() {
  let inputSelectedIndex = findSelectedIndexOfSelectInput(inputSelect);
  let outputSelectedIndex = findSelectedIndexOfSelectInput(outputSelect);
  [inputSelectedIndex, outputSelectedIndex] = [
    outputSelectedIndex,
    inputSelectedIndex,
  ];
}
submitBtn.addEventListener("click", (e) => {
  let inputSelectedIndex = findSelectedIndexOfSelectInput(inputSelect);
  let outputSelectedIndex = findSelectedIndexOfSelectInput(outputSelect);
  let inputNumberSystem = inputSelect.options[inputSelectedIndex].value;
  let outputNumberSystem = outputSelect.options[outputSelectedIndex].value;
  let inputValue = input.value;
  convert(inputValue, inputNumberSystem, outputNumberSystem);
});
function convert(inputNo, inputSystem, outputSystem) {
  inputSystem = parseInt(inputSystem);
  outputSystem = parseInt(outputSystem);
  let decimalNo = parseInt(inputNo, inputSystem);
  let convertedNumber = decimalNo.toString(outputSystem);
  output.value = convertedNumber;
}
