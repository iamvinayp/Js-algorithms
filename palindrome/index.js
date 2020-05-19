// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(string) {
//   const re = /[\W_]/g; // same as [^A-Za-z0-9]
//   string = string.replace(re, '').toLowerCase();
//   const reversed = string.split('').reverse().join('');

//   return string === reversed;
// }

function palindrome(string) {
  const re = /[\W_]/g; // same as [^A-Za-z0-9]
  string = string.replace(re, '').toLowerCase();
  const length = string.length;
  for (let i=0; i<length/2; i++) {
    if(string[i] !== string[length-1-i]) {
      return false;
    }
  }
  return true;
}

module.exports = palindrome;