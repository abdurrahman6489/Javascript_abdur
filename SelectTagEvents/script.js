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
countries.addEventListener("input", () => {
  let selectedIndex = findSelectedIndexOfSelectTag(countries);
  makeSelectTagOptions(array[selectedIndex].States, "State", states);
  findCountryState();
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
function findCountryState() {
  let selectedIndexCountries = findSelectedIndexOfSelectTag(countries);
  let selectedIndexStates = findSelectedIndexOfSelectTag(states);
  let countrySelected = array[selectedIndexCountries].country;
  let stateSelected =
    array[selectedIndexCountries].States[selectedIndexStates].State;
  let capitalSelected =
    array[selectedIndexCountries].States[selectedIndexStates].Capital;
  displaydetails(divElem, countrySelected, stateSelected, capitalSelected);
}
states.addEventListener("input", findCountryState);
function displaydetails(container, country, State, Capital) {
  container.innerHTML = `
  <h2>Country selected : ${country}</h2>
  <p>State selected : ${State}</p>
  <p>Capital is ${Capital}</p>
  `;
}
