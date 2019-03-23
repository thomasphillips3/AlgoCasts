# Integer Reversal
* [Solution](index.js)  
* [Tests](test.js)

## Objective
Given an integer, return an integer that is the reverse ordering of numbers.

**Examples**
- reverseInt(15) === 51
- reverseInt(981) === 189
- reverseInt(500) === 5
- reverseInt(-15) === -51
- reverseInt(-90) === -9

## Solution
### Algorithm
- Convert integer to string
- Reverse string
- Convert string to integer

### Code
```
const reversedInt = n.toString().split('').reverse().join('');
return parseInt(reversedInt) * Math.sign(n);
```

## Thoughts
This one was mostly pretty straightforward. The part I didn't get without viewing the solution is the multiplying by `Math.sign()`. But it all makes sense. I convert to a string, then use the [`reverseString`](../reversestring/index.js) logic. From there, it's a string, so we can have things like `006-` when reversing `-600`. From here, we parse to an int, so it turns to `6`. Then to get the `-` sign back as necessary, multiply by the sign of the input integer, `n`. 

## Resources
- [Solution](../../completed_exercises/index.js)
