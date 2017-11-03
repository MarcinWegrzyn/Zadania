// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log(text);

var dinosaur = 'triceratops';
var newDinosaur = dinosaur.toUpperCase ();
//console.log(newDinosaur);
var newText = text.replace('Velociraptor' , newDinosaur);
//console.log(newText.length/2);
var shortText = newText.slice(0, (newText.length/2));
console.log(shortText);