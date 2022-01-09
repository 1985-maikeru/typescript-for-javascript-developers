export {};

//tuple 配列について要素の型が明確にわかっている。全ての要素の型が同一ではない
//共用型よりも条件を厳しくした感じ。何番目がこの型、って決める的な。
let profile: [string, number] = ["Ham", 43];
//profile = [43, "Ham"]; エラーが出る!
