export {};

//インスタンスからの呼び出しを制限したりできる
//private classの中からはアクセスできる。例:profile関数の中。
//public classの外からでも参照することができる。わざわざpublicを書く必要はない
//protected 子classから参照することができる。classの外からはできない。
class Parson {
  public name: string;
  //private age: number;
  protected age: number;
  protected nationality: string;
  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}`;
  }
}

class Android extends Parson {
  constructor(name: string, age: number, nationality: string) {
    //親クラスのconstructorを呼ぶ
    super(name, age, nationality);
  }
  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

let taro = new Parson("Taro", 30, "Japan");
console.log(taro.name);
//console.log(taro.age);
console.log(taro.profile());
//let hanako = new Parson();
