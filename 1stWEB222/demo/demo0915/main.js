var firstNamewhatever = "Harry";
var lastName = "Scanlan";
var age = "29";
var b1 = false;
var b2 = 18;

var b3 = 12;
var b4 = 34;
var b5 = "Harry";
var b6 = "Harry";

console.log("Hello");
console.log(age + 12);
console.log(firstNamewhatever + " " + lastName);
console.log(b1);
console.log(b2 + "Hello");
console.log(b3 < b4);
console.log(b3 == b4);
console.log(b3 != b4);
console.log("Hello");
//To compare strings?
console.log(b5 === b6);

console.log("=============");
console.log("START OF CODE");
var b11 = 52;
var b12 = 30;
var b13 = 40;
console.log(b11 < b12 || b13 > b12);
console.log(b11 < b12 && b13 > b12);


console.log(b11 < b12 )
if (b11 > b12){
    console.log("If");
}else if (b11 < b12){
    console.log("Else if");
} else {
    console.log("Else");
}
console.log("END OF CODE");

for(var i = 0; i <10; i++){
    console.log(i);
}

//create a variable called label and assign it the value "senecacollege"
var label = "senecacollege";
//tld - top label domain

var tld = "ca";
//
var domainName = label + '.'+tld;

console.log(domainName);
//
var domainName = "google.com";
var isSeneca=false;
//const isSeneca = domainName === "senecacollege.ca"; 
if(domainName === "senencacollege.ca")
{
    isSeneca = true;
}
else 
{
    isSeneca = false; 
}
console.log(isSeneca);

function calculateAge(){
    console.log("In CalculateAge");
    console.log("In CalculateAge");
    console.log("In CalculateAge");
    console.log("In CalculateAge");
}
calculateAge();
calculateAge();



/*calculateAge1();
function calculateAge1(age,y){
    console.log((x+y)-(y*2)/(x/5));

}
calculateAge1(40,30);
calculateAge1(45,41);
*/
console.log("End again");