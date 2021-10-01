{
  // * Array *
  // 타입을 정의하는 방법 1
  const fruits: string[] = ["🍅", "🍌"];
  // 타입을 정의하는 방법 2
  const scroes: Array<number> = [1, 3, 4];
  // 둘중에 어떤 것이 더 좋고 나쁨은 없지만 차이점은 있다.
  // 만약, 전달 된 백열을 출력하는 함수가 있다면,

  function printArray2(fruits: string[]) {}
  // 이 함수는 주어진 데이터를 이용해서 무언가 출력하거나 어떤 것을 할 수 있지만
  // 이 주어진 데이터를 변경하거나 업데이트를 할 수 없을 가능성이 높다.
  // 이럴 때, 전달된 인자를 함수 내부에서 변경하지 않도록 하기 위해서 타입으로 보장할 수 있는 방법이 있는데,
  // 바로 readonly 를 앞에 붙여주는 방법이다.

  // * readonly *
  function printArray(fruits: readonly string[]) {
    // * ex.
    // fruits.push <= 로 작성할 경우 error 가 발생하는 것을 확인할 수 있음!
  }
  // readonly로 타입을 지정한 fruits 데이터는 변경할 수 없게 되고
  // 오로지 읽는 용도의 데이터로만 기능하게 된다.

  // * tip.
  // 만약 동일한 방법인 Array<string> 앞에 readonly를 붙인다면?
  // function printArray(fruits: readonly Array<string> ) {}
  // 아직 이런 방식은 허용되고 있지 않고 있기에 사용하지 말자.

  // * Tuple *
  // 서로 다른 타입을 함께 가질 수 있는 배열이다.
  let student: [string, number];
  student = ["name", 123]; // 타입이 다른 두개의 데이터를 함께 사용할 수 있는 배열

  // * but.
  // Tuple을 사용하는 것을 권장하지 않는다.
  // * why ?
  // 1. index 처럼 접근하는 것이 가독성이 떨어지고 불편하다.
  // * ex.
  student[0]; // name
  student[1]; // 123

  // Tuple 을 사용하는 것보다
  // interface, type alias, class 을 대체해서 사용하는게 좋다.

  // * ex.
  const [name, age] = student;
  // react의 useState API 값을 불러오고 정의할 때 사용하는 방식과 동일하다.
  // * ex.
  // const [name, setName] = useState("");
}
