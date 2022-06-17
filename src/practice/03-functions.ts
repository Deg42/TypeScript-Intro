/*
    === 03 Functions ===
*/

function sum(a: number, b: number): number {
  return a + b;
}

const arrowSum = (a: number, b: number): number => {
  return a + b;
};

function multiply(
  number: number,
  anotherNumber?: number,
  base: number = 2
): number {
  return number * base;
}

// const result = multiply(10, 0, 20);

// console.log(result);

/* --------------------------------------------------------------------------------------------- */

interface RolCharacter {
  name: string;
  hp: number;
  showHP: () => void;
}

function heal(character: RolCharacter, healingValue: number): void {
  character.hp += healingValue;
}

const newCharacter: RolCharacter = {
  name: "Deg",
  hp: 50,
  showHP(){
    console.log('Health Points:', this.hp)
  }
};

heal(newCharacter, 20);
newCharacter.showHP();
