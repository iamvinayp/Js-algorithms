
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(string) {
  const capArray = [];
  for (const str of string.split(' ')) {
    capArray.push(str.charAt(0).toUpperCase() + str.slice(1));
  }
  return capArray.join(' ');
}

module.exports = capitalize;