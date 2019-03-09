# AlgoCasts

Companion repo to a course on Udemy.com

## ReverseString
* [Solution](reversestring/index.js)  
* [Tests](reversestring/test.js)

### Objective
Given an input of a string, return the reverse.

### Solution 1
#### Algorithm
* Create an array of characters from the string
* Reverse the array
* Create a string from the reversed array

#### Code
```
function reverse(str) {
  const arr = str.split('');
  arr.reverse();
  return arr.join('');
}
```

Or, as a 1-liner
```
function reverse(str) {
  return str.split('').reverse().join('');
}
```
---
### Solution 2
#### Algorithm
* Create an empty string
* Traverse the input string one character at a time
* Add the current character to the new string

#### Code
```
function reverse_2(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed;
}
```

