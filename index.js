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
  input.forEach(line => {
    StringInput(line);
  });
}


function StringInput(text) {
  console.log(text);
  var calc = new MathCalc();
  expr  = calc.parse(text);
  if (expr .error) {
    alert(text + ' : ' + expr.error.text);
  }
  else {
    var res = expr.eval();
    alert(text + ' = ' + res);
    return res;
  }
}

function is(param1, param2) {

}
