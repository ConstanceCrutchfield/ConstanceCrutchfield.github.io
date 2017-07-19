//global Objectvalues//
var data = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
function objectValues(x) {
  
  return console.log(Object.values(x));
}

objectValues(data);
console.log(objectValues(data));

//global keysToString//
function keysToString(x) {
   
  var objectKeys = Object.keys(x);
  return objectKeys.join(' ');
}

keysToString(data);
console.log(keysToString(data));


//global ValuesToString
var data = {a: "one", boolean: false, b: "two", 
              ponies: "crayons", something: {}, dingle: "dangle"};

function valuesToKeys(x) {        //what should x be named?
  
  var objectValues = Object.values(x);
  
  var objectValuesStrings = objectValues.filter(function(value) {
  if (typeof value == "string")        //typeof and .filter to get string values
    return value;
});
 
  return objectValuesStrings.join(' ');
}

valuesToKeys(data);
console.log(valuesToKeys(data));

//global array or Object

function arrayOrObject(arg) {
  
    if  (Array.isArray(arg) === true)
        return "array";
      else if (typeof arg === 'object')
        return "object";
    
}
arrayOrObject(data);
console.log(arrayOrObject({a:"one"}));     //returns "object"
console.log(arrayOrObject([1,2,3]));       //returns "array"
console.log(arrayOrObject(25));            //returns undefined

 /* global capitalizeWord*/
 
 function capitalizeWord (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}                              //must add remaining char minus capitol char

capitalizeWord("hello");
console.log(capitalizeWord("hello"));   //returns "Hello"


/* global  capitalizeAllWords*/

function capitalizeAllWords (arrayOfStrings) {
  var indivWords = arrayOfStrings.split(' ');     //split string into separate words in array
  for (var i = 0 ; i < indivWords.length ; i++) {
    indivWords[i] = indivWords[i].charAt(0).toUpperCase()+ indivWords[i].substr(1);
  }
    return indivWords.join( ' ');                //re-join separate words into single string
}
capitalizeAllWords ("one two three four");
console.log(capitalizeAllWords ("one two three four"));    //returns "One Two Three Four"

/* global  welcomeMessage*/

var pet = {
  name: "shadow",
  species: "dog",
  age: 2
};
function welcomeMessage (obj) {
  var capName = obj.name.charAt(0).toUpperCase()+ obj.name.slice(1);
  return "Welcome " + capName + "!";
}
welcomeMessage(pet);
console.log(welcomeMessage(pet));         //returns "Welcome Shadow!"


 /* global  profileInfo*/
 
 function profileInfo (obj) {
  var capName = obj.name.charAt(0).toUpperCase()+ obj.name.slice(1);
  var capSpecies = obj.species.charAt(0).toUpperCase()+ obj.species.slice(1);
  return capName + ' is a ' + capSpecies + '!';
}
profileInfo(pet);
console.log(profileInfo(pet));            //returns "Shadow is a Dog!"

/* global  maybeNoises*/

var duck = {
  name: "Donald",
  noises: ["quack", "squeek", "What's the big idea?!"]
};

function maybeNoises (obj) {
  if (obj.noises) 
    return obj.noises.join(" ", ",");       //.join(separater, charBeingReplaced)
  else
    return "there are no noises";
  
}
maybeNoises(pet);
maybeNoises(duck);
console.log(maybeNoises(pet));           //returns "there are no noises"
console.log(maybeNoises(duck));           //returns "quack squeek What's the big idea?!"

/* global  hasWord*/

function hasWord(word) {
  var data = "This is a super awesome string of words";
  if (data.includes(word))
    return true; 
  else return false;
    
}
console.log(hasWord("super"));     //returns true
console.log(hasWord("duper"));     //returns false


/* global addFriend */

var guy1 = {
    name: "John",
    friends: ["Shake", "Bake"]
  };
  var guy2 = {
    name: "Frank",
    friends: ["Ann"]
  };

function addFriend (name, obj) {
  obj.friends.push(name);
  return obj.friends;

}

console.log(addFriend("John", guy2));   //returns ["Ann", "John"]
console.log(addFriend("Ann", guy1));    //returns ["Shake", "Bake", "Ann"]


/* global isFriend */

function isFriend(name, obj) {
  if (obj.friends.includes(name))
    return true;
    else
      return false;
}
console.log(isFriend("Shake", guy1));    //returns true
console.log(isFriend("Shake", guy2));    //returns false


 /* global nonFriends */
 
 
 
 /* global updateObject */
 
 
 
 /* global removeProperties */
 
 
 
  /* global dedup */

function dedup (arr) {
      return arr.filter(function(value, index){
            return arr.indexOf(value) == index;
      });
}
console.log(dedup([1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"]));   //returns [1, 2, 3, 4, 5, "a", "b", "c"










































