{
  /**
   * Type Assertions 💩
   * 타입을 강요해야 할 때 사용하는 방법
   * 불가피할 경우에만 사용해야 함!
   */

  // * 첫번째 예시 *
  // ex. 문자열을 리턴하는 함수 jsStrFunc()
  function jsStrFunc(): any {
    return "hello";
  }

  // ex. jsStrFunc() 함수를 할당한 변수 result
  const result = jsStrFunc();

  /**
   * jsStrFunc() 함수를 할당한 변수 result는 "hello" 값을 가지고 있을 것이다.
   * 만약 "hello" 의 문자열 길이를 알고 싶어한다면 result.length를 사용해야겠지만,
   * result 라는 것은 any 타입이고 문자열 타입이 아니기 때문에 문자열 타입에서 이용가능한 length API를 사용할 수 없게 된다.
   * 하지만 '내가' 이 result라는 변수가 문자열 타입을 확신하고, 이 문자열 타입에서 이용가능한 length API 를 사용하고 싶다면,
   * Type Assertions 를 사용하면 되는 것이다.
   */

  // ex. Type Assertions
  console.log((result as string).length); // => 5가 출력이 된다.

  // * 두번째 예시 *
  // ex. 숫자를 리턴하는 함수 jsStrFunc()
  function jsStrFunc2(): any {
    return 2;
  }

  // ex. jsStrFunc()2 함수를 할당한 변수 result2
  const result2 = jsStrFunc2();

  // ex. Type Assertions
  // 1.
  console.log((result2 as string).length);
  // 2.
  console.log((<string>result2).length);
  /**
   * jsStrFunc2(); 함수는 숫자 2를 리턴하는, 즉 숫자 타입을 리턴하는 함수임에도
   * Type Assertion 을 사용하여 '문자열'임을 확신하는 코드를 작성해도, error가 발생하지 않는다.
   * 이는 타입을 제대로 보장하지 않을 수도 있는 것이다.
   */

  // * 세번째 예시 *
  // ex. any 타입인 변수 wrong
  const wrong: any = 5;

  // ex. Type Assertions 을 통해 [배열] 타입임을 확신하는 코드 😱
  console.log((wrong as Array<number>).push(1)); // 😱
  /**
   * 실행할 경우, error 가 발생하고, 심지어 어플리케이션이 강제 종료되는 것을 확인할 수 있다.
   * 코딩을 할 때는 문제가 없지만, 실시간으로 어플리케이션이 죽을 수도 있는 문제점이 발생한다.
   */

  // * 네번째 예시 *
  // ex. 숫자를 찾으면 number[] array를 리턴하고, 찾지 못하면 undefined를 리턴하는 함수 findNumbers()
  function findNumbers(): number[] | undefined {
    return undefined;
  }

  // ex. findNumbers() 함수를 할당한 변수 numbers
  const numbers = findNumbers()!;
  // ex. Type Assertions 을 통해 리턴값이 [배열] 타입임을 확신하는 코드 😱
  numbers.push(2); // 😱
  /**
   * 숫자일 수도 있고, undefined일 수도 있는 상황에서
   * 타입을 확신하는 Type Assertion를 쓴다면, 당연히 error 가 발생할 것이다. => 어플리케이션이 죽는다.
   */

  // * 다섯번째 예시 *
  const button = document.querySelector("class")!;
  /**
   * querySelector 선택자를 이용해서 DOM 요소를 동적으로 받아올 수 있는 예제이다.
   * 이 querySelector는 요소가 있을 수도 있고, null 일수도 있는 함수이다.
   * 이렇게 button으로 nodeValue에 접근하게 되면,
   * 오브젝트는 지금 button은 null 일 가능성도 있다며 경고 메세지를 보낸다.
   */

  /**
   * 정리
   * type assertion은 이렇듯 100% 확신하는 상황일 때에만 사용할 수 있는 것이고,
   * 그 외에는 가능하면 절대로 사용하지 않는게 좋다. 리스크가 크기 때문에.
   */
}
