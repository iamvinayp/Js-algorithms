const reverseInt = require('./index');

describe('Reverse an integer', () => {

  test('Reverse integer function exists', () => {
    expect(typeof reverseInt).toEqual('function');
  });

  test('Reverse integer handles NaN', () => {
    expect(reverseInt('lol')).toBe('Not a number');
    expect(reverseInt('lol1234')).toBe('Not a number');
  });

  test('Reverse integer handles 0', () => {
    expect(reverseInt(0)).toEqual(0);
  });

  test('Reverse integer handles positive numbers', () => {
    expect(reverseInt(15)).toEqual(51);
    expect(reverseInt(2150)).toEqual(512);
  });

  test('Reverse integer handles negative numbers', () => {
    expect(reverseInt(-15)).toEqual(-51);
    expect(reverseInt(-2150)).toEqual(-512);
  });

});