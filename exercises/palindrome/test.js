import { palindrome_1, palindrome_2 } from './index';

describe('Palindrome - Solution 1', () => {
  it('palindrome_1 function is defined', () => {
    expect(typeof palindrome_1).toEqual('function');
  });

  it('"aba" is a palindrome', () => {
    expect(palindrome_1('aba')).toBeTruthy();
  });

  it('" aba" is not a palindrome', () => {
    expect(palindrome_1(' aba')).toBeFalsy();
  });

  it('"aba " is not a palindrome', () => {
    expect(palindrome_1('aba ')).toBeFalsy();
  });

  it('"greetings" is not a palindrome', () => {
    expect(palindrome_1('greetings')).toBeFalsy();
  });

  it('"1000000001" a palindrome', () => {
    expect(palindrome_1('1000000001')).toBeTruthy();
  });

  it('"Fish hsif" is not a palindrome', () => {
    expect(palindrome_1('Fish hsif')).toBeFalsy();
  });

  it('"pennep" a palindrome', () => {
    expect(palindrome_1('pennep')).toBeTruthy();
  });
});

describe('Palindrome - Solution 2', () => {
  it('palindrome_2 function is defined', () => {
    expect(typeof palindrome_2).toEqual('function');
  });

  it('"aba" is a palindrome', () => {
    expect(palindrome_2('aba')).toBeTruthy();
  });

  it('" aba" is not a palindrome', () => {
    expect(palindrome_2(' aba')).toBeFalsy();
  });

  it('"aba " is not a palindrome', () => {
    expect(palindrome_2('aba ')).toBeFalsy();
  });

  it('"greetings" is not a palindrome', () => {
    expect(palindrome_2('greetings')).toBeFalsy();
  });

  it('"1000000001" a palindrome', () => {
    expect(palindrome_2('1000000001')).toBeTruthy();
  });

  it('"Fish hsif" is not a palindrome', () => {
    expect(palindrome_2('Fish hsif')).toBeFalsy();
  });

  it('"pennep" a palindrome', () => {
    expect(palindrome_2('pennep')).toBeTruthy();
  });
});