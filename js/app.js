/*
let answer = prompt('who is the wisest man?');
let ans = answer.toUpperCase();
if(ans === "SOLOMON") {
	alert('you are very sharp');
} else if(ans === 'CHIJIOKE') {
	alert('you are very sharp');
} else {
	alert('are you a murunkus ?' + answer + ' is not correct');
}
*/

/*
let randomNumber = Math.round(Math.random() * 20);

if(randomNumber % 3 === 0 && randomNumber !== 0){
	alert('fizz');
}else if(randomNumber % 5 === 0 && randomNumber !== 0) {
	alert('buzz');
}else if(randomNumber % 3 === 0 && randomNumber % 5 === 0) {
	alert('fizzbuzz');
} else {
	alert(randomNumber);
}
*/
/*
let randomNumber = Math.round(Math.random() * 20);

if(randomNumber !== 0){
	if(randomNumber % 3 === 0 && randomNumber % 5 === 0) {
	alert('fizzbuzz');
} else if(randomNumber % 3 === 0){
	alert('fizz');
}else if(randomNumber % 5 === 0) {
	alert('buzz');
} else{
	alert(randomNumber);
}
} else{
	alert(0);
}
*/
/*
let bestFood = prompt('what is your favourite food ?').toLowerCase();
let addOn = 'is my most favourite';

switch(bestFood) {
	case "oha Soup":
	alert(bestFood + " " + addOn);
	break;
	case "olugbu":
	alert(bestFood + " " + addOn);
	break;
	case "okazi":
	alert(bestFood + " " + addOn);
	break;
	case "beans":
	alert(bestFood + " " + addOn);
	break;
	case "rice":
	alert(bestFood + " " + addOn);
	break;
	default:
	alert('are you human?');
	break;
}
*/
/*
for(let i = 0; i < 20; i=i+4) {
	if(i !== 0) {
		if(i % 5 === 0 && i % 3 ===0) {
		alert('fizzbuzz');
	} else if(i % 3 === 0) {
		alert('fizz');
	} else if(i % 5 ===0) {
		alert('buzz');
	} else {
		alert(i);
	}
	} else {
		alert(i);
	}	
}
*/
/*
for(let i = 0; i < 20; i++) {
	switch(true){
		case(i !== 0):
		switch(true){
			case (i % 5 === 0 && i % 3 === 0):
			alert('fizzbuzz');
			break;
			case (i % 3 === 0):
			alert('fizz');
			break;
			case (i % 5 === 0):
			alert('buzz');
			break;
			default:
			alert(i);
			break;
		} 
		break;
		default:
		alert(i);
		break;
	}	
} 
*/
/*
let i = 0;
do {
	switch(true){
		case(i !== 0):
		switch(true){
			case (i % 5 === 0 && i % 3 === 0):
			alert('fizzbuzz');
			break;
			case (i % 3 === 0):
			alert('fizz');
			break;
			case (i % 5 === 0):
			alert('buzz');
			break;
			default:
			alert(i);
			break;
		} 
		break;
		default:
		alert(i);
		break;
	}
	i++;	
} while (i<20);
*/
/*let i = 0;
while(i < 20) {
	switch(true){
		case(i !== 0):
		switch(true){
			case (i % 5 === 0 && i % 3 === 0):
			alert('fizzbuzz');
			break;
			case (i % 3 === 0):
			alert('fizz');
			break;
			case (i % 5 === 0):
			alert('buzz');
			break;
			default:
			alert(i);
			break;
		} 
		break;
		default:
		alert(i);
		break;
	}
	i++
}
*/

/*let  name = "Wise";
alert("hello " + name);

name = "CHIJIOKE"
alert("hello " + name);

name = "Funmi";
alert("hello " + name);
*/
//let name;

/*
function greetFriend(name1, name2) {
	alert("hello " + name1 + " and " + name2);
}

greetFriend('John', 'James');
greetFriend('James');
greetFriend('Juliet');
greetFriend();
*/

/*
function fizzbuzz() {
	for(let i = 0; i < 20; i++) {
	switch(true){
		case(i !== 0):
		switch(true){
			case (i % 5 === 0 && i % 3 === 0):
			alert('fizzbuzz');
			break;
			case (i % 3 === 0):
			alert('fizz');
			break;
			case (i % 5 === 0):
			alert('buzz');
			break;
			default:
			alert(i);
			break;
		} 
		break;
		default:
		alert(i);
		break;
	}	
} 
}
*/

/*
function rectangleArea(length, width) {
	alert(length * width);
}
rectangleArea(5, 3);
rectangleArea(2, 1);
*/

/*
//function to greet colleagues array
let colleagues = ["Nnamdi", "Emmanuel", "Funmi" ];
alert(colleagues);
alert(colleagues[1]);
colleagues.push("Victoria");
alert(colleagues);
colleagues.push("Steven", "Itunu", "Esther");
alert(colleagues);

function greetColleagues(friend){
	for(let i = 0; (i < colleagues.length); i++){
	alert("Hi " + friend +" and " + colleagues[i])
}
}
greetColleagues("Marvellous");
*/

