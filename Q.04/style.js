let Input1 = +prompt("Enter Number 1 to Calculate");
let operator = prompt("Enter Any Operator");
let Input2 = +prompt("Second Num to Calculate");

let sum = Input1 + Input2;
let min = Input1 - Input2;
let multiply = Input1 * Input2;
let div = Input1 / Input2;

if (operator == "+") {
  document.write(sum);
} else if (operator == "-") {
  document.write(min);
} else if (operator == "*") {
  document.write(multiply);
} else if (operator == "/") {
  document.write(div);
} else {
  document.write("<h1> Not an Operator</h1>");
}


