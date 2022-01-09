export {};

//継承 既存のclassを使って新たなclassを作成する
class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can run";
  }
}

// nameの初期化処理はsuperを使い親classで済ませ、speedのみ、子classで個別に初期化を行う
class Lion extends Animal {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    //super.メソッド名() 親classのメソッドを呼び出す
    return `${super.run()} ${this.speed}km/h.`;
  }
}
// let animal = new Animal();
// console.log(animal.run());
//
// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal("mickey").run());
console.log(new Lion("Simba", 80).run());
