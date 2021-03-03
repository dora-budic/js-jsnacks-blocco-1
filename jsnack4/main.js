// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.

var guests = ["Dora", "Luca", "Marko", "Antonia", "Ines", "Elizabeta", "Raffaele", "Alessandro", "Fabrizio"];

var name = prompt("What is your name?");

var control = false;

for (var i = 0; i < guests.length && !control; i++) {
  if (name.toUpperCase() == guests[i].toUpperCase()) {
    var control = true;
  }
}

if (control) {
  document.getElementById('list').innerHTML = name + ", you are invited to the party!"
} else {
  document.getElementById('list').innerHTML = name + ", unfortunately you are not invited to the party!"
}
