/*
    === 04 Typing ===
*/

interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}

interface Address {
  street: string;
  country: string;
  city: string;
}

const superHero: SuperHero = {
  name: "Batman",
  age: 30,
  address: {
    street: "Main St",
    country: "USA",
    city: "Gotham",
  },
  showAddress() {
    return this.name + ", " + this.address.city + ", " + this.address.country;
  },
};

const address = superHero.showAddress();
console.log(address);
