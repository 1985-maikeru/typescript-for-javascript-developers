export {};

// * owner
//  * 所有者
//  * 初期化時に設定できる
//  * 途中で変更できない
//  * 参照できる
// * sercretNumber
//  * 個人番号
//  * 初期化時に設定できる
//  * 途中で変更できる
//  * 参照できない

class MyNumberCard {
  private _owner: string;
  private _seacretNumber: number;

  constructor(owner: string, seacretNumber: number) {
    this._owner = owner;
    this._seacretNumber = seacretNumber;
  }
  //getter,setterの名前とメンバー変数の名前がかぶったらダメ
  get owner() {
    return this._owner;
  }
  set seacretNumber(seacretNumber: number) {
    this._seacretNumber = seacretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._seacretNumber}`;
  }
}

let card = new MyNumberCard("まいける", 1234567890);
//card.owner = "メテオ";
console.log(card.owner);
console.log(card.debugPrint());
card.seacretNumber = 1111111111;
console.log(card.debugPrint());

//参照できない（undifinedになる）
console.log(card.seacretNumber);
