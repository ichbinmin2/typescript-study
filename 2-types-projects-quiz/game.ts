/**
 * Let's make a game 🕹
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
    // * break 를 해줘야 하는 이유 *
    // 값이 Return 되지 않기 때문에 break 문을 작성해야 한다.
    // break를 작성하지 않으면 밑에 있는 case까지 동시에 실행하기 때문에 반드시 필요.
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
