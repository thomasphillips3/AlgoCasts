// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse_1(str) {
  return str.split('').reverse().join('');
}

function reverse_2(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed;
}

module.exports = reverse_1;
module.exports = reverse_2;
