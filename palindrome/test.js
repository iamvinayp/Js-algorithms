const palindrome = require('./index');

describe('Palindrome function', () => {

  test('Palindrome function exists', () => {
    expect(palindrome).toBeDefined();
  });
  
  test('race car is a palindrome', () => {
    expect(palindrome('race car')).toBeTruthy();
  });

  test('race car is a palindrome(special chars)', () => {
    expect(palindrome('race car!!!!')).toBeTruthy();
  });
  
  test('Reverse reverses a string with spaces', () => {
    expect(palindrome('palindrome')).toBeFalsy();
  });

});