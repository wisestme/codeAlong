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

function rectangleArea(length, width) {
	alert(length * width);
}
rectangleArea(5, 3);
rectangleArea(2, 1);