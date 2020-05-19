const anagrams = require('./index');

describe('Anagrams functionality', () => {

  test('anagrams function exists', () => {
    expect(typeof anagrams).toEqual('function');
  });

  test('"rail safety" to be an anagram of "fairy tales"', () => {
    expect(anagrams("rail safety", "fairy tales")).toBeTruthy();
  });

  test('"Hello!! Whoa!!" to be an anagram of "whoa!! hello"', () => {
    expect(anagrams("Hello!! Whoa!!", "whoa!! hello")).toBeTruthy();
  });

  test('"One one" not to be an anagram of "Two three"', () => {
    expect(anagrams("One one", "Two three")).toBeFalsy();
  });

  test('"One one" not to be an anagram of "Two three"', () => {
    expect(anagrams("One one w!", "One TWO three")).toBeFalsy();
  });

});