# ReverseString
* [Solution](index.js)  
* [Tests](test.js)

## Objective
Given an input of a string, return the reverse.

## Solution 1
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
---
## Solution 2
### Algorithm
* Create an empty string
* Traverse the input string one character at a time
* Prepend the current character to the beginning of the new string
* Return the completed reversed string

### Code
```
function reverse_2(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed;
}
```
---
## Solution 3
### Algorithm
Use the Javascript's [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method. 

* Convert string to an array of characters
* Iterate through each character in the array with `reduce()`
* Prepend the current character to the beginning of the new string
* Return the completed reversed string

### Code
```
str.split('').reduce((reversed, character) => {
  return (character + reversed);
}, '')
```

## Thoughts
* I took this as an opportunity to dig deeper into Jest as well as learning the algorithms. 
* Instead of commenting out other solutions, I'm leaving them all in the code, and writing tests for them all. This is giving me experience writing unit tests with Jest.
* Upgraded to ES6 and learned about Babel. I had always heard of Babel, but never knew what it was. Now I know that Babel is used to allow older

## Resources
* [Creating test suites, specs and expectations in Jest](https://hub.packtpub.com/creating-test-suites-specs-and-expectations-jest/)
* [[es6] import, export, default cheatsheet]()
* [Testing JavaScript with Jest](https://flaviocopes.com/jest)
* [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env/)
* [facebook/jest](https://github.com/facebook/jest)
* [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)