export {};

//object型は制約が甘い
let profile1: object = { name: "maikeru" };
profile1 = { birthYear: 1996 };

//{}だと、プロパティにまで型指定ができる
let profile2: {
  name: string;
} = { name: "maikeru" };
profile2 = { name: "meteo" };
//profile2 = { birthDay: 1024 }; こっちはダメ
