export {};

//エイリアスの先頭は必ず大文字
type Mojiretsu = string;

const fooString: string = "Hello";
const fooMojiretsu: Mojiretsu = "Hello";

const example1 = {
  name: "maikeru",
  age: 25,
};
type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: "maikeru",
  age: 25,
};

//example1のデータ型を使用する。objectの構造変化に追従して型も変わる
type Profile2 = typeof example1;
