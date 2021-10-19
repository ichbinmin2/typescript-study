{
  /** encapsulation 캡슐화 시켜보기
   * 규칙
   * 1. 이전의 커피머신 로직을 발전시키기
   * 2. 고양이의 예제를 이용하기
   * 3. 정보를 은닉해서 캡슐화하여 작성하기
   */

  /****** my A ******
   
     type Emotion = {
    hasHappy: boolean;
    hasFull: boolean;
  };

  class CatCurrentState {
    // 0. 고양이의 상태
    catCurrMind: number = 0;
    catCurrHealth: number = 0;

    // 1. static 변수 : 고양이가 먹어야할 먹이 수
    static FULL_CAT_PER = 5;
    //2. static 변수 : 고양이가 행복해하는 기준
    static HAPPY_CAT_PER = 10;

    // 생성자 2개
    constructor(catCurrMind: number, catCurrHealth: number) {
      //   super();
      this.catCurrMind = catCurrMind;
      this.catCurrHealth = catCurrHealth;
    }

   // static 함수 예시 **
    //  * 내가 만약 constructor생성자를 이용하지 않고 새로운 클래스를 만들고 싶다면
    // * CatCurrentState 클래스 내부에서 static 키워드를 이용하여 함수를 생성한다.
     
     static makeHappyCat(
        catCurrMind: number,
        catCurrHealth: number
      ): CatCurrentState {
        return new CatCurrentState(catCurrMind, catCurrHealth);
      }
  
      // 함수 1. peed 먹이주기
      makePeed(peed: number): Emotion {
        // 1. 캣의 상태가 배부른지 체크
        if (this.catCurrHealth > peed * CatCurrentState.FULL_CAT_PER) {
          // => 배부르다면 error 발생시키기
          throw new Error("고양이는 이미 배가 부릅니다.");
        }
  
        // 2. 먹이를 줄 때마다 현재 캣의 상태가 어떤지 갱신
        this.catCurrHealth += peed * CatCurrentState.FULL_CAT_PER;
        return {
          hasHappy: true,
          hasFull: true,
        };
      }
  
      // 함수 2. play 놀아주기
      makePlay(playing: number): Emotion {
        // 1. 캣의 상태가 충분히 행복한지 체크
        if (this.catCurrMind > playing * CatCurrentState.HAPPY_CAT_PER) {
          // => 피곤하다면 error 발생시키기
          throw new Error("고양이는 이미 충분히 행복합니다.");
        }
  
        // 2. 놀아줄 때마다 현재 캣의 상태가 어떤지 갱신
        this.catCurrMind += playing * CatCurrentState.HAPPY_CAT_PER;
        return {
          hasHappy: true,
          hasFull: true,
        };
      }
    }
  
    // 새로운 오브젝트를 생성해서 생성자 값을 전달하기
    const catLife = new CatCurrentState(6, 3);
    console.log(catLife);
  
    // CoffeeMaker클래스 내부에서 static makeHappyCat() 함수를 생성한 것을 이용하기
    const catLife2 = CatCurrentState.makeHappyCat(9, 20);
    console.log(catLife2);
  */

  /****** ellie solution ******
   * public : 외부에서 접근가능. default로 설정되어 있음.
   * private : 외부에서 절대 접근 불가능.
   * protected : 상속하는 자식 클래스에서만 접근 가능. 외부에서 접근 불가능.
   */
  type CoffeeCup = {
    shot: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    /* 멤버 변수 : instance (object) 멤버변수로 지정.
     * private 키워드를 이용해서 데이터를 은닉. */
    private coffeeBeans: number = 0;
    /* static 변수 : static을 붙임으로써 사용한계를 해당 class level(CoffeeMaker)로 지정.
     * private 키워드를 이용해서 데이터를 은닉/ */
    private static BEANS_GRAM_PER_SHOT = 7;

    /** static makeMachine 을 사용하기 때문에
     * constructor 생성자에 private 키워드를 붙여주었다.
     */
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    /**
     * static 키워드를 사용해서 오브젝트를 생성하는 함수를 이용하는 것은
     * 누군가가 외부에서 생성자를 이용해서 생성하는 것을 금지하기 위해서다.
     * 이런 경우에는 constructor 자체를 private로 만들어서
     * 항상 static 메소드를 이용할 수 있도록 권장한다.
     */
    static makeMachine(cofffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(cofffeeBeans);
    }

    /** 데이터를 은닉했음에도, 외부에서 접근할 수 있는 함수를 만들기.
     * 외부에서 직접적으로 데이터에 접근하는 것이 아니라,
     * 아래의 함수 fillCoffeeBeans()를 통해서 커피콩을 채울 수 있게 된다.
     * => public fillCoffeeBeans(beans: number) {}
     */
    fillCoffeeBeans(beans: number) {
      // 0보다 작은 갯수가 들어왔을 때를 방지해주는 식을 작성.
      if (beans < 0) {
        throw new Error("커피 콩의 갯수는 0보다 커야 합니다.");
      }

      // 정상적인 갯수(0보다 이상)가 들어왔을 때 beans를 coffeeBeans에 추가해준다.
      this.coffeeBeans += beans;
    }

    // 함수 1
    makeCoffee(shots: number): CoffeeCup {
      // coffee beans이 충분한지 먼저 체크
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("커피콩이 부족해, 커피를 제조할 수 없습니다.");
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shot: shots,
        hasMilk: false,
      };
    }
  }

  // 1. CoffeeMaker클래스 내부에서 static makeMachine() 함수를 생성한 것을 이용
  const maker = CoffeeMaker.makeMachine(2);
  // 2. 외부에서 접근할 수 있는 함수 fillCoffeeBeans() 로 호출.
  maker.fillCoffeeBeans(2);
}
