/**
 * Let's make a calculator ๐งฎ
 */

/**
 * ellie๋ ์๋ฃจ์ calculate() ํจ์์ ์ฒซ๋ฒ์งธ ์ธ์๋ ์์์ ๋ฌธ์์ด์ด ์๋๋ผ, ์์ฐํ ๊ฐ์๊ฐ ์ ํ๋์ด ์๋ ๋ช๋ น์ด๋ฅผ ๋ฐ์ ์ ์๊ณ 
 * ๋๋ฒ์งธ, ์ธ๋ฒ์งธ๋ ๊ฐ๊ฐ์ ์ซ์ ํ์์ ๋ฐ์์ ์ด ์ธ์๋ฅผ ๊ณ์ฐํ ๊ฒฐ๊ณผ๊ฐ์ ๋ฆฌํดํด์ฃผ๊ณ  ์๋ค. */

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
/**
 * command ์ธ์๋ ๊ฐฏ์๊ฐ ์ ํ๋์ด ์๊ณ ,
 * ์ด ๋ค์ฏ๊ฐ์ง ์ค์ ํ๋๋ง ๋ฐ์ ์ ์๋ union ํ์์ '|'(๋๋) ์ฌ์ฉํ์ฌ ์์ฑํ๋ค.
 * calcaulate() ํจ์์ ์ธ์ ๊ฐ์ผ๋ก ๋ฐ๋ก ๋ฐ์ผ๋ฉด ๊ฐ๋์ฑ์ด ๋จ์ด์ง๋ฏ๋ก,
 * ๋ฐ๋ก ํ์์ ์ง์ ํ์ฌ ์ฌ์ฉํ๊ธฐ๋ก ํ๋ค.
 * */
function calculate(command: Command, a: number, b: number): number {
  /**
   * ์ฒซ๋ฒ์งธ ๋ฌธ์์ด์ ๋ฐ๋ฅธ ๊ณ์ฐ ๊ฒฐ๊ณผ๊ฐ ๋ฆฌํดํ๊ธฐ
   * ์ฌ๋ฌ๊ฐ์ง case ๋ณ๋ก ํธ๋ค๋ง์ ํด์ผํ๊ธฐ ๋๋ฌธ์ switch ๋ฌธ์ ์ด์ฉํ๋ฉด ์ข์ ๊ฒ์ด๋ค.
   * */
  switch (command) {
    case "add":
      return a + b;
    case "substract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    case "remainder":
      return a % b;
    /**
     * default ๋ฅผ ํตํด์
     * ๋ชจ๋  case ์ ํด๋น์ด ๋์ง ์์์ ๋ <= ๋ฅผ ์ฒ๋ฆฌํด์ฃผ๋ error ํธ๋ค๋ง ๊ฐ์ ์ถ๊ฐํ๋ค.
     */
    default:
      throw new Error("unknown command");
  }
}

// Q.
console.log(calculate("add", 1, 3)); // ๊ฒฐ๊ณผ๊ฐ์ด 4
console.log(calculate("substract", 3, 1)); // ๊ฒฐ๊ณผ๊ฐ์ด 2
console.log(calculate("multiply", 4, 2)); // ๊ฒฐ๊ณผ๊ฐ์ด 8
console.log(calculate("divide", 4, 2)); // ๊ฒฐ๊ณผ๊ฐ์ด 2
console.log(calculate("remainder", 5, 2)); // ๊ฒฐ๊ณผ๊ฐ์ด 1
