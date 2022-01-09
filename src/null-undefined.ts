export {};

//nullを入れても型推論ではanyになる。
let absence: null = null;
//absence = 'Hello' エラー

let data: undefined = undefined;
//data = 123 エラー
