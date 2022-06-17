/*
    === 05 Basic Destructuring ===
*/

interface MusicPlayer {
  volume: number;
  second: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const musicPlayer: MusicPlayer = {
  volume: 90,
  second: 36,
  song: "In the End",
  details: {
    author: "Linkin Park",
    year: 2000,
  },
};

const { volume: vol, second, song, details } = musicPlayer;
const { author } = details;

// console.log("Volume:", vol);
// console.log("Second:", second);
// console.log("Song:", song);
// console.log("Author:", author);

/* --------------------------------------------------------------------------------------------- */

const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = dbz;

// console.log("Character 1:", dbz[0]);
// console.log("Character 2:", dbz[1]);
console.log("Character 3:", p3);
