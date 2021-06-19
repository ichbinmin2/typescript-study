{
  // JS 기본기를 전제로 진행
  // old : var => 이제 쓰면 안됨. 타입스크립트에서 사용하면 안된다.
  // 모든 브라우져에서 사용할 수 있기 때문에, 버전 호환성 때문에 var를 쓰지 않아도 된다.
  //   var age = 5;
  //   age = 1;

  /** 
   * let
  let name = "hello";
  재 선언 가능
  name = "hi"; */

  /** 
   * const
  const age = 5;
  재 선언 불가능
  age = 5;
 */

  /**
   * JS
   * Primitive : number, string, boolean, bigint (더 큰 숫자범외를 할당), symbol, null, undefined
   * Object : function, array ....
   */

  // typescript

  // number
  const num: number = 0.1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = true;

  // undefined : 값이 있는지 없는지 아무것도 결정되지 않은 상태
  let name: undefined; // 단독적으로 절대 쓰지 않는다.
  let age: number | undefined; // 보편적으로 null 보다 더 많이 쓰는 형태
  age = undefined;
  age = 1;
  // undefined 예시
  function find(): number | undefined {
    return undefined;
  }

  // null : 조금 더 명확하게 비워져 있다는 걸 명시하는 상태
  let person: null; // 단독적으로 절대 쓰지 않는다.
  let person2: string | null;

  // unknown : 어떤 데이터든 담을 수 있다. 무슨 타입인지 알 수 없는 상태.
  // 가능하면 쓰지 않는게 중요하다.
  let notSure: unknown = 0; // number
  notSure = "he"; // string
  notSure = true; // boolean

  // any : unknown과 마찬가지로 무엇이든 할당할 수 있다.
  // 가능하면 쓰지 않는게 중요하다.
  let anthing: any = 0;
  anthing = "hello";

  // void : 텅텅빈, 공허한. 함수에서 아무런 것도 리턴하지 않으면 자동으로 붙는 타입. 생략도 가능하다.
  // 보통은 함수에서 무언가를 리턴할 때 타입을 명시하는 것이 좋은 관례이다.
  // 함수
  function print(): void {
    console.log("hello");
    return;
  }
  // 변수
  let unusable: void = undefined;
  // 변수의 선언에서 쓰는 경우는 극히 드물다.

  // never : 주로 어플리케이션에서 에러를 던질 때 (핸들링이 어려운 에러일 때) 처리하기 위해서 쓰는 타입
  // 즉, 나는 이 함수를 통해 리턴할 계획이 전혀 없으니까 이것을 감안하고 코딩하라는 말과 동일.
  // naver 타입에는 절대 다른 것을 리턴할 수가 없으며, return을 기입하면 error가 발생하기 때문에 주의해야 한다.
  // 변수에서는 사용하지 않는다.
  function throwError(message: string): never {
    // * message -> server (log) 메세지를 서버에 보내서 로그를 남기고
    throw new Error(message); // 어플리케이션에서 에러를 던진다.

    /**
     * while (true) { }
     * 빙글빙글 돌기만 하고 리턴해주지 않는다.
     */
  }

  // object : 어떤 obj의 타입도 데이터로 담을 수 있는 타입.
  // 원시 타입을 제외한 모든 오브젝트 타입을 할당할 수가 있다.
  // 배열도 전달할 수 있다!
  // 그러나, 되도록이면 쓰지 않는게 좋다. (타입은 좀 더 명확하게, 좀 더 자세하게 작성해야 한다)
  let obj: object;
  function acceptSomeObject(obj: object) {}
  // 어떠한 obj도 전달할 수 있다.
  acceptSomeObject({ name: "elle" });
  acceptSomeObject({ animal: "dog" });
}
