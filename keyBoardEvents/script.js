const typeElement = document.getElementById("type");
document.addEventListener("keydown", (e) => {
  console.log(e);
  if (!e.getModifierState(e.key) && e.key !== "Backspace" && !e.ctrlKey) {
    typeElement.innerHTML += e.key;
  } else {
    if (e.key == "Backspace")
      typeElement.innerHTML = typeElement.innerHTML.slice(0, -1);
  }
});
const dragElem = document.getElementById("dragElem");
dragElem.addEventListener("dragstart", (e) => {
  console.log(e);
  dragElem.classList.add("dragging");
});
dragElem.addEventListener("dragend", (e) => {
  console.log(e);
  dragElem.classList.remove("dragging");
});
typeElement.addEventListener("dragover", (e) => {
  e.preventDefault();
  const draggingElem = document.querySelector("#dragElem.dragging");
  typeElement.appendChild(draggingElem);
});
