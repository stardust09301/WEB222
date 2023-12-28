/*
Name : Jenna Moon
Section : NDD
Date : 2023-09-22
Student Number : 134957224
Email address : jmoon32@myseneca.ca
*/

//1 - Console Output (console.log): prints name and a greeting message
console.log("Hello, Jenna!");

//2 - Variable Declaration and Usage:
var userAge;  //Declare a variable called userAge
userAge = 14;  //assign your age
console.log("You are"+" " +userAge+" "+"years old.");  //to display a message

/*3 - Function Creation and Invocation:
Function called calculateArea that takes two parameters:*/
function calculateArea(width, height)
{
   area=width *height; // calculate the area of a rectangle
   return area;  //return the result
}

/*Call this function with different values, 
and use console.log to print the area.*/
console.log("The area of rectangle one :",calculateArea(5,2));
console.log("The area of rectangle two :",calculateArea(2.5,5.2));
console.log("The area of rectangle three :",calculateArea(10,10));

/*4 - Loops (for loop):
a for loop to print the numbers from 1 to 10*/
for(var i=1; i<=10; i++) //increment
{
    console.log(i);  //print each number
}

/*5 - Loops (while loop):
a while loop to count down from 10 to 1 
and print the countdown values to the console.*/
var j=10;
while(j <= 10 && j > 0)
{
    console.log(j);
    j--; //decrement
}