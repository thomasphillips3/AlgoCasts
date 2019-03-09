// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

export function reverse_1(str){
  return str.split('').reverse().join('');
}

export function reverse_2(str){
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed;
}

