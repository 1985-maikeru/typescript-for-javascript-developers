export {};

//BMIを求める関数
//引数の（）の後に書くのが、戻り値の型になる
function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.7, 60));
