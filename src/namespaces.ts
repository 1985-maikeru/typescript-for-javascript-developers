export {};

//外からアクセスするために export が必要
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("まいける");
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person("大阪人");
console.log(meOsaka.name);

const michael = new English.Person("michael", "Joseph", "Jackson");
console.log(michael);
