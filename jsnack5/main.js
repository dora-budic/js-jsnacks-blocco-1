// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire
// un numero, se è dispari inseriscilo nell’array.

var numbers = [];

for (var i = 0; i < 6; i++) {
  var number = prompt("Write one number:")

  if (number%2) {
    numbers.push(number);
  }
}

document.getElementById('odd').innerHTML = "Numbers on the list: " + numbers;
