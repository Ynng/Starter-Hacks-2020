//PROVIDE INPUT TO THIS FILE
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


var input;
var key;

var Algebrite = require('algebrite');

function solve(functionName, varMap) {
    var splitString = functionName.split(" ");
    var substitutedStr = "";
    for (var i = 0; i < splitString.length; i++) {
        if (varMap.has(splitString[i])) {
            //console.log(knowns.get(splitString[i]));
            splitString[i] = convert(varMap.get(splitString[i]));
        } else {
            splitString[i] = "x";
        }
        substitutedStr += splitString[i];
        //console.log(substitutedStr);

    }

    //THIS IS WHERE YOU OUTPUT THJE SOLUTION TO THE UI
    var sol = Algebrite.nroots(substitutedStr);
    //console.log(sol);
    if (sol.tensor == null) {
        console.log(sol.d);
    } else {
        for (var i = 0; i < sol.tensor.elem.length; i++) {
            //for when x has more than 1 answer
            console.log(sol.tensor.elem[i].d);
        }
    }
}