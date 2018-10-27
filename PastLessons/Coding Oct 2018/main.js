$(document).ready(function(){
	/*
	*We are now using the jQuery liberary
	*/
	'use strict'
	console.log('main.js is loaded');
	console.log('We are now in jQuery land');

	//key word, identifier and value
	let myFirstVariable ="hello!";

	console.log(myFirstVariable);

	myFirstVariable = "I changed my mind.";

	console.log(myFirstVariable);

	var escapeExample ="I said \"this is an example of escaping\" to everyone.";

	console.log (escapeExample);

	var specialCharExample = "this string includes \n a new line"
	console.log (specialCharExample);

	var concatExample = myFirstVariable + " " + escapeExample;

	let yetAnotherConcat = "This is concat example number" + 2;
	console.log (yetAnotherConcat);

	let car = {
		color:'red',
		speed: 'fast',
		type: 'Corvette'
	};

		car.drive = function(){
			console.log('Hey, my car is driving');
			console.log('Vroom, vroom!');
			console.log('It is driving really fast!');
		}
	console.log("What color is this car? " + car.color);
	car.drive();

});
