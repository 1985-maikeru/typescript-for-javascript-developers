export {};

//アクセス修飾子をconstructorの引数に書くことで、自動で初期化できる
class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person("まいける", 25);
console.log(me);
