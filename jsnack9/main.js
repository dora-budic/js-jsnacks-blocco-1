// Calcola la somma e la media dei primi 10 numeri.
var sum = 0;

for (var i = 1; i < 11; i++) {
  var sum = sum + i;
  var average = sum / i;
}

document.getElementById('sum').innerHTML = "Sum of first 10 numbers is: " + sum;
document.getElementById('average').innerHTML = "Average of first 10 numbers is: " + average;
