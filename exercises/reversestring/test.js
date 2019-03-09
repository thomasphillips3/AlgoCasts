import { reverse_1, reverse_2 } from './index';

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
});

describe('Reverse a string - solution 2', function() {
  it('Reverse function exists', () => {
    expect(reverse_2).toBeDefined();
  });
  it('Reverse reverses a string', () => {
    expect(reverse_2('abcd')).toEqual('dcba');
  });

  it('Reverse reverses a string', () => {
    expect(reverse_2('  abcd')).toEqual('dcba  ');
  });
});
