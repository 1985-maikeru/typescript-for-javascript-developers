export {};

//共用体型 異なる型を入れたい時
//非常に多くの場面で使う
let value: number | string = 1;
value = "foo";
value = 100;
