const msg: string = "hello";

type data = { name: string; age: number };

let n1: data = { name: "abc", age: 78 };

interface login {
  name: string;
  password: string;
  result: boolean;
  error?: boolean;
}
let o1: login = {
  name: "abc",
  password: ";hkgs",
  result: true,
  error: false,
};

function getvalue<T>(value: T): T {
  return value;
}
let name = getvalue("hello");
let age = getvalue(45);
console.log(name);
// console.log(age);
