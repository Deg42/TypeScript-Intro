/*
    === 07 Imports and Exports ===
*/

import { Product, calculateTaxOnSale } from "./06-destructuring-function";

const shoppingCart: Product[] = [
  {
    description: "Phone 1",
    price: 100,
  },
  {
    description: "Phone 2",
    price: 150,
  },
];

const [total, tax] = calculateTaxOnSale(shoppingCart);

console.log("Total:", total);
console.log("Tax On Sale:", tax);
