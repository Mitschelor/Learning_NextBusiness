"use strict";
var h = 0;
var names = [
    "Maria",
    "Heinz",
    "Bruno",
    "Martin",
    "Björn",
    "Markus",
    "Ludwig",
];
while (h < 5) {
    h++;
    console.log(h);
}
var i = 0;
do {
    i++;
    console.log(i);
} while (i < 5);
for (var j = 0; j < 5; j++) {
    console.log(j);
}
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Sali " + name_1 + "!");
}
names.forEach(function (name) {
    console.log(name);
});
var uppercasedNames = names.map(function (name) {
    return name.toUpperCase();
});
console.log(uppercasedNames);
