/**
 * Let's make a game ๐น
 */

/** my A
const position = { x: 0, y: 0 };
type Xy = { x: number; y: number };

function move(command: string): Xy {
  switch (command) {
    case "up":
      position.y += 1;
    case "down":
      position.y -= 1;
    case "left":
      position.x -= 1;
    case "right":
      position.x += 1;
    default:
      throw new Error("command error");
  }
}
*/

// * ellie solution
const position = { x: 0, y: 0 };

function move(direction: "up" | "down" | "left" | "right") {
  switch (direction) {
    case "up":
      position.y += 1;
      break;
    // * break ๋ฅผ ํด์ค์ผ ํ๋ ์ด์  *
    // ๊ฐ์ด Return ๋์ง ์๊ธฐ ๋๋ฌธ์ break ๋ฌธ์ ์์ฑํด์ผ ํ๋ค.
    // break๋ฅผ ์์ฑํ์ง ์์ผ๋ฉด ๋ฐ์ ์๋ case๊น์ง ๋์์ ์คํํ๊ธฐ ๋๋ฌธ์ ๋ฐ๋์ ํ์.
    case "down":
      position.y -= 1;
    case "left":
      position.x -= 1;
    case "right":
      position.x += 1;
    default:
      throw new Error(`unknown direction : ${direction}`);
  }
}

console.log(position); // { x: 0, y: 0}
move("up");
console.log(position); // { x: 0, y: 1}
move("down");
console.log(position); // { x: 0, y: 0}
move("left");
console.log(position); // { x: -1, y: 0}
move("right");
console.log(position); // { x: 0, y: 0}
