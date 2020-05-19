const Queue = require('./index');

describe('Queue functionality', () => {

  test('Queue is a class', () => {
    expect(typeof Queue.prototype.constructor).toEqual('function');
  });

  test('add an item to the queue', () => {
    const q = new Queue();
    expect(() => {
      q.add(5);
    }).not.toThrow();
  });

  test('remove an item from the queue', () => {
    const q = new Queue();
    expect(() => {
      q.add(12);
      q.remove();
    }).not.toThrow();
  });

  test('peek into the queue', () => {
    const q = new Queue();
    q.add(3);
    q.add(2);
    expect(q.peek()).toEqual(3);
  });

  test('Order of elements is maintained', () => {
    const q = new Queue();
    q.add(1);
    q.add(2);
    q.add(3);
    expect(q.remove()).toEqual(1);
    expect(q.remove()).toEqual(2);
    expect(q.remove()).toEqual(3);
    expect(q.remove()).toEqual(undefined);
  });

});