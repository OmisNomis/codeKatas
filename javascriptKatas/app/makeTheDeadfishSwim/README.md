Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

- `i` increments the value (initially 0)
- `d` decrements the value
- `s` squares the value
- `o` outputs the value into the return array

Invalid characters should be ignored.

```js
parse("iiisdoso") => [ 8, 64 ]
```

```js
0 // initial
i 1 // increment
i 2 // increment
i 3 // increment
s 9 // square
d 8 // decrement
o 8 // output
s 64 // square
o 64 // output
```