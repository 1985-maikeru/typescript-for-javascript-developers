export {};

//型安全なany型と言える

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
//typeof 型を取得できる
//console.log(typeof numberUnknown);

//この型はunknownなので、数字じゃないかも。だから計算できないかもしれないよ
//let sumUnKnown = numberUnknown + 10;

//trueになる、ifが必ず実行されることになる。つまり、number型であることが保証されていることになる。
//typeofを使ってある型であることを確認しながら実行することをタイプガードという。
if (typeof numberUnknown === "number") {
  let sumUnKnown = numberUnknown + 10;
}
