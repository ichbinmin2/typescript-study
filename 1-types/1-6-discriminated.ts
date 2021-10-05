{
  /**
   * Discriminated-Union Types: OR
   * 타입스크립트에서 코딩할 때 많이 쓰는 타입
   * "|" 라는 기호를 통해 "or" 즉, "또는" 이라는 뜻으로 사용
   */

  // function: login -> success, fail ⏱

  // ex.
  // 성공했을 때의 타입인 SuccessState 객체 지정
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  // 실패했을 때의 타입인 FailState 객체 지정
  type FailState = {
    result: "fail";
    reason: string;
  };

  // SuccessState | FailState 식으로 함수에 직접 타입을 정의하기 보다는 한번 더 타입을 정의하는 게 좋다.
  // Login 타입은 성공하거나 or 실패하거나
  type LoginState = SuccessState | FailState;

  // login 이라는 함수를 통해 LoginState 타입을 지정.
  // 각각 Union 안에 동일한 result라는 키를 가지고 있지만
  // 어떤 state냐에 따라서 다른 값이 다른 타입이 지정되어져 있다.
  function login(): LoginState {
    return {
      // 1. success와 fail 모두 가지고 있는 동일한 키 result
      result: "success",
      // 2. success와 fail 각각의 Union의 다른 state(response/reason)
      response: {
        // 만약 fail 을 주고 싶다면, response가 아니라 reason으로 작성해야 할 것이다.
        body: "logged in!",
      },
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  function printLoginState(state: LoginState) {
    // state.result => success or fail
    // state가 어떤 state(success state OR fail state)인지 상관없이
    // 각각의 Union은 공통적으로 result라는 key 값을 가지고 있으므로
    // tsc는 state로 result를 접근할 수 있도록 허용해준다.
    if (state.result === "success") {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }

  // 이렇듯 discriminated union 타입을 이용하면,
  // 1. 조금 더 직관적으로 타입을 작성할 수 있고,
  // 2. 조금 더 직관적으로 코드를 추론할 수 있도록 해준다.
}
