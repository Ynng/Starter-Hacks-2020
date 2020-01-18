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
function parseInput() {
  input = $('#mainInput').val().split('\n');
  for(let lineNumber in input){
    resolved = StringInput(input[lineNumber], lineNumber);
  }
}


function StringInput(line, lineNumber) {
  // console.log(line, lineNumber);
  var calc = new MathCalc();
  expr  = calc.parse(line);
  if (expr .error) {
    // console.log(line + ' : ' + expr.error.text);
  }
  else {
    var res = expr.eval();
    // console.log(line + ' = ' + res);
    console.log(expr.scope);
    return res;
  }
}

function is(param1, param2) {

}
