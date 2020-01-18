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

function parseInput() {
  StringInput($('#mainInput').val().split('\n'));
}


function StringInput(input) {
  console.log(input);
  var calc = new MathCalc();
  expr  = calc.parse(input);
  if (expr .error) {
    alert(text + ' : ' + expr .error.text);
  }
  else {
    var res = expr.eval();
    alert(text + ' = ' + res);
    return res;
  }
}

function is(param1, param2) {

}