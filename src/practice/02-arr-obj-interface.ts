/*
    === 02 Arrays, Objectcs, Interfaces ===
*/

let skills: string[] = ["Bash", "Counter", "Healing"];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  homeTown?: string;
}

const character: Character = {
  name: "Juan",
  hp: 100,
  skills: ["Bash", "Counter", "Healing"],
};

character.homeTown = "Kakariko";

console.table(character);
