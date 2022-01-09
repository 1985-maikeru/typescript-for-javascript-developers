export {};

//列挙型 数値や文字列を列挙する時に便利
//データ複数のときは複数形にしてあげるのがプログラミングのマナー！
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  Septemver,
  October,
  November,
  December,
}
Months.January;
Months.February;

console.log(Months.January);
console.log(Months.Septemver);
console.log(Months.December);

//文字列のenum型
enum Colors {
  RED = "#ff0000",
  WHITE = "#ffffff",
  GREEN = "#008000",
  BLUE = "#0000ff",
  BLACK = "#000000",
  //YELLOW = "#ffff00",
}

let green = Colors.GREEN;
console.log({ green });

//指定されていない、値にアクセスしようとするとエラーが出る
//個別に追加できる
enum Colors {
  YELLOW = "#ffff00",
}
Colors.YELLOW;
