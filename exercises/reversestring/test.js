import { reverse_1, reverse_2, reverse_3 } from './index';

describe('Reverse a string - solution 1', function() {
  it('reverse_1 function exists', () => {
    expect(reverse_1).toBeDefined();
  });

  it('reverse_1 reverses a string', () => {
    expect(reverse_1('abcd')).toEqual('dcba');
  });

  it('reverse_1 reverses a string with spaces', () => {
    expect(reverse_1('  abcd')).toEqual('dcba  ');
  });
});

describe('Reverse a string - solution 2', function() {
  it('reverse_2 function exists', () => {
    expect(reverse_2).toBeDefined();
  });
  it('reverse_2 reverses a string', () => {
    expect(reverse_2('abcd')).toEqual('dcba');
  });

  it('reverse_2 reverses a string with spaces', () => {
    expect(reverse_2('  abcd')).toEqual('dcba  ');
  });
});

describe('Reverse a string - solution 3', function() {
  it('reverse_3 function exists', () => {
    expect(reverse_3).toBeDefined();
  });
  
  it('reverse_3 reverses a string', () => {
    expect(reverse_3('abcd')).toEqual('dcba');

  });

  it('reverse_3 reverses a string with spaces', () => {
    expect(reverse_3('  abcd')).toEqual('dcba  ');
  });
});
