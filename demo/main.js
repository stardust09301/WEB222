//for(var i = 0; i <10; i++)
//{console.log("Hello world");}
//console.log("Jenna Moon");
//console.log("jmoon32@myseneca.ca");
function calculateAge(x,y = 60)
{
    return x *y;
    //return(x || 1) + y;
    //console.log(x+y);
}

//calculateAge(40,30);
//calculateAge(45.41);


console.log(calculateAge("Harry", 30)); //NULL(NOTHING) NaN(It is not a number)

var something = calculateAge;

console.log(something(2,3));