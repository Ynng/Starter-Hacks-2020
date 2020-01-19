/**
 * List of keywords
 * Assignment: "is"
 * And: "and"
 * Addition: "plus", "add", "+"
 * Subtraction: "minus","subtract","-"
 * Multiplication: "times", "multiply", "*"
 * Division: "divide", "/" 
 * */

/**
 * Topic selection: "topic"
 * Grab variables used in the topic and convert them to keywords
 * 
 * Topic is E&M
 * Define electric_potential as V
] * 
 */

var input;
var output;
// var varList = new Map();

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

var focused
$(document).on('keydown, keyup, mousedown, mouseup', function () {
  focused = $(':focus');
})

$(document).on('keydown, keyup', function () {
  parseInput();
})

function addNewLine() {
  $('<input class="mainInput" type="text">').insertAfter(focused)
}

// $(".mainInput").on('input', function () {
//   parseInput();
// });

$(".mainInputContainer").on('keyup', function (e) {
  console.log(e.which)
  if (e.which == 13) {
    //enter key
    addNewLine();
    $(focused).next().focus();
  }
  if (e.which == 40) {
    $(focused).next().focus();
  }
  if (e.which == 38) {
    $(focused).prev().focus();
  }
  focused = $(':focus');
});

var scope = {};
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
  if (line.length <= 0) return "empty";
  try {
    return math.eval(line, scope);
  } catch (e) {
    return "error"
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

function recursiveSearch(element) {
  console.log("element: " + element + " " + varList.get(element));
  if (Number(element) != NaN) {
    return varList.get(element);
  } else {
    recursiveSearch(varList.get(element));
  }
}