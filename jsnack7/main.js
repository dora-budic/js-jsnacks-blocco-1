// Stampa le potenze di 2 fino a 1000.

var x = 2;

var control = false;

for (var i = 0; i < 10 && !control; i++) {
  if ((x*2) < 1000) {
    var x = x*2;
    document.getElementById('square').innerHTML += x + "<br>";
  } else {
    var control = true;
  }
}
