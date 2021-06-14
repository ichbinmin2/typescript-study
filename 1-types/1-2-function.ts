{
  // JS
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  add(1, 2);

  // JS
  function jsFetchNum(id) {
    //code ..
    //code ..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript
  function tsFetchNum(id: string): Promise<number> {
    // Promise 중에서도 숫자를 리턴하겠다는 뜻
    //code ..
    //code ..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
}
