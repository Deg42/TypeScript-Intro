/*
    === 06 Destructuring Function ===
*/

export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: "Xiaomi A2",
  price: 150,
};

const tablet: Product = {
  description: "iPad Air",
  price: 350,
};

export function calculateTaxOnSale(products: Product[]): [number, number] {
  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * 0.15];
}

// const manufactures = [phone, tablet];

// const [total, taxOnSale] = calculateTaxOnSale(manufactures);

// // console.log("Total:", total);
// // console.log("Tax On Sale:", taxOnSale);
