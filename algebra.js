function gcd(a, b) {
    return (b) ? gcd(b, a % b) : a;
}

function convert(_decimal) {
    //console.log(_decimal);
    if (_decimal == parseInt(_decimal)) {
        return _decimal;
    } else {
        var top = _decimal.toString().includes(".") ? _decimal.toString().replace(/\d+[.]/, '') : 0;
        var bottom = Math.pow(10, top.toString().replace('-', '').length);
        if (_decimal >= 1) {
            top = +top + (Math.floor(_decimal) * bottom);
        } else if (_decimal <= -1) {
            top = +top + (Math.ceil(_decimal) * bottom);
        }

        var x = Math.abs(gcd(top, bottom));
        return top + "/" + bottom;
    }
};

var Algebrite = require('algebrite');

var input = "-1 * B + u0 * I / 2 / pi / d";

var key = "I"; //UNKMNOWN VARIABLE
input = input.replace(key, "x");
var knowns = new Map();
knowns.set("B", 5.1);
knowns.set("u0", 0.7);
knowns.set("pi", 3.14);
knowns.set("d", 0.5);
var splitString = input.split(" ");
var substitutedStr = "";
for (var i = 0; i < splitString.length; i++) {
    if (knowns.has(splitString[i])) {
        //console.log(knowns.get(splitString[i]));
        splitString[i] = convert(knowns.get(splitString[i]));
    }
    substitutedStr += splitString[i];
    //console.log(substitutedStr);

}

//THIS IS WHERE YOU OUTPUT THJE SOLUTION TO THE UI
var sol = Algebrite.nroots(substitutedStr);
//console.log(sol);
if (sol.tensor == null) {
    //console.log(sol.d);
} else {
    for (var i = 0; i < sol.tensor.elem.length; i++) {
        //for when x has more than 1 answer
        // console.log(sol.tensor.elem[i].d);
    }
}