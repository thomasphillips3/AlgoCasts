const reverse_1 = require('./index');

describe('Reverse a string - solution 1', function() {
  it('Reverse function exists', () => {
    expect(reverse_1).toBeDefined();
  });

  it('Reverse reverses a string', () => {
    expect(reverse_1('abcd')).toEqual('dcba');
  });

  it('Reverse reverses a string', () => {
    expect(reverse_1('  abcd')).toEqual('dcba  ');
  });
})
