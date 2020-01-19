var letter_size = 6;
var input;
var output;
// var varList = new Map();

var ctrl_key_down = false;

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

function updateFocused() {
    if ($(':focus').hasClass("mainInput")) {
        focused = $(':focus');
    }
}

$(document).on('keydown, keyup, mousedown, mouseup', function () {
    updateFocused();
    $('#box').css({ 'left': (letter_size * focused[0].selectionStart) + 'px', 'top': $(focused).offset().top + $(focused).height() });
})

$(document).ready(function () {
    $(".mainInput")[0].focus();
    updateFocused();
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
$(".mainInputContainer").on('keydown', function (e) {
    if(e.which == 17){
        ctrl_key_down = true;
    }
    if($("#autocomplete-list").children().length>0){
        var x = document.getElementById("autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        console.log(x)
        if (e.keyCode == 40) {
            e.preventDefault();
    
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            e.preventDefault();
    
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        } else {
            autocomplete_input_change(countries, e.keyCode);
        }
    }else{
        autocomplete_input_change(countries, e.keyCode);
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
            autocomplete = true;
        }
        if (e.which == 38) {
            if ($(focused).prev().length <= 0) return;
            e.preventDefault();
            $(focused).prev().attr("id", "ToBeFocused");
            console.log(focused[0].selectionStart);
            $("#ToBeFocused").focus();
            $("#ToBeFocused")[0].setSelectionRange(focused[0].selectionStart, focused[0].selectionStart);
            $("#ToBeFocused").attr("id", "");
            autocomplete = true;
        }
        if (e.which == 13) {
            //enter key
            addNewLine();
        }
    }
    
})

$(".mainInputContainer").on('keyup', function (e) {
    if(e.which == 17){
        ctrl_key_down = false;
    }
    parseInput();
    $('#box').css({ 'left': (letter_size * focused[0].selectionStart) + 'px', 'top': $(focused).offset().top + $(focused).height() });
    // console.log(e.which)
    updateFocused();
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
var countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre & Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts & Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad & Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks & Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

var currentFocus;
var autocomplete = false;
function autocomplete_input_change(arr, keycode) {
    if(ctrl_key_down){
        var a, b, i, val = focused.val();
    }else{
        var a, b, i, val = focused.val() + String.fromCharCode(keycode);
    }
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) { return false; }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    document.getElementById("box").appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function (e) {
                /*insert the value for the autocomplete text field:*/
                $(focused)[0].value = this.children[1].value;
                /*close the list of autocompleted values,
                (or any other open lists of autocompleted values:*/
                closeAllLists();
            });
            a.appendChild(b);
        }
    }
    autocomplete = true;
}

function addActive(x) {
    console.log(x);
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
}
function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
    }
}
function closeAllLists(elmnt) {
    // console.log(focused[0])
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i]) {
            x[i].parentNode.removeChild(x[i]);
        }
    }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});