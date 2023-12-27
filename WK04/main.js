//Object- class
//Inheritance
//json = javascript object notation
class Person
{
    firstName;
    lastName;
    age;
    
    constructor(_firstName, _lastName,_age) //constructor with 3 variables
    {
        this.firstName = _firstName; //use this to avoid undefined
        this.firstName = _lastName;   //to differentiate, use underscore
        this.firstName = _age;

  
    }

    //To avoid typing redundant info
         fullName() 
         {
            return this.firstName + " " + this.lastName;
         }
}

var person = new Person("Harry","Scanlan",36);
//var person = new Person()
//person.firstName = "Harry";
//person.age = 35;
//console.log(person.firstName);
//console.log(person.firstName + " " + person.lastName);
console.log(person.fullName());

class Students extends Person
{
    email;
    studentId;

    constructor(_firstName, _lastName,_age, _email, _studentId)
    {
        super(_firstName, _lastName,_age);
        this.email = _email;
        this.studentId = _studentId;

    }
}

var student = new Students("Harry","Scanlan", 36, "abc@seneca.ca", 12323232);

console.log(JSON.stringify(student)); //way to pass object
//jsonformatter.curiousconcept.com
//e.g.json c# converter

//You can put classes inside the classes
//We can parse JSON into an object
