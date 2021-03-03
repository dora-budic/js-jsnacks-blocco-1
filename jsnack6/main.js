// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

var number = parseInt(prompt("Write one number:"));

for (var i = 1; i <= number; i++) {
  var cube = i*i*i;
  document.getElementById('result').innerHTML += cube + "<br>";
}