/*
car object with method
let myCar = {
	color: "red",
	brand: "Rolls",
	model: "Phantom",
	year: 2019,
	automatic: true,
	ignitionOn: true,
	startEngine: function(){
		if(myCar.ignitionOn === false){
			myCar.ignitionOn = true;
			alert("your car engine has been started");
		}
	}
};
myCar.ignitionOn = false;
myCar.startEngine();
*/

/*
// airconditioner object with method
let myAirconditioner = {
	brand: "Samsung",
	type: "split",
	model: "triangular",
	year: 2017,
	state: "OFF",
	setTemperature: 23,
	roomTemperature: 24,

	turnOn: function(){
		if(myAirconditioner.state === "OFF"){
			state = "ON";
			if(myAirconditioner.roomTemperature >= 25){
				myAirconditioner.setTemperature = 16;
				alert("your AC has been turned ON and cooling is in progress");
			} else {
				alert("your AC has been turned ON")
			}
			
		}
	}
}

myAirconditioner.roomTemperature = 20;
myAirconditioner.turnOn();
*/
/*
// fridge constructor
function Fridge(brand, type, capacity) {
	this.brand= brand;
	this.type= type;
	this.capacity= capacity;
}

let samsungSideBySide = new Fridge("Samsung", "Side by side", 200);
let hisense = new Fridge("Hisense", "Double door", 100);
let thermocool = new Fridge("Thermocool", "Table Top", 50);

alert(hisense.capacity);
*/
// Phone constructor
/*
function Phone(brand, software, networkMode) {
	this.brand = brand;
	this.software = software;
	this.network = networkMode;
}

let galaxy = new Phone("Samsung", "Android", "5");

alert("I use a " + galaxy.brand + " " + galaxy.software + " " + galaxy.network  + "G Phone");
*/
// Blackjack Game
// wisest code along with Mark Zamoyta

/*
let card1 = "Ace of Spades",
	card2 = "Ten of Hearts";

	alert("Welcome to Blackjack!");
	alert("You are dealt: ");
	alert(" " + card1);
	alert(" " + card2);
	alert(typeof(card1));
	*/
	/*
	// cities array
	let cities = ["Lagos", "Abuja", "Benin", "Ibadan"];
		cities.push("Aba");
		cities.push("Calabar");
		cities.splice(1, 3, "Kano", "Okigwe", "Lokoja");
	alert(cities);
	*/
/*
	//using array for the Blackjack game

	let deck = [
			"Ace of Spades",
			"Two of Spades",
			"Three of Spades"
	];

	let playerCards = [deck[0], deck[2]];

	alert("Welcome to Blackjack!");
	alert("You have been dealt: " + playerCards)
*/
/*
let score = 100,
	bonus,
	total;


if (score > 50) {
	 bonus = score + 10;
} else if (score > 100) {
	bonus = score + 20;
} else {
	bonus = 0;
}

total = score + bonus;

alert("your total score with bonus is: " + total);
*/
/*
let score = 10,
	bonus,
	total;

	switch(true) {
		case score > 50:
			bonus = score + 10;
			break;
		case score > 100:
			bonus = score + 20;
			break;
		default:
			bonus = 0;
			alert("play again for a score higher score");
			break;
	}
	total = score + bonus;
	alert("your total score with bonus is: " + total);
*/

// Simple for loop
/*
for (let i = 0; i < 8; i++) {
	alert(i);
}
*/

// simple while loop
/*
let count = 0;

while (count < 5) {
	alert("Jesus is coming soon");
	count++;
}
*/
	//alert("Welcome to Blackjack!");
	//alert("You have been dealt: " + getCardString(playerCards[1]));

/*
let lorem = document.getElementById('lorem_ipsum');
let clickMe = document.getElementById('clickme_button');
clickMe.addEventListener('click', function() {
	lorem.innerText = "what does Lorem mean?";
	alert("Welcome to Blackjack!");
	alert("You have been dealt: " + getCardString(playerCards[1]));
});

let removeBook = document.getElementById('book_remove');
let pythonBook = document.getElementById('python_book');
pythonBook.style.display = 'block'
removeBook.addEventListener('click', function(){
	if(pythonBook.style.display = 'block') {
		pythonBook.style.display = 'none';
	}else if(pythonBook.style.display = 'none') {
		pythonBook.style.display = 'block';
	}
	
});
*/

// add loops to Blackjack
let randomNumber = Math.round(Math.random() * 20);
let suits = ["Spade", "King", "Queen", "Heart", "Diamond"],
	values = ["Ace", "One", "Two", "Three", "Four"];

// DOM variables
let newGame = document.getElementById('new_game');
let playAgain = document.getElementById('play_again');
let quit = document.getElementById('quit');
let restart = document.getElementById('restart');
let stay = document.getElementById('stay');
let hit = document.getElementById('hit');
let textArea = document.getElementById('text_area');

