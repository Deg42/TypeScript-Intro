/*
    === 10 Decorators ===
*/

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}


@reportableClassDecorator
class MySuperClass {
  public myProperty: string = "ABC123";

  print() {
    console.log("Holle World");
  }
}

console.log (MySuperClass);

const myClass = new MySuperClass();

console.log(myClass);
