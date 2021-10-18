/**
 * 객체지향적으로 커피머신 만들기 *
 * 규칙
1. 오브젝트를 이용해서 커피 머신을 만들고,
2. 커피머신이라는 클래스를 구현
3. 커피머신 안에는 coffeeBeans , makCoffee() 함수가 있어야 한다.
 */

{
  /**
     * my A
      type CoffeeCup = {
    shot: number;
    hasMilk: boolean;
  };

  class CoffeeM {
    coffeeBeans: number;
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static BEANS_GRAM_PER_SHOT = 7;

    static makeMachine(coffeeBeans: number) {
      if (this.coffeeBeans < shot * CoffeeMarchine.BEANS_GRAM_PER_SHOT) {
        throw new Error("커피콩이 부족해, 커피를 제조할 수 없습니다.");
      }
      this.coffeeBeans = coffeeBeans;
    }

    makeCoffee(shots: number): CoffeeCup {
      // coffee beans이 충분한지 먼저 체크

      // 커피를 만들 때마다 cofee beans의 소모갯수를 계산
      this.coffeeBeans -= shots * CoffeeMarchine.BEANS_GRAM_PER_SHOT;
      return {
        shot: shots,
        hasMilk: false,
      };
    }
  }
  const coffee = CoffeeMarchine.makeMachine(2);
  console.log(coffee);
     */

  /** ellie Solution */
  type CoffeeCup = {
    shot: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // static 변수
    static BEANS_GRAM_PER_SHOT = 7; // static을 붙임으로써 사용한계를 해당 class level(CoffeeMaker)로 지정.
    /**
     * BEANS_GRAM_PER_SHOT 변수는 변하지 않는 숫자 값이기 떄문에, 멤버변수에 두지 않는게 좋다
     * 클래스에서 한번 정의되어, 이 클래스를 이용한 오브젝트 사이에서 공유가 될 수 있는 값을 멤버변수로 두게 될 경우
     * 오브젝트를 생성할 때마다 중복적으로 데이터를 생성하기 때문에 메모리의 낭비를 불러일으킨다.
     * => 그래서 static 키워드를 사용하여 정적으로 메소드를 정의하도록 만든다.
     * */
    //
    coffeeBeans: number = 0; // instance (object) 멤버변수로 지정.
    // 생성자 1개
    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    /** static 함수 예시 **
     * 내가 만약 constructor생성자를 이용하지 않고 새로운 커피 머신을 만들고 싶다면
     * CoffeeMaker 클래스 내부에서 static 키워드를 이용하여 함수를 생성한다.
     */
    static makeMachine(cofffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(cofffeeBeans);
    }
    /**
     * 이 함수는 새로운 커피머신을 만들어서 리턴해주는 함수이다.
     * CoffeeMaker 내부에 있는 어떠한 속성값도 필요하지 않기 때문에 static을 붙일 수 있다.
     */

    // 함수 1
    makeCoffee(shots: number): CoffeeCup {
      // coffee beans이 충분한지 먼저 체크
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("커피콩이 부족해, 커피를 제조할 수 없습니다.");
      }

      // 커피를 만들 때마다 cofee beans의 소모갯수를 계산
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shot: shots,
        hasMilk: false,
      };
    }
  }

  // 새로운 오브젝트를 생성해서 생성자 값을 전달
  const maker = new CoffeeMaker(3);
  console.log(maker);
  /** 출력값 **
   * 1. BEANS_GRAM_PER_SHOT 를 멤버변수로 사용했을 때
   * CoffeeMaker { BEANS_GRAM_PER_SHOT: 7, coffeeBeans: 3 }
   * 2. BEANS_GRAM_PER_SHOT 를 static 키워드를 이용하여 class level로 지정하였을 때
   * CoffeeMaker { coffeeBeans: 3 }
   */

  // CoffeeMaker클래스 내부에서 static makeMachine() 함수를 생성한 것을 이용했을 떄
  const maker3 = CoffeeMaker.makeMachine(2);
  console.log(maker3);
  /** 출력값 **
   *
   * CoffeeMaker { coffeeBeans: 2 }
   */

  /** 결론
   * 클래스는 관련된 속성과 함수들을 묶어서 어떤 모양의 데이터가 될 것이라는 것을 정의.
   * 이 정의된 클래스를 통하여 실제로 데이터를 넣어서 오브젝트를 생성할 수 있다.
   * 매번 동일하게 만들어져야 할 데이터가 있다면 멤버 변수로 지정하고,
   * 클래스 내부에서만 공유되어야 할 데이터라면 static 키워드를 이용한다.
   * static은 함수에서도 적용이 된다.
   *
   */
}
