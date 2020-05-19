// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(string) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  for (const char of string) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  // let maxChar;
  // const counts = Object.values(charMap);
  // const maxCount = Math.max(...counts);
  // const index = counts.indexOf(maxCount);
  // maxChar = Object.keys(charMap)[index];

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;      
    }
  }

  return maxChar;

}

module.exports = maxChar;