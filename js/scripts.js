var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];


var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = 'Marian';

allNames.indexOf(newName) === -1 ? allNames.push(newName) : '';

console.log(allNames);