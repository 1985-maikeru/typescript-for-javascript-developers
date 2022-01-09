export {};

//抽象メソッド　名前だけ作成されていて中身がない的な感じ
//抽象メソッドがあるclassもabstractの指定をして抽象classにする必要がある
//親classに大量にメソッドがあるときなど、子classで実装し忘れるということがなくなる
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "roar";
  }
}

//抽象classで定義されている抽象メソッドを実装し忘れるとコンパイラが教えてくれる
//class Tiger extends Animal {}

class Tiger extends Animal {
  cry() {
    return "grrrr";
  }
}
