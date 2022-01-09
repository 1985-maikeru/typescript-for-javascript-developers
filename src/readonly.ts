export {};

//readonly classのプロパティを読み取り専用にする時に使う
//publicを書かなくても良い → 読み取ること前提だからいらない。しかし、あまり丁寧ではないので書いておいた方が良い。
class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("まいける");
console.log(myVisaCard.owner);

//読み取り専用で代入できないからエラーが出る!!
//myVisaCard.owner = "くるみ";
