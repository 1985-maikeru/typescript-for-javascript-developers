export {};

// インスタンスを生成するごとに値が変わるメンバーが動的

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "maikeru";
  static lastName: string = "Nishida";
  static work() {
    //return "Hey! gutys! Are you ~";
    return `Hey! gutys! This is ${this.firstName}! Are you ~`;
  }
}
// let me = new Me();
// console.log(me.isProgrammer);

//static（静的メンバー）への参照方法 「class名.メンバー」
//classからインスタンスを生成せずに状態を管理できる
console.log(Me.isProgrammer);

//メソッドを呼び出すこともできる
console.log(Me.work());
