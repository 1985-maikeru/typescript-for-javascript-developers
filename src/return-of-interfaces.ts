export {};

class Mahotsukai {}
class Souryo {}

//typescriptでは一つのclassしか継承できない
//しかし、複数のinterfaceは継承のような事ができる（実装するというのが正しい）
class Taro extends Mahotsukai {}

interface Kenja {
  //処理の実態が分からないような宣言でok　これがシグネチャー
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}

//interfaceの継承（実装）にはimplementsを使う
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }
  kougeki(): void {
    console.log("kougeki");
  }
}
const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
