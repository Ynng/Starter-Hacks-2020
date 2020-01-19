var Algebrite = require('algebrite');

var input = "0 = -1 * B + u0 * I / 2 / pi / d";

var knowns = { "B": 1, "u0": 0.00004, "pi": 3.14, "d": 0.5 };
var substitutedStr;

var splitString = knowns.split(" ");
for (var i = 0; i < input.length; i++) {

}

console.log(Algebrite.roots(substitutedStr));
if ("00")