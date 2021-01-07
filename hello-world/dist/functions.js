"use strict";
var sayHello = function (name) {
    console.log("Hello " + name);
};
function sayHallo(name) {
    console.log("Hallo " + name);
}
sayHello("Bruno");
sayHallo("Heinz");
var multiply = function (number1, number2) {
    var result = number1 * number2;
    return result;
};
console.log(multiply(2, 7));
