/**
 * Let's make a calculator 🧮
 */

/**
 * ellie님 솔루션 calculate() 함수의 첫번째 인자는 임의의 문자열이 아니라, 엄연히 개수가 제한되어 있는 명령어를 받을 수 있고
 * 두번째, 세번째는 각각의 숫자 타입을 받아와 이 인자를 계산한 결과값을 리턴해주고 있다. */

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";
/**
 * command 인자는 갯수가 제한되어 있고,
 * 총 다섯가지 중에 하나만 받을 수 있는 union 타입을 '|'(또는) 사용하여 작성한다.
 * calcaulate() 함수의 인자 값으로 바로 받으면 가독성이 떨어지므로,
 * 따로 타입을 지정하여 사용하기로 한다.
 * */
function calculate(command: Command, a: number, b: number): number {
  /**
   * 첫번째 문자열에 따른 계산 결과값 리턴하기
   * 여러가지 case 별로 핸들링을 해야하기 때문에 switch 문을 이용하면 좋을 것이다.
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
     * default 를 통해서
     * 모든 case 에 해당이 되지 않았을 때 <= 를 처리해주는 error 핸들링 값을 추가한다.
     */
    default:
      throw Error("unknown command");
  }
}

console.log(calculate("add", 1, 3)); // 결과값이 4
console.log(calculate("substract", 3, 1)); // 결과값이 2
console.log(calculate("multiply", 4, 2)); // 결과값이 8
console.log(calculate("divide", 4, 2)); // 결과값이 2
console.log(calculate("remainder", 5, 2)); // 결과값이 1
