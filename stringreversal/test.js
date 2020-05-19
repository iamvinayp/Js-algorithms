const reverse = require('./index');

describe('Reverse function', () => {

  test('Reverse function exists', () => {
    expect(reverse).toBeDefined();
  });
  
  test('Reverse reverses a string', () => {
    expect(reverse('bad')).toEqual('dab');
  });
  
  test('Reverse reverses a string with spaces', () => {
    expect(reverse('bad  ')).toEqual('  dab');
  });

});