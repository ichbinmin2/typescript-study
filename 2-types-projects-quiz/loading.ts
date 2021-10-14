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
