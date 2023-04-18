let sticks = ["espadas", "treboles", "diamantes", "corazones"];
const cardNumber = [
  { number: "as", value: 14 },
  { number: "dos", value: 2 },
  { number: "tres", value: 3 },
  { number: "cuatro", value: 4 },
  { number: "cinco", value: 5 },
  { number: "seis", value: 6 },
  { number: "siete", value: 7 },
  { number: "ocho", value: 8 },
  { number: "nueve", value: 9 },
  { number: "diez", value: 10 },
  { number: "jota", value: 11 },
  { number: "reina", value: 12 },
  { number: "rey", value: 13 },
];

const deck = [];

const introduceSticks = (palo) => {
  for (i = 0; i < cardNumber.length; i++) {
    deck.push({
      number: cardNumber[i].number,
      symbol: palo,
      value: cardNumber[i].value,
    });
  }
};
introduceSticks("espadas");
introduceSticks("treboles");
introduceSticks("diamantes");
introduceSticks("corazones");
console.log(deck);
let myCard;
let secondCard;
const generateMyCard = () => {
  let randomNumber = Math.floor(Math.random() * deck.length);
  myCard = deck[randomNumber].value;
  console.log(deck[randomNumber]);
  generateGameCard();
};
const generateGameCard = () => {
  let randomNumber2 = Math.floor(Math.random() * deck.length);
  secondCard = deck[randomNumber2].value;
  askToUser();
};
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

generateMyCard();
