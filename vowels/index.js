// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(string) {
  let count = 0;
  const checker = 'aeiou'; //const checker = ['a', 'e', 'i', 'o', 'u']
  for (const char of string.toLowerCase()) {
    if(checker.includes(char)) {
      count++;
    }
  }
  return count;
}

// function vowels(string) {
//   const re = /[aeiou]/gi
//   const matches = string.match(re);
//   return matches ? matches.length : 0;
// }

module.exports = vowels;