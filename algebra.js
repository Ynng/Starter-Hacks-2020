var Algebrite = require('algebrite');

var input = "-1 * B + u0 * I * x / 2 / pi / d";

var key = "I"; //UNKMNOWN VARIABLE
input = input.replace(key, "x");
var knowns = new Map();
knowns.set("B", 5.1);
knowns.set("u0", 4.11);
knowns.set("pi", 3.14);
knowns.set("d", 5);
var splitString = input.split(" ");
var substitutedStr = "";
for (var i = 0; i < splitString.length; i++) {
    if (knowns.has(splitString[i])) {
        splitString[i] = knowns.get(splitString[i]);
    }
    substitutedStr += splitString[i];
    console.log(substitutedStr);

}
var sol = Algebritroots("x*x/2");
console.log(sol);
if (sol.tensor == null) {
    console.log(sol.d);
} else {
    for (var i = 0; i < sol.tensor.elem.length; i++) {
        console.log(sol.tensor.elem[i].d);
    }
}