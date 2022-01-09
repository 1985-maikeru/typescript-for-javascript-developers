export {};

//シグネチャー　関数の定義前に宣言をする物
function double(value: number): number;
function double(value: string): string;

//オーバーロードの時は型にanyを指定する
function double(value: any): any {
  //console.log(typeof value);
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value + value;
  }
}
console.log(double(100));
console.log(double("Go "));
//シグネチャーで指定した以外の型を渡そうとしたらエラーが出る
//console.log(double(true));
