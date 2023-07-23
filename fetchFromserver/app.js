const dataContainer = document.getElementById("data");

const getQuestions = async () => {
  const response = await fetch("http://localhost:5001/get-questions");
  const data = await response.json();
  console.log(data);
};

getQuestions();
const showData = (data) => {};
