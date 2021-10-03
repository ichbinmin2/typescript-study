{
  /**
   * Intersection Types: &
   * Union과 완전히 반대되는 Type
   * "&" 라는 기호를 통해 "동시에", "~와" 라는 뜻으로 사용한다.
   *
   */

  // ex. 첫번째 타입 Student
  type Student = {
    name: string;
    score: number;
  };

  // ex. 두번째 타입 Worker
  type Worker = {
    empolyeeId: number;
    work: () => void;
    // void는 아무런 인자도 받지 않고,
    // 아무런 것도 return하지 않는 함수일 때 쓰는 타입이다.
    // 생략이 가능하다.
  };

  // ex. internWork 함수 설정
  // 앞서 두가지 타입(Student "와" Worker)을 person 이라는 인자로 "동시에" 받는 함수
  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
    // person은 모든 값(Student, Worker)들에 접근을 할 수 있다.
  }

  // ex. internWork() 함수 호출
  // internWork의 함수를 호출할 때는
  // Student Type과 Worker Type을 동시에 인자로 받아왔으므로
  // 모든 데이터가 들어있는 총 합의 object를 전달해야 할 것이다.
  // 해당 state 값을 모두 기입-선언해주어야지 error가 발생하지 않는다.
  internWork({
    name: "ellie",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });

  // 이처럼, intersection 타입을 이용하면
  // 다양한 타입들을 하나로 묶어서 선언할 수가 있다.
}
