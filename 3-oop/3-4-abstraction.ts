{
  /* abstraction 캡슐화 시켜보기 */

  // type 지정
  type CoffeeCup = {
    shot: number;
    hasMilk: boolean;
  };

  // 계약서 (interface)
  interface CoffeeMaker {
    // makeCoffe는 shots 이라는 number tpye의 인자를 받고
    // CoffeeCup 타입을 return 한다. 는 계약서
    makeCoffee(shots: number): CoffeeCup;
  }

  /** 중요 **
   * 이 CoffeeMachine 이라는 클래스는 CofeeMaker 라는 계약서(interface)를 구현한다는 의미이다.
   * 즉, CofeeMaker(interface)를 구현(implements)한다는 뜻은
   * 이 CofeeMaker(interface)에서 규격된 모든 함수를 CoffeeMachine 클래스에서 구현해야 된다는 뜻.
   */
  class CoffeeMachine implements CoffeeMaker {
    private coffeeBeans: number = 0;
    private static BEANS_GRAM_PER_SHOT = 7;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(cofffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(cofffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("커피 콩의 갯수는 0보다 커야 합니다.");
      }

      this.coffeeBeans += beans;
    }

    grindBeans(shots: number) {
      console.log(`전달해준 ${shots} 만큼 커피를 갈고 있어.`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("커피 콩은 충분해!");
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    preheat(): void {
      console.log("데워지고 있습니다.");
    }

    // 결과를 return 하는  함수
    extract(shots: number): CoffeeCup {
      console.log(`${shots}만큼 커피를 만들고 있어 `);
      return {
        shot: shots,
        hasMilk: false,
      };
    }

    // 함수 1
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);

      //   if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
      //     throw new Error("커피콩이 부족해, 커피를 제조할 수 없습니다.");
      //   }
      //   this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      //   return {
      //     shot: shots,
      //     hasMilk: false,
      //   };
    }
  }

  const maker = CoffeeMachine.makeMachine(2);
  const result = maker.fillCoffeeBeans(2);
  console.log(result);

  /**  결론
   * 추상화는 인터페이스를 간단하게 만들어서 사용하는 사람들이 간단하게 이용할 수 있도록 해준다.
   * 정보은닉이나 캡슐화를 통해서 충분히 추상화는 가능하다.
   */
}
