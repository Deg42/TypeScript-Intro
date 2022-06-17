/*
    === 09 Generics ===
*/

function whatTypeIAm<T>(argument: T) {
  return argument;
}

let iAmString = whatTypeIAm("Hello World");
let iAmNumber = whatTypeIAm(100);
let iAmArray = whatTypeIAm([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

let iAmExplicit = whatTypeIAm<number>(100);
