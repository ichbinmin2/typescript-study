{
  /**
   * Type Aliases
   * 복잡하고 재밌는 타입들을 정의할 수 있게 해주는 Alias
   * 새로운 타입을 내가 '직접' 정의할 수 있다는 말.
   */

  // ex. 원시타입 string
  type Text = string;
  // Text 라는 새로운 type은 string문자열 타입이라고 지정한다는 뜻
  const name: Text = "ellie"; // 문자열만 가능
  const address: Text = "korea"; // 문자열만 가능

  // ex. 원시타입 number
  type Num = number;
  // Num 이라는 새로운 type은 number숫자 타입이라고 지정한다는 뜻

  // ex. 오브젝트타입 Obj = { 요소 1: string; 요소 2: number;}
  type Student = {
    name: string; // 문자열 타입으로 지정
    age: number; // 숫자 타입으로 지정
  };
  // Student 라는 새로운 객체 type은 각각의 객체 요소 name을 string 타입으로, age를 number 타입으로 지정한다는 뜻
  const student: Student = {
    name: "ellie", // 문자열만 가능
    age: 12, // 숫자만 가능
  };

  /**
   * String Literal Types
   * 타입을 특정 string문자열로 지정하면 자동으로 타입이 그 특정 string문자열로 지정이 되는 방식
   */

  // ex. 특정 문자열string으로 타입을 지정1
  type Name = "name";
  // type Name = "name" 으로 직접 문자열로 지정하면서 해당 타입은 "name"이 된다
  let ellieName: Name;
  // ellieName 의 타입은 Name 즉, "name" 으로 지정해놓았으므로
  ellieName = "name";
  // elieName의 값은 무조건 "name"이 되어야 한다. 다른 값은 할당해줄 수 없다.

  // ex. 특정 문자열string으로 타입을 지정2
  type JSON = "json";
  // type JSON = "json" 으로 직접 문자열로 지정하면서 해당 타입은 "json"이 된다
  const json: JSON = "json";
  // JSON 의 타입은 JSON 즉, "json" 으로 지정해놓았으므로
  // json의 값은 무조건 "json"이 되어야 한다. 다른 값은 할당해줄 수 없다.

  // ex. 특정 boolean으로 타입을 지정
  type Boal = true;
  // type Boal = true으로 직접 불리언의 값을 지정하면서 해당 타입은 true가 된다
  const isCat: Boal = true;
  // Boal 의 타입은 true 즉, true 으로 지정해놓았으므로
  // isCat의 값은 무조건 true가 되어야 한다. 다른 값은 할당해줄 수 없다.
}
