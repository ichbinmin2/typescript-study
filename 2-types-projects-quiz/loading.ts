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

  printLoginState({ state: "loading" }); // π loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // π loaded
  printLoginState({ state: "fail", reason: "no network" }); // π± no network

  /** ellie solution */
  function printLoginState(state: ResourceLoadState) {
    switch (state.state) {
      case "loading":
        console.log("π loading...");
        break;
      case "success":
        console.log(`π ${state.response.body}`);
        break;
      case "fail":
        console.log(`π± ${state.reason}`);
        break;
      default:
        throw new Error(`unknown state : ${state}`);
    }
  }

  /** switch VS if
   * union typeμ κ²½μ°, μ¬λ¬ μΌμ΄μ€λ³λ‘ λ€λ₯Έ λ‘μ§μ μ μ©ν  λλ switch λ¬Έμ΄ λ μ μ νλ€.
   * λ§μ½, λ€λ₯Έ νμ λ±μ μΆκ°νλ€λ©΄ μΆκ°λ μΌμ΄μ€λ μ λΆ λ€ else λ¬Έ μμμ μ²λ¦¬κ° λκΈ° λλ¬Έμ μμμΉ λͺ»ν errorκ° λ°μν  νλ₯ μ΄ λλ€.
   */

  /** my A
    function printLoginState(state: ResourceLoadState) {
    if ("loading" in state) {
      console.log("π loading...");
    } else if ("success" in state) {
      console.log("π loaded");
    } else {
      console.log("π± no network");
    }
  }
   */
}
