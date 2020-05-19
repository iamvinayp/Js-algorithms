// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(number) {
  if(Number(number) || number === 0) {
    let reversed = String(number).split('').reverse().join('');
    return parseInt(reversed) * Math.sign(number);
  } else {
    return 'Not a number'
  }
}

module.exports = reverseInt;