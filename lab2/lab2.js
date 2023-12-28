/**
 * WEB222 – Quiz/Lab #2
 *
 * I declare that this labs is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Jenna Moon
 *      Student ID: 134957224
 *      Date: 2023-10-06
 *
 */

/*******************************************************************************
 * Lab 2: Complete and/or modify the code below as per the instructions included in
 * each individual question. Your code should run in NODE.js as shown in class.
 * Some questions may need to be modified in order to run correctly, or written from
 * scratch. You may decide.
 *
 * Note, you can create your answer beneath the question comment itself
 */

/*******************************************************************************
 * Q1:
 * create a function that displays each character of this string on the screen
 * with a space between each letter. The string must appear on one line
 *
 * Example output
 * H e l l o   W o r l d ,   I ' m   a   n e w   j a v a s c r i p t   p r o g r a m m e r
 */

console.log("*******************************************************************************");
console.log("Q1"+":");

const stringData = "Hello World, I'm a new javascript programmer";
function insertSpaces(stringData) {
    return stringData.split("").join(" ");
}
let result = insertSpaces(stringData);
console.log(result);
/*******************************************************************************
 * Q2:
 * Replace all of the pipe "|" characters with a comma ",". Note, Older versions of
 * Javascript do not have a replaceall function. Find a way to replace these.
 * Example output:
 * Harry,Jim,Jeswin,Gurpreet,Sam,Tobias,Angel,Tong
 */

console.log("*******************************************************************************");
console.log("Q2"+":");

var names = "Harry|Jim|Jeswin|Gurpreet|Sam|Tobias|Angel|Tong";
var newchar = ",";
names = names.split('|').join(newchar);

const replacedResult = names;
console.log(replacedResult);

/*******************************************************************************
 * Q3:
 * Split the names string into an ARRAY based on the ',' and display the names vertically on the screen
 * Example Output:
 * Harry
 * Jim
 * Jeswin
 * Gurpreet
 * Sam
 * Tobias
 * Angel
 * Tong
 */

console.log("*******************************************************************************");
console.log("Q3"+":");

//Use the 'split()' method to split the string at every comma into an array
const newArray = replacedResult.split(",");

//Within each iteration, assign the value at index 'i' from the 'newArray' to the variable 'word'
for (i = 0; i<8; i++){
    let word = newArray[i];
    console.log(word);
}

/*******************************************************************************
 * Q4:
 * Write a function that extracts the area code from a phone number and display it
 * on the screen. You can use a regex if you want, but your function must work for
 * all three types of phone numbers.
 * Example Output:
 * 519
 */

console.log("*******************************************************************************");
console.log("Q4"+":");

var phoneNum1 = "(519)-555-5555";
var phoneNum2 = "519-555-5555";
var phoneNum3 = "5195555555";

function stripAreaCode(num){
    //A regular expression to remove all non-digit characters
    //Take the substring of the result, keeping the first 3 characters
   var stripNum = num.replace(/\D/g, "").substr(0, 3);
   return stripNum;
}

console.log("The area code is: " + stripAreaCode(phoneNum1));
console.log("The area code is: " + stripAreaCode(phoneNum2));
console.log("The area code is: " + stripAreaCode(phoneNum3));

/*******************************************************************************
 * Q5:
 * Create a simple int array that holds X amout of numbers. Initalize the array
 * when you create it. Output the array to the screen.
 * Example Output:
 * 5,5,6,10,3,1,6
 */

console.log("*******************************************************************************");
console.log("Q5"+":");

var x = 7;
const numArray = [5,5,6,10,3,1,6];

function printNumArray(){
    //'join()' method to concatenate the elements of numArray into a single string
    // Separated by a comma (',')
    var output = numArray.join(',');
    console.log(output);
}

printNumArray();

/*******************************************************************************
 * Q6:
 * Create a new object called "person". Give the person object 2 properties;
 *
 * name
 * age
 *
 * name should be a string array, the first position holds your first name, and second your last.
 * age should be a number, date
 *
 * output the entire object to the console.
 */

console.log("*******************************************************************************");
console.log("Q6"+":");

//Create a new object called "person" object with 2 properties
var person = {
    name : ["Jenna", "Moon"],
    age : new Date("2008-12-10").toISOString().slice(0,10),
};

console.log("*Output the entire object to the console.")

