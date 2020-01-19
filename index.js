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
  input = $('#mainInput').val().split('\n');
  scope = {};
  $(".overlay").html("");
  for (let lineNumber in input) {
    output = StringInput(input[lineNumber], lineNumber);

    console.log("runned")
    if (!findWord("function", output)) {
      $(".overlay").html($(".overlay").html() + StringInput(input[lineNumber], lineNumber) + "</br>");
    }
  }
}

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
  if(line.length<=0)return "empty";
  try{
    return math.eval(line, scope);
  }catch(e){
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