const Stack = require('./index');

describe('Stack data structure tests', () => {

  test('Stack is a class', () => {
    expect(typeof Stack.prototype.constructor).toEqual('function');
  });

  test('stack can add and remove items', () => {
    const s = new Stack();
    s.push(1);
    expect(s.pop()).toEqual(1);
    s.push(2);
    expect(s.pop()).toEqual(2);
  });
  
  test('add an item to the stack', () => {
    const s = new Stack();
    expect(() => {
      s.push(5);
    }).not.toThrow();
  });

  test('remove an item from the stack', () => {
    const s = new Stack();
    expect(() => {
      s.push(12);
      s.pop();
    }).not.toThrow();
  });

  test('peek into the stack', () => {
    const q = new Stack();
    q.push(3);
    q.push(2);
    expect(q.peek()).toEqual(2);
  });

  test('Order of elements is maintained', () => {
    const s = new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.pop()).toEqual(3);
    expect(s.pop()).toEqual(2);
    expect(s.pop()).toEqual(1);
    expect(s.pop()).toEqual(undefined);
  });

});