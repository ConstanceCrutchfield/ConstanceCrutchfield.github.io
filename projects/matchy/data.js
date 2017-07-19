/** 
 * Part 1
 * 
 * In this file, we're going to practice 
 * creating and accessing data structues.
 * 
 * See the README for detailed instructions, 
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "bear";
animal["name"] = "Yogi";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "Hey Boo Boo!";
noises.push("a pic-a-nic basket!");
noises.unshift("Smarter than the av-er-age bear!");
noises[noises.length -1] = "I'm Yogi!";

console.log(noises.length);
console.log(noises.length -1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
noises.push("Grrrawr!");
console.log(noises);
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 console.log(key);
 *console.log(obj.key);
 console.log(obj[key]);
 * 2. What are the different ways of accessing elements on arrays?
 *console.log(arr[arr.length]);
 console.log(arr[][]);
 * *******************************************************************
 */

/* ******************************************************************* 
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself 
 * a rest when you can! Grab a drink and have a think! 
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);

var duck = {
    species: "duck",
    name: "Jerome",
    noises: ["quack", "honk", "sneeze", "whoosh"]
};

animals.push(duck);
console.log(animals);

var monkey = {
    species: "monkey",
    name: "Mojo",
    noises: ["MOJO JOJO!", "I am Mojo Jojo!", "Mojo is hungry"]
};

var bunny = {
    species: "bunny",
    name: "Happy",
    noises: ["Hi. Eat me.", "Cute but psycho", "This sux"]
};

animals.push(bunny, monkey);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//an array is pretty much a list of elements
var friends = ["Jerome"];


function getRandomAnimal(animals) {
   
    return (animals[Math.floor(Math.random() * (animals.length -1))]);
}

console.log(getRandomAnimal(animals));

bunny.friends = friends[0];
console.log(friends);


/** 
 * Nice work! You're done Part 1. Pat yourself on the back and 
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.animal = animal;
    module.exports.noises = noises;
    module.exports.animals = animals;
    module.exports.friends = friends;
    module.exports.getRandom = getRandom;
}
