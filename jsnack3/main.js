var sum = 0;

for (var i = 0; i < 10; i++) {
  var number = parseInt(prompt("Write a number"));
  sum = sum + number;
}

document.getElementById('sum').innerHTML = "Sum of 10 inserted numbers is: " + sum;
