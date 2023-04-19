let sticks = ["espadas", "treboles", "diamantes", "corazones"];
let cardNumber = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let usedCards = [];
let randomCard;
const generateCard = () => {
  let randomNumber = Math.floor(Math.random() * 13);
  let randomNumber2 = Math.floor(Math.random() * 13);
  currentNumber = cardNumber[randomNumber];
  currentStick = sticks[randomNumber2];
  currentCard = currentNumber + currentStick;
  console.log(currentCard);
};

generateCard();

const askToUser = () => {
  let question = prompt("Crees que la carta es mayor o menor?");
  if (question === "mayor" && myCard < secondCard) {
    console.log("La carta que ha salido es de valor: " + secondCard);
    console.log("Has ganado!");
    playAgain();
  } else if (question === "menor" && myCard < secondCard) {
    console.log("La carta que ha salido es de valor: " + secondCard);
    console.log("Has perdido!");
    playAgain();
  } else if (question === "mayor" && myCard > secondCard) {
    console.log("La carta que ha salido es de valor: " + secondCard);
    console.log("Has perdido!");
    playAgain();
  } else if (question === "menor" && myCard > secondCard) {
    console.log("La carta que ha salido es de valor: " + secondCard);
    console.log("Has ganado!");
    playAgain();
  }
};

const playAgain = () => {
  let playOrNot = prompt("Quieres volver a jugar? si/no");
  if (playOrNot === "" || playAgain === null) {
    console.log("Escribe bine la respuesta por favor");
    playAgain();
  } else if (playOrNot.toLowerCase === "si") {
    generateMyCard();
  } else if (playOrNot.toLowerCase === "no") {
    console.log("Adios");
  }
};
