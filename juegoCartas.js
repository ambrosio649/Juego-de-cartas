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
let generateMyCardOnHtml = document.querySelector(".button1");
let generateGameCardOnHtml = document.querySelector(".button2");
let higherButton = document.querySelector(".button3");
let lowerButton = document.querySelector(".button4");
let messageToUser = document.querySelector(".messageToUser");
let winMessage = "Has ganado";
let loseMessage = "Has perdido";

const generateMyCard = () => {
  generateMyCardOnHtml.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * deck.length);
    myCard = deck[randomNumber].number;
    return (document.querySelector(".insideCard1").textContent = myCard);
  });
};

const generateGameCard = () => {
  generateGameCardOnHtml.addEventListener("click", () => {
    let randomNumber2 = Math.floor(Math.random() * deck.length);
    secondCard = deck[randomNumber2].number;
    return (document.querySelector(".insideCard2").textContent = secondCard);
  });
};

const checkCards = () => {
  higherButton.addEventListener("click", () => {
    if (myCard < secondCard) {
      return (document.querySelector(".messageToUser").textContent =
        winMessage);
    } else if (myCard > secondCard) {
      messageToUser = "Has ganado";
    }
  });

  lowerButton.addEventListener("click", () => {
    if (myCard < secondCard) {
      messageToUser = "Has ganado";
    } else if (myCard > secondCard) {
      messageToUser = "Has perdido";
    }
  });
};

generateMyCard();
generateGameCard();
checkCards();
