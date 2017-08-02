//global Objectvalues//
var data = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
var valuesArr = [];

function objectValues(object) {
  return (Object.values(object));
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

function valuesToString(obj) {        //what should x be named?
  var objectValues = [];
  for (var key in obj) {
  
   if (typeof obj[key] === "string") { 
                                    //typeof and .filter to get string values
    objectValues.push(obj[key]) ;
    }
 
  }
  return objectValues.join(' ');
}

valuesToString(data);
console.log(valuesToString(data));

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
  var capName = obj.name.charAt(0).toUpperCase()+ obj.name.substr(1);
  var capSpecies = obj.species.charAt(0).toUpperCase()+ obj.species.substr(1);
  return capName + ' is a ' + capSpecies;
}
profileInfo(pet);
console.log(profileInfo(pet));            //returns "Shadow is a Dog"

/* global  maybeNoises*/



function maybeNoises (obj) {
  if (obj.hasOwnProperty('noises') === true && obj.noises.length > 0) {
    console.log('this ran');
    return obj.noises.join(" ", ",");  
    }                                //.join(separater, charBeingReplaced)
  else {
    return "there are no noises";
  }
}


/* global  hasWord*/
var data = "This is a super awesome string of words";
function hasWord(string, word) {
  
  if (string.search(word) > -1) {
    return true; 
  }
  
    return false;
  
    
}
console.log(hasWord("super"));     //returns true
console.log(hasWord("duper"));     //returns false


/* global addFriend */


function addFriend (name, obj) {
  obj.friends.push(name);
  return obj;

}




/* global isFriend */

function isFriend(name, obj) {
  if (obj.hasOwnProperty('friends') && obj.friends.indexOf(name) > -1){
    return true;
  }
    else {
      return false
    }
}



 /* global nonFriends */
 function nonFriends (name, list) {
   var result = [];
   for (var i = 0; i < list.length; i++) {
     if (!isFriend(name, list[i]) && list[i].name !== name) {
       result.push(list[i].name);
     }
   }
   return result;
 }
 
 
 /* global updateObject */  //and RETURN new object
 function updateObject (object, key, value) {
     if (object){
         object[key] = value;
     }
     console.log(object);
   return object;
 }
 
 
 /* global removeProperties */ //RETURN new object
 function removeProperties (object, array) {
    for (var i = 0; i < array.length; i ++) { 
        for (var key in object){
            if (key == array[i]){
                delete object[key];
            }
        }
        console.log(object);
    }    
     return object;
 }
 
 
  /* global dedup */

function dedup (arr) {
      return arr.filter(function(value, index){
            return arr.indexOf(value) == index;
      });
}
console.log(dedup([1,2,2,2,3,4,5,5,5,5,"a","b","b","b","c"]));   //returns [1, 2, 3, 4, 5, "a", "b", "c"










































