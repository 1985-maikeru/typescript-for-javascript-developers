export {};

//プリミティブ型よりもさらに細かい指定ができる
//文字列のリテラル型、数値のリテラル型,真偽値のリテラル型の3つがある

//let dayOfTheweek: string = "日";
//dayOfTheweek = "月";
//型は文字列だけど、想定外の値が入ったら困る.
//曜日以外をエラーにしたい
//dayOfTheweek = "31";

let dayOfTheweek: "日" | "月" | "火" | "水" | "木" | "金" | "土" = "日";
dayOfTheweek = "月";
//指定した値以外だと、ちゃんとエラーが出る!
//dayOfTheweek = "31";

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
//month = 13; エラーが出る!

//真偽値のリテラル型はあまり使用する場面がない
let TRUE: true = true;
//TRUE = false; エラーが出る!
