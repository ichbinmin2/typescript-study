{
  /**
   * Enum
   * 여러가지의 상수 값을 하나로 정의할 수 있게 해준다.
   * JS는 하나의 상수 값만 정의할 수 있기 때문에
   * 타입스크립트를 통해서 Enum type을 가능하게 해준다.
   */

  // * JavaScript 상수를 정의할 때 : 고정값 *
  // ex. 독립적인 상수 정의
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  // ex. 서로 연관되어 있지만 독립적으로 존재하는 상수 정의
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  // 이처럼 서로 연관되어져 있지만 묶을 수 있는 타입이 따로 존재하지 않는다.
  // 그래서 최대한 Enum에 가깝에 표현할 수 있는 방법을 써야 한다.
  // freeze API를 사용해서 오브젝트를 '꽁꽁' 얼려 더이상 수정이 안되게끔 정의하는 방법이 있다.
  // ex. Object.freeze({})
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // * TypeScript *
  // ex.

  // Days enum 정의
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }

  // 타입이 보장되며 간편하게 확인 가능.
  console.log(Days.Monday); // 0 이 출력된다.
  // enum은 값을 따로 정하지 않으면 객체의 첫번째 요소부터 0 값이 주어지고
  // 다음 요소부터 1씩 증가하기 때문에
  // 시작 값을 다르게 정하고 싶다면 미리 값을 지정해야 한다.
  // ex.
  // enum Days2 {
  //   Monday = 1,
  //   Tuesday,
  //   Wednesday,
  //   Thursday,
  //   Friday,
  //   Saturday,
  //   Sunday,
  // }
  // console.log(Days.Monday);
  // 1 <= 이 출력된다

  // * 문자열을 지정하고 싶을 경우에는 *
  // 객체 내의 모든 요소에 문자열 값을 지정해줘야 한다.

  // * 타입스크립트에서 enum은 가능한 사용하지 않는게 좋다 *
  // 이유
  let day: Days = Days.Saturday;
  // 변수 day 는 Days 라는 타입이고, Days.Saturday 로 접근해서 값을 지정해주었다.
  day = Days.Saturday;
  // 그리고 다시 변수 day릃 Days.Saturday 로 할당해주고
  day = 10;
  // 값을 다시 재정의했다.
  console.log(day);
  // 10

  // 이렇듯, enum으로 타입이 지정된 변수에는 다른 어떤 숫자도 할당이 가능해진다.
  // 즉, 타입이 정확하게 보장되지 않는 것이다.
  // 만약 상수들을 묶을 수 있는 방법이 enum 밖에 없다면, 타입스크립트에서는 enum을 써야겠지만
  // 타입스크립트에는 union 타입이 이미 존재하기 때문에, 굳이 enum 타입을 사용할 필요가 없는 것이다.

  // ex. union 타입으로 재정의한 Days
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  let dayOfweek: DaysOfWeek = "Monday";
  // 변수에 다른 값을 할당했을 때 지정한 union 타입 안에 있는 값만 지정이 가능하도록 해준다.
  // 만약, union 에서 지정하지 않은 타입의 값을 재할당한다면 error가 발생한다.
  dayOfweek = "Wednesday";

  // *
  // 이처럼, enum은 충분히 union string literal 로 대체되어서 사용가능하기 때문에
  // 굳이 enum을 쓰지 않으면서+타입을 보장받으면서도 사용할 수 있다.
  // 대부분의 케이스에서 enum이 아니라 union 타입으로 대체되어 사용 가능하지만
  // 꼭 enum이 필요한 경우가 딱 하나 있는데,
  // 안드로이드나 IOS를 위한 프로그래밍언어를 사용해야할 때이다.
}
