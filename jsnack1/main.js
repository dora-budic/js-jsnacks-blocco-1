var number1 = parseInt(prompt("Write first number"));
var number2 = parseInt(prompt("Write second number"));

if (number1 < number2) {
  document.getElementById('result').innerHTML = "Second number is bigger: " + number2;
} else if (number1 > number2) {
  document.getElementById('result').innerHTML = "First number is bigger: " + number1;
} else {
  document.getElementById('result').innerHTML = "Numbers are the same";
}