//Use the spread operator ({ ...person }) to make copy of "person" object
//The 'name' property with a string joined from its array element
console.log({ ...person, name: person.name.join(" ") });
/*******************************************************************************
 * Information:
 *
 * DOT NOTATION
 *
 * The object name (person) acts as the namespace — it must be entered first to access
 * anything inside the object. Next you write a dot, then the item you want to access
 * — this can be the name of a simple property, an item of an array property, or a call
 *  to one of the object's methods.
 *
 * If you defined your object correctly in Q6, the following code should display your
 * name and age
 * ex:
 ********************************************************************************/
console.log("**************************");
console.log("For reference: Using DOT NOTATION");
//Personal reference: Use following to get rid of comma 
//between first name and last name instead of using ${person.name}
console.log(`Name: ${person.name[0]} ${person.name[1]}`);
console.log(`Age: ${person.age}`);

/*******************************************************************************
 * Q7:
 *
 * Redfine (recreate) your person object to include a function.
 * The function should be called "bio" and should output your first name,
 * last name and age to the console when you call it.
 *
 * Make sure to use DOT notation for your output.
 *
 * ex:
 * Harry Scanlan is 35 years old
 *
 * Use your function to display the output to the screen.
 *
 */

console.log("*******************************************************************************");
console.log("Q7"+":");

//Redefine person object to include a function called "bio"
var person = {
    name: ["Jenna", "Moon"],
    age: 14,

    //The function bio output your first name,last name and age.
    bio: function() {
        return `${this.name[0]} ${this.name[1]} is ${this.age} years old.`;
        }
};

console.log(person.bio());

/*******************************************************************************
 * Q8:
 * Using the same Object from Q7, ADD a new property to your object.
 * This property should be called "studentid" and should be defaulted to your
 * student number.
 *
 * DO NOT redefine your object. You must ADD the property to it.
 *
 * You may have to research "how to add a new property to a javascript object"
 *
 * Make sure to use DOT notation for your input/output.
 *
 * Display the entire object using the console.
 */

console.log("*******************************************************************************");
console.log("Q8"+":");

//Adding the "studentid" property to the object
person.studentid = 134957224;

//Making new format object for printing out the entire "person" object
var newFormatPerson = {
    name: person.name.join(" "),
    age: person.age,
    bio: person.bio(),
    studentid: person.studentid
  };
  
//Display the entire object
console.log(newFormatPerson);

//Display the entire object
//console.log("**************************");
//console.log("Printing the object again!")
//Another way to display the entire object for personal reference
//console.log({ ...person, name: person.name.join(" "), bio: person.bio()});

/*******************************************************************************
 * Q9:
 * Using the same object from Q7, ADD a new function called "introduceSelf()"
 *
 * DO NOT redefine your object. You must ADD the property to it.
 *
 * The function should introduce yourself by just your first name and your student id.
 *
 * Call your function to display your output.
 *
 * Ex:
 * Hi! I'm Harry and my student id is 1234567.
 */

console.log("*******************************************************************************");
console.log("Q9"+":");

//Add a new function called 'introduceSelf()' for the 'person' object
person.introduceSelf = function (){
    console.log(`Hi! I'm ${this.name[0]} and my student id is ${this.studentid}.`)
}

//Call the function
person.introduceSelf();

/*******************************************************************************
 * Information:
 * An object like this is referred to as an object literal — we've literally written
 * out the object contents as we've come to create it. This is different compared to
 * objects instantiated from classes, which we'll look at later on.
 ********************************************************************************/


/*******************************************************************************
 * Q10:
 * So far we've been using DOT notation, but we can also use Bracket Notation when
 * accessing objects.
 *
 * Display your FIRST NAME only and age using Bracket notation in the console.
 *
 */

console.log("*******************************************************************************");
console.log("Q10"+":");

const studentNameAndAge = person["name"][0] + " is " + person["age"] + " years old.";

console.log(studentNameAndAge);
/*******************************************************************************
 * Q11:
 * Add another function to your person object that outputs the same as bio(), but
 * uses BRACKET notation for the output instead of DOT notation. 
 * 
 * Call the function bioBracket() and then use it to display your output

 */

console.log("*******************************************************************************");
console.log("Q11"+":");

//Add the function bioBracket() to person object that outputs the same as bio(), but
//uses BRACKET notation for the output. 
person.bioBracket = function() {
    console.log(`${person['name'][0]} ${person['name'][1]} is ${person['age']} years old.`);
    console.log(`${person['name'][0]}'s student ID is ${person['studentid']}.`);
  };
  
  person.bioBracket();