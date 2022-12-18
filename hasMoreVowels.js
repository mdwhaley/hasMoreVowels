const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let vowelCount = 0;
function hasMoreVowels(word) {
  for (i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      vowelCount += 1;
    }
  }
  if (vowelCount > word.length / 2) {
    return true;
  } else {
    return false;
  }
}
console.log(hasMoreVowels("dirtEEEEE"));
