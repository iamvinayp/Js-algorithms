const maxchar = require('./index');

describe('Maxchar function', () => {

  test('maxchar function exists', () => {
    expect(typeof maxchar).toEqual('function');
  });

  test('maxchar finds the most occuring char', () => {
    expect(maxchar('v')).toEqual('v');
    expect(maxchar('vi')).toEqual('v');
    expect(maxchar('vinaaaaaaaaaayyy')).toEqual('a');
  });

  test('maxchar works when string contains numbers', () => {
    expect(maxchar('vinaaaaaayyy333333333333')).toEqual('3');
  });

});