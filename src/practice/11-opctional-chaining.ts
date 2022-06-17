/*
    === 10 Optional Chaining ===
*/

interface Passenger {
  name: string;
  childs?: string[];
}

const passenger1: Passenger = {
  name: "Juan",
};

const passenger2: Passenger = {
  name: "Raquel",
  childs: ["Teresa", "Miguel"],
};

function printChilds(passenger: Passenger): void {
  const childsCount = passenger.childs?.length || 0;

  console.log(childsCount);
}

printChilds(passenger1);
