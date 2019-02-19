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

let randomNumber = Math.round(Math.random() * 5);

if(randomNumber % 3 === 0){
	alert('fizz');
}else if(randomNumber % 5 === 0) {
	alert('buzz');
} else {
	alert(randomNumber);
}
