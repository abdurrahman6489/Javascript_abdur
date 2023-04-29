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
console.log(array[0]);
const countries = document.getElementById("countries");
const states = document.getElementById("states");
const divElem = document.querySelector(".chosenvalue");

function deleteElements(container) {
  container.innerHTML = "";
}
