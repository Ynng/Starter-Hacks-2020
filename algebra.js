var Algebrite = require('algebrite');

var input = "0 = -1 * B + u0 * I / 2 / pi / d";

var knowns = { "B": 1, "u0": 0.00004, "pi": 3.14, "d": 0.5 };
console.log(knowns);

var splitString = input.split(" ");
var substitutedStr = "";
for (var i = 0; i < splitString.length; i++) {
    if (knowns.has(splitString.at[i])) {
        splitString.at[i] = knowns.get(splitString.at[i]);
    }
    substitutedStr += splitString[i];
}

console.log(Algebrite.roots(substitutedStr));