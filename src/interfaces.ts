export {};

type ObjectType = {
  name: string;
  age: number;
};

//interfaceは=が不要
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: "maikeru",
  age: 25,
};
