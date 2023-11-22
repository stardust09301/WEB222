let chart = new Chart("chart",{
    type:'bar',
    data: {
        labels:[
            'Unknown',
            '< 19',
            '20-29',
            '30-39',
            '40-49',
            '50-59',
            '60-69',
            '70-79',
            '80-89',
            '90+'
        ],
        datasets: [{
            data:[1, 11, 15, 37, 30, 27, 15, 7, 13, 10],
            backgroundColor: 'lightblue',
            label: 'Cases by Age Group'
        }]
    }
});
//var greeting = "Hello from script.js"; you can't write this because the variable is colliding
function greetings(text){
    console.log("Hello", text);
}
console.log("Hello world from script.js");