let array = [
  {
    country: "India",
    States: [
      { State: "West Bengal", Capital: "Kolkata" },
      { State: "Bihar", Capital: "Patna" },
      { State: "Rajasthan", Capital: "Jaipur" },
    ],
  },
  {
    country: "US",
    States: [
      { State: "California", Capital: "Sacramento" },
      { State: "Texas", Capital: "Austin" },
      { State: "Florida", Capital: "Tallahassee" },
    ],
  },
  {
    country: "Pakistan",
    States: [
      { State: "Punjab", Capital: "Lahore" },
      { State: "Balochistan", Capital: "Quetta" },
      { State: "Gilgit-Baltistan", Capital: "Baltistan" },
    ],
  },
  {
    country: "Germany",
    States: [
      { State: "Bavaria", Capital: "Munich" },
      { State: "Berlin", Capital: "Berlin City" },
      { State: "Brandenburg", Capital: "Potsdam" },
    ],
  },
];
const countries = document.getElementById("countries");
const states = document.getElementById("states");
const divElem = document.querySelector(".chosenvalue");

function deleteElements(container) {
  container.innerHTML = "";
}
function findSelectedIndexOfSelectTag(selectTagElem) {
  return selectTagElem.options.selectedIndex;
}
countries.addEventListener("change", () => {
  let selectedIndex = findSelectedIndexOfSelectTag(countries);
  let selectedCountry = countries.options[selectedIndex].value;
  makeSelectTagOptions(array[selectedIndex].States, "State", states);
});
function makeSelectTagOptions(array, key, container) {
  deleteElements(container);
  array.forEach((elem) => {
    let option = document.createElement("option");
    option.value = elem[key];
    option.innerHTML = elem[key];
    container.appendChild(option);
  });
}
