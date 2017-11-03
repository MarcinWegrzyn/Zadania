// scripts.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';
var newList = allNames.indexOf(newName);

if (newList === -1) {
	allNames.push(newName);
} else {
	console.log('Takie imię już istnieje');
};

console.log(allNames);
