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
