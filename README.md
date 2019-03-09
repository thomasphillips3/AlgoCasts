# AlgoCasts

Companion repo to a course on Udemy.com

## ReverseString: Solution 1
### Objective
Given an input of a string, return the reverse.

### Algorithm
* Create an array of characters from the string
* Reverse the array
* Create a string from the reversed array

### Code
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