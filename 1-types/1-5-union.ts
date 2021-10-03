{
  /**
   *  Union Types: OR
   * 타입스크립트에서 코딩할 때 많이 쓰는 타입
   * "|" 라는 기호를 통해 "or" 즉, "또는" 이라는 뜻으로 사용
   */

  // ex. 문자열string | 문자열string
  type Direction = "left" | "right" | "up" | "down";
  // Direction 이라는 타입은 각각 "left" 또는 "right" 또는 "up" 또는 "down" 등
  // 총 네가지의 타입 중 하나의 타입을 가질 수 있게 되었다.
  function move(direction: Direction) {
    // 해당 move 라는 함수에서 받아오는 인자인 direction의 타입을 Direction으로 지정해놓았고,
    console.log(direction);
    // 간단하게 이 direction 함수를 출력하는 식을 적었다.
  }
  // 그리고, 해당 함수를 호출하면서 Direction 타입 중에 하나인 "down" 을 인자로 보내 출력해보면
  move("down");
  // console 에는 "down" 이 출력될 것이다.

  // ex. 숫자number | 숫자number
  type TileSize = 8 | 16 | 32;
  // TileSize 라는 타입은 각각 8 "또는" 16 "또는" 31 등
  // 총 세가징의 타입 중 하나의 타입을 가질 수 있게 되었다.
  const tile: TileSize = 16;

  // ex. 함수 실행 : success "또는" fail
  // function: login -> success, fail ⏱

  // 성공했을 때의 타입인 SuccessState 객체 지정
  type SuccessState = {
    response: {
      body: string;
    };
  };
  // 실패했을 때의 타입인 FailState 객체 지정
  type FailState = {
    reason: string;
  };

  // SuccessState | FailState 식으로 함수에 직접 타입을 정의하기 보다는 한번 더 타입을 정의하는 게 좋다.
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
    };
  }

  // Q.
  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason

  // A. 나의 답
  // function printLoginState(state: LoginState) {
  //   if (response in state) {
  //     return console.log(`🎉 ${response.body}`);
  //   } else {
  //     return console.log(`😭 ${response.reason}`);
  //   }
  // }

  // S. 해답
  function printLoginState(state: LoginState) {
    //
    if ("response" in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
  // 위 함수의 in state 와 같은 방식은 별로 추천되지 않는 방식이다.
  // 추천 방법은 Discriminated Union 챕터에서 확인
}
