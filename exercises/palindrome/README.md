# Palindrome
* [Solution](index.js)  
* [Tests](test.js)

## Objective
Given an input of a string, return true if it is a palindrome, and false if not.

## Solution 1
### Algorithm
- Reverse the string
- Return true if the original and reversed strings match, false if not

### Code
```
let rts = str.split('').reverse().join('')
return str === rts;
```

## Solution 2
### Algorithm
- Compare the first character to the last
If they match, increment the index from the beginning, and decrement the index from th end
- Return false if they don't match
- Repeat until the end
- `split` operation succeeds and returns `true` if it makes it to the end without finding a non-matching character

### Code
```
return str.split('').every((char, i) => {
return char === str[str.length - i - 1];
```
## Thoughts
The [`every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) method tests whether all elements in the array pass the test implemented by the provided function. 

## Resources
- [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