// Game variables
let gameStarted = false,
	gameOver = false,
	playerWon = false,
	noWinner = false,
	playerLost = false;
	dealerCards = [],
	playerCards = [],
	dealerScore = 0,
	playerScore = 0,
	deck = [];

// Hide buttons not in use
playAgain.style.display = 'none';
quit.style.display = 'none';
restart.style.display = 'none';
stay.style.display = 'none';
hit.style.display = 'none';
showStatus();

// When new game button is clicked
newGame.addEventListener('click', function(){
	gameStarted = true;
	gameOver = false;
	playerWon = false;

	deck = createDeck();
	shuffleDeck();
	playerCards = [getLastCard(), getFirstCard(), deck[randomNumber]];
	dealerCards = [getLastCard(), getFirstCard(), deck[randomNumber]];
	
	stay.style.display = 'inline-block';
	hit.style.display = 'inline-block';
	newGame.style.display = 'none';
	showStatus();
});

// when hit button is clicked
hit.addEventListener('click', function() {
	shuffleDeck();
	playerCards.push(deck[randomNumber]);
	showStatus();
	shuffleDeck();
	giveDealerCard();
	showStatus();
	showWinner ();
})

// when stay button is clicked
stay.addEventListener('click', function() {
	whoWon();
	theEnd();
})
// function to create deck
function createDeck(){
	deck = [];
	for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++){
		for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
			let card = {
				suits: suits[suitsIdx],
				values: values[valueIdx]
			};
			deck.push(card);
		}
	}
	return deck;
}

// shuffle deck function
function shuffleDeck() {
	let i, j,
		temp = null;

	for (i = deck.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1))
		temp = deck[i];
		deck[i] = deck[j];
		deck[j] = temp;
	}
}
// function to get last card
function getLastCard(){
	return deck.pop();
}

// function to get card strings
function getCardString(card) {
	return card.values + ' of ' + card.suits;
}

// function to get first card
function getFirstCard(){
	return deck.shift();
}

// assign numeric values to cards
function getCardNumericValue(card) {
	switch(card.values) {
		case "Ace":
		return 1;
		break;
		case "Two":
		return 2;
		break;
		case "Three":
		return 3;
		break;
		case "Four":
		return 4;
		break;
		default:
		return 10;
		break;
	}
}

// function to get score
function getScore(cardArray) {
	let score = 0;
	let hasAce = false;
	for (let i = 0; i < cardArray.length; i++) {
		let card = cardArray[i];
		score += getCardNumericValue(card);
		if (card.values === 'Ace') {
			hasAce = true;
		}
	}
	if (hasAce && score + 10 <= 21) {
		return score + 10;
	}
	return score;
}

// function to update score
function updateScore() {
	dealerScore = getScore(dealerCards);
	playerScore = getScore(playerCards);
}
//shuffleDeck();

function showStatus(){
	if(!gameStarted){
		textArea.innerText = "Ready for Blackjack???";
		return;
	} else {
		textArea.innerText = "Blackjack is here!!!";
	}
/*
	// display all our cards
	for (var i = 0; i < deck.length; i++) {
		textArea.innerText += '\n' + getCardString(deck[i]);
	}
*/
// cards for player
	let dealerCardString = '';
	for(let i = 0; i < dealerCards.length; i++) {
		dealerCardString += getCardString(dealerCards[i]) + '\n';
	}

	let playerCardString = '';
	for(let i = 0; i < playerCards.length; i++) {
		playerCardString += getCardString(playerCards[i]) + '\n';
	}

	updateScore();

	textArea.innerText =
		'Dealer has:\n' +
		dealerCardString + 'score:' + dealerScore + '\n\n' +

		'Player has:\n' +
		playerCardString + 'score:' + playerScore;
}

/*
// winner function
function whoWins() {
	if (playerScore === dealerScore){
		textArea.innerText = "IT'S A TIE";
	} else if (playerScore > dealerScore) {
		textArea.innerText = "YOU WON";
	} else {
		textArea.innerText = "YOU LOST";
	}
}
*/
function whoWon() {
	if(playerScore > dealerScore) {
		playerWon = true;
	} else if (playerScore === dealerScore) {
		noWinner = true;
	} else {
		playerLost = true;
	}
}

function theEnd () {
	if (playerWon) {
		textArea.innerText += "YOU WIN. Congratulations!!!"
	} else if (noWinner) {
		textArea.innerText += "Its a draw."
	} else {
		textArea.innerText += "You lost. Sorry!!!"
	}
}

function showWinner () {
	if ((playerScore > 21) || (dealerScore > 21)) {
		theEnd();
	}
	if(playerScore > 21 && dealerScore <= 21) {
		playerWon = false;
	} else if (dealerScore > 21 && playerScore <= 21) {
		dealerWon = false;
	} else {
		noWinner = true;
	}
}

function giveDealerCard () {
	if (playerScore < 21) {
		shuffleDeck()
		dealerCards.push(deck[randomNumber]);
	}
}




