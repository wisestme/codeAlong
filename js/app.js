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
let bestFood = prompt('what is your favourite food ?');
let addOn = 'is my most favourite';

switch(bestFood) {
	case "Oha Soup":
	alert(bestFood + " " + addOn);
	break;
	case "Olugbu":
	alert(bestFood + " " + addOn);
	break;
	case "Okazi":
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