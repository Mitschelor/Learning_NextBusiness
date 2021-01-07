"use strict";
var isNumberBiggerThanTen = function (number1, number2) {
    var result = number1 + number2;
    if (result > 10) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isNumberBiggerThanTen(5, 5));
