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
function makeRandomNumber(){
    return Math.floor(Math.random()*51)+1;
}
indexArray = makeArray(indexArray);
//making a random numbers unique array of 10 elements
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
console.log(indexArray);