/**
 * 절차지향적으로 커피머신 만들기 *

 * 규칙
1. 커피콩을 가지고 있는 '전역' 변수가 있다.
2. 커피콩을 가지고 커피를 만드는 함수가 있다.
 * 이 함수에는 한가지 인자를 전달할 수 있다.
3. 이 한가지 인자는 바로 shot 이며,
 * 커피를 만드는 함수에 얼마나 더 많은 shot을 포함할 것인지
 * 전달하는 인자이다.
4. 커피를 만드는 함수는 커피를 만들어서 리턴한다.
5. typescript를 이용해서 각각의 타입을 지정하고 구현한다.
 */

/**  my A
전역변수 : 커피콩
{
  let coffeeBean: number = 0;

  // 인자 : shot의 갯수를 정함
  // type Orders = "oneShot" | "twoShot" | "threeShot" | "fourShot";
  type Orders = 1 | 2 | 3 | 4;
  const shots = (order: Orders): number => {
    switch (order) {
      case 1:
        return coffeeBean + 1;

      case 2:
        return coffeeBean + 2;

      case 3:
        return coffeeBean + 3;

      case 4:
        return coffeeBean + 4;

      default:
        throw new Error("주문이 잘못되었습니다.");
    }
  };
  // 함수 : shot의 인자를 받아서 커피를 만듬
  function makeCoffee(shots: number) {
    let coffee = `${shots} shot 이 들어간 커피입니다`;
    return coffee;
  }
  console.log(makeCoffee(2));
}
*/

/** ellie Solution */
{
  // coffee의 형태와 타입 정의
  type CoffeeCup = {
    shot: number;
    hasMilk: boolean;
  };
  // 1 coffee 당 필요한 shot 갯수
  const BEANS_GRAM_PER_SHOT = 7;
  // coffee beans
  let coffeeBeans: number = 0;

  // coffee 를 만드는 함수
  function makeCoffee(shots: number): CoffeeCup {
    // coffee beans이 충분한지 먼저 체크
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("커피콩이 부족해, 커피를 제조할 수 없습니다.");
    }

    // 커피를 만들 때마다 cofee beans의 소모갯수를 계산
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shot: shots,
      hasMilk: false,
    };
  }

  // 커피콩 충전
  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  /**
   * 커피콩 갯수를 채우지않고 실행하면 커피콩이 0이기 때문에
   * 콘솔에 "커피콩이 부족해, 커피를 제조할 수 없습니다." 로 출력된다.
   */

  // 커피를 만든다 -> 주문
  const coffee = makeCoffee(2);
  console.log(coffee);
  // 출력 결과 : { shot: 2, hasMilk: false }
}
