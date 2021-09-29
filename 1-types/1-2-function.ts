{
  // JS
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // Typescript
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }
  // add(1, 2);

  // // JS
  // function jsFetchNum(id) {
  //   //code ..
  //   //code ..
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // Typescript
  function tsFetchNum(id: string): Promise<number> {
    // Promise 중에서도 숫자를 리턴하겠다는 뜻
    //code ..
    //code ..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JS => TS

  // 1. Optional parameter (before)
  function printName(firstName: string, lastName: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "dam");
  // printName('min', 0);
  // 정해진 인자의 갯수와 타입을 지켜서 작성하지 않으면, error가 발생.

  // 이처럼, 두가지의 경우에 모두다 활용할 수 있는 함수를 만들고 싶을 떄
  // 1. Optional parameter 를 사용한다. (after)
  function printNames(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printNames("Steve", "dam");
  printNames("min");
  printNames("Anna", undefined);
  // Optional parameter를 사용함으로써
  // 인자의 갯수가 달라도, 인자의 타입을 지키지 않아도
  // error가 발생하지 않는 걸 확인할 수 있다.

  // lastName? 는 lastName: string | undefined 란 뜻이다.
  // Optional parameter 를 이용하면 인자를 전달해도 되고, 전달하지 않아도 된다.

  // * 비슷하지만 다른 방식도 있다.
  // 만약 Optional parameter를 이용하지 않고,
  // lastName: string | undefined 라고 명시적으로 정의를 해놓으면,
  function printNames(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName);
  }
  printNames("Steve", "dam");
  printNames("min");
  printNames("Anna", undefined);
  // 항상 무조건 정확하게 undefined라고 정의를 해줘야 한다. (되도록이면, Optianal parameter를 사용하자)

  // 2. Default parameter
  function printMessage(message: string) {
    console.log(message);
  }
  printMessage();
  // 해당 함수를 출력하면서 인자를 전달하지 않으면 error가 발생한다.
  // 만약에 사용자가 아무런 인자도 전달하지 않고, 기본 message를 출력하고 싶다면

  // 2. Default parameter를 사용하면 된다.
  function printMessages(message: string = "default message") {
    console.log(message);
  }
  printMessages(); // 아무런 인자를 전달하지 않았으나, default message인 'default message'가 출력된다.

  // 앞의 예시처럼 해당 함수에 아무런 인자를 전달하지 않았으나,
  // Default parameter를 사용함으로써 error가 발생하지 않고,
  // 해당 Detault parameter 기본 값으로 지정해놓은
  // 'default message' 값을 출력하는 것을 확인할 수 있다.

  // 3. Rest parameter
  // 만약 인자의 갯수의 제한 없이 원하는 만큼 전달하면
  // 알아서 자동으로 전부 더해주는 함수를 만들어야한다면 어떻게 해야할까?
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
