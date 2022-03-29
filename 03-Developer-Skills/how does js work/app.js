/*
#Hoisting
*/
/*
// function declaration
calcAge(1990); 
function calcAge(year) {
    console.log(2022 - year);
}

//function exprassion

var retirement = function(year) {
    console.log(65 - (2022 - year));
}

retirement(1990);

// variables hoisting

// scope
console.log(age);
var age = 23;

function foo() {
    var age = 65;
    console.log(age);
}
foo()

console.log(age);


*/

// scoping example
/*
var a = "Hello!";
first();

function first() {
    var b = "HI";
    second();

    function second(){
        var c = "Hey";
        console.log(a + b+ c);
    }

}*/
/*
var a = "Hello!";
first();

function first() {
    var b = "HI";
    second();

    function second(){
        var c = "Hey";
        console.log(a + b+ c);
        third();
    }

}
function third() {
    var d= "John";
    console.log(c);
}
*/ 
