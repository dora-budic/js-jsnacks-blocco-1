var word1 = prompt("Write first word").trim();
var word2 = prompt("Write second word").trim();

if (word1.length > word2.length) {
  document.getElementById('word').innerHTML = word2 + ", " + word1;
} else if (word1.length < word2.length) {
  document.getElementById('word').innerHTML = word1 + ", " + word2;
} else {
  document.getElementById('word').innerHTML = "Both words have the same number of letters";
}
