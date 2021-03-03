// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

var number = prompt("Write a 4 digit number:");

var sum = 0;

for (var i = 0; i < number.length; i++) {
  var sum = sum + parseInt(number.charAt(i));
}

document.getElementById('sum').innerHTML = "Sum of figures in number " + number + " is: " + sum;
