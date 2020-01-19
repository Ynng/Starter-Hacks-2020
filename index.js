var letter_size = 6;
var input;
var output;
// var varList = new Map();


$(document).ready(function() {
    $.getJSON("PhysicsQuestions.json", function(data) {
        getNames(data);
        getVariablesOfFunction("Magnetic field intensity", data);
    });
})

function findWord(word, str) {
    return RegExp('\\b' + word + '\\b').test(str)
}


function parseInput() {
    input = $('.mainInput');
    scope = {};
    $(".overlay").html("");
    for (i = 0; i < input.length; i++) {
        // console.log($(input[i]).val())
        output = StringInput($(input[i]).val(), i);

        if (!findWord("function", output)) {
            $(".overlay").html($(".overlay").html() + output + "</br>");
        }
    }
}

var focused;

$(document).on('keydown, keyup, mousedown, mouseup', function() {
    focused = $(':focus');
    $('#box').css({ 'left': (letter_size * focused[0].selectionStart) + 'px', 'top': $(focused).offset().top + $(focused).height() });
})

$(document).ready(function() {
    $(".mainInput")[0].focus();
    focused = $(':focus');
})

function addNewLine() {
    console.log(focused[0].selectionStart);
    $('<input class="mainInput" type="text">').insertAfter(focused);
    parseInput();
    $(focused).next()[0].defaultValue = focused.val().substring(focused[0].selectionStart, focused.val().length);
    $(focused)[0].value = focused.val().substring(0, focused[0].selectionStart);
    $(focused).next().focus();
}

function removeLine() {
    if ($(focused).prev().length > 0) {
        $(focused).prev().attr("id", "ToBeFocused");
        $(focused).remove();
        $("#ToBeFocused").focus();
        $("#ToBeFocused").attr("id", "");
    }
}
// $(".mainInput").on('input', function () {
//   parseInput();
// });
$(".mainInputContainer").on('keydown', function(e) {
    if (e.which == 8 && focused.val().length == 0) {
        e.preventDefault();
        removeLine();
        parseInput();
    }
    if (e.which == 40) {
        if ($(focused).next().length <= 0) return;
        e.preventDefault();
        $(focused).next().attr("id", "ToBeFocused");
        console.log(focused[0].selectionStart);
        $("#ToBeFocused").focus();
        $("#ToBeFocused")[0].setSelectionRange(focused[0].selectionStart, focused[0].selectionStart);
        $("#ToBeFocused").attr("id", "");
    }
    if (e.which == 38) {
        if ($(focused).prev().length <= 0) return;
        e.preventDefault();
        $(focused).prev().attr("id", "ToBeFocused");
        console.log(focused[0].selectionStart);
        $("#ToBeFocused").focus();
        $("#ToBeFocused")[0].setSelectionRange(focused[0].selectionStart, focused[0].selectionStart);
        $("#ToBeFocused").attr("id", "");
    }
})

$(".mainInputContainer").on('keyup', function(e) {
    // console.log(e.which)
    parseInput();
    if (e.which == 13) {
        //enter key
        addNewLine();
    }
    focused = $(':focus');
    $('#box').css({ 'left': (letter_size * focused[0].selectionStart) + 'px', 'top': $(focused).offset().top + $(focused).height() });
    autocomplete(focused[0], countries);
});

var scope = {};
var oldScope = {};

function StringInput(line, lineNumber) {
    // var params = line.split(" ");
    // console.log(params);
    // if (line.indexOf(" is ") > -1) {
    //     var index = params.indexOf("is");
    //     varList.set(params[index - 1], params[index + 1]);
    // } else {
    //     var variables = new Map();
    //     for (var i = 0; i < params.length; i++) {
    //         if (varList.has(params[i])) {
    //             console.log("here");
    //             variables.set(params[i], recursiveSearch(params[i]));
    //             console.log(variables);
    //         }
    //     }
    // console.log(variables);
    // var calc = new MathCalc();
    // expr = calc.parse(line);
    if (line.length <= 0) return "";
    if (line[0] == '#') {
        //TODO: pass shit from jsonparser to here
        solveAlgebra();
    }
    
    try {
        return math.eval(line, scope);
    } catch (e) {
        return "❗️error"
    }

    // if (expr.error) {
    //     console.log(line + ' : ' + expr.error.text);
    // } else {
    //     var res = expr.eval();
    //     console.log(line + ' = ' + res);
    //     return res;
    // }
    // }


}


/*An array containing all the country names in the world:*/
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
