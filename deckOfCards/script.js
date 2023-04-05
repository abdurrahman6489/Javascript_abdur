// cardsNames
const cardNames = [
    '2C', '2D', '2H', '2S', 
    '3C', '3D', '3H', '3S', 
    '4C', '4D', '4H', '4S', 
    '5C', '5D', '5H', '5S', 
    '6C', '6D', '6H', '6S', 
    '7C', '7D', '7H', '7S', 
    '8C', '8D', '8H', '8S', 
    '9C', '9D', '9H', '9S', 
    '10C', '10D', '10H', '10S',
    'AC', 'AD', 'AH', 'AS',
    'JC', 'JD', 'JH', 'JS', 
    'KC', 'KD', 'KH', 'KS',
    'QC', 'QD', 'QH', 'QS'];
let indexArray = [];
let cardClassArray = ["spade","diamond","club","hearts"];
function makeRandomNumber(){
    return Math.floor(Math.random()*51)+1;
}
indexArray = makeArray(indexArray);
//making a random numbers unique array of 52 elements
function makeArray(array){
    while(array.length<51){
        let number = makeRandomNumber();
        if(!array.includes(number)){
            array.push(number);
        }
    }
    let number = makeRandomNumber();
    array.splice(number,0,0);
    return array;
}
// indexArray.sort((a,b)=> (a-b));
// console.log(indexArray.length);
function deleteCards(cardContainer){
    while(cardContainer.firstChild){
        cardContainer.removeChild(cardContainer.firstChild);
    }
}
displayCards(indexArray,cardNames,cardClassArray);
function displayCards(indexArray,cardNames,cardClassArray){
    const cardContainer = document.querySelector(".cards");
    for(let i = 0; i<indexArray.length;i++){
        const card = document.createElement("div");
        card.classList.add("card");
        cardContainer.appendChild(card);
        card.draggable = "true";
        let currentIndex = indexArray[i];
        let cardName = cardNames[currentIndex];
        let cardInitialLetter = (cardName.charAt(cardName.length-1)).toLowerCase();
        let currentClassIndex = (cardClassArray.findIndex(elem => elem.startsWith(cardInitialLetter)));
        let currentClass = cardClassArray[currentClassIndex];
        // console.log(currentClass);
        card.classList.add(currentClass);
        card.id = String(currentIndex);
        let image = cardNames[currentIndex];
        card.innerHTML = 
        `<img class="cardImage" src="https://raw.githubusercontent.com/Newton-School/Deck_of_Cards/fa407f148d47a473a12602d2bd3982be3962681f/JPEG/${image}.jpg" alt="cards"/>
        `;
    }
}
addEventListenerToResetBtn();
function addEventListenerToResetBtn(){
    const resetBtn = document.getElementById("restart");
resetBtn.addEventListener("click",()=>{
    const cardContainer = document.querySelector(".cards");
    deleteCards(cardContainer);
    const cardholders = document.querySelector(".cardholders");
    cardholders.innerHTML =
    `<button id="restart">Restart</button>
    <div draggable="false" class="cardContainer spade" id="100">spade</div>
    <div  draggable="false" class="cardContainer diamond" id="101">diamond</div>
    <div draggable="false" class="cardContainer club" id="102">club</div>
    <div draggable="false" class="cardContainer hearts" id="103">hearts</div>`;
    let newIndexArray = [];
    newIndexArray = makeArray(newIndexArray);
    displayCards(newIndexArray,cardNames,cardClassArray);
    addEventlistenerToCards();
    addEventListenerTocardHolders();
    addEventListenerToResetBtn();
})
}

addEventlistenerToCards();
function addEventlistenerToCards(){
    const cards = document.querySelectorAll(".card");
cards.forEach(card =>{
    card.addEventListener("dragstart",(e)=>{
        card.classList.add("dragging");
        // console.log(card.classList[1]);
    });
    card.addEventListener("dragend",(e)=>{
        card.classList.remove("dragging");
        // console.log(card.classList);
    })
})
}
addEventListenerTocardHolders();
function addEventListenerTocardHolders(){
    const cardContainers = document.querySelectorAll(".cardContainer");
    cardContainers.forEach(cardContainer =>{
        cardContainer.addEventListener("dragover",(e)=>{
            e.preventDefault();
            console.log("cardcontainer class ",cardContainer.classList[1]);
            const draggingCard = document.querySelector(".dragging");
            // console.log("dragging Cad class ",draggingCard.classList[1]);
            if(cardContainer.classList[1] === draggingCard.classList[1])
                cardContainer.appendChild(draggingCard);
            // deleteCards(cardContainer);
        })
    })
}
