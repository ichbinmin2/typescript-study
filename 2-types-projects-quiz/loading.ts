{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network

  /** ellie solution */
  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        console.log("👀 loading...");
        break;
      case "success":
        console.log(`😃 ${state.response.body}`);
        break;
      case "fail":
        console.log(`😱 ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state : ${state}`);
    }
  }

  /** switch VS if
   * union type의 경우, 여러 케이스별로 다른 로직을 적용할 때는 switch 문이 더 적절하다.
   * 만약, 다른 타입 등을 추가한다면 추가된 케이스는 전부 다 else 문 안에서 처리가 되기 때문에 예상치 못한 error가 발생할 확률이 높다.
   */

  /** my A
    function printLoginState(state: ResourceLoadState) {
    if ("loading" in state) {
      console.log("👀 loading...");
    } else if ("success" in state) {
      console.log("😃 loaded");
    } else {
      console.log("😱 no network");
    }
  }
   */
}
