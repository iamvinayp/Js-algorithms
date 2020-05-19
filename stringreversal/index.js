// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(string) {
//   let reversed = '';
//   for (const char of string) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// function reverse(string) {
//   return string.split('').reverse().join('');
// }

function reverse(string) {
  if (string == '') {
    return '';
  } else {
    return reverse(string.substr(1)) + string.charAt(0);
  }
}


module.exports = reverse;
