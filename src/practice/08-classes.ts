/*
    === 08 Classes ===
*/

class RegularPerson {
  constructor(public name: string, public address: string) {}
}

class Hero extends RegularPerson {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, 'New York, USA');
  }
}

const ironman = new Hero("Ironman", 45, "Tony");

console.log(ironman);
