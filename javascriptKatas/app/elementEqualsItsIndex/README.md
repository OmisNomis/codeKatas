# Element equals its index

Given a sorted array of distinct integers, write a function `indexEqualsValue` that returns the lowest index for which `array[index] == index`.
Return `-1` if there is no such index.

Your algorithm should be very performant.

```js
[input] array of integers
[output] integer
```

Examples:
``` js
input: [-8,0,2,5]
// output: 2 # since array[2] == 2
input: [-1,0,3,6]
// output: -1 # since no index in array satisfies array[index] == index
```

Random Tests Constraints:
Array length: 200 000

Amount of tests: 1 000

Time limit: 150 ms