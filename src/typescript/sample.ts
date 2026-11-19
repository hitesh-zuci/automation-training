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
interface apir<T> {
  status: number;
  message: string;
  data: T;
}
interface emp {
  id: number;
  name: string;
}
let emp1: apir<emp> = {
  status: 223,
  message: "welcome to the office",
  data: { id: 23, name: "abc" },
};
let a: 0 | 1 = 1;
a = 1;
function value(a: string | number) {
  if (typeof a === "string") {
    console.log(value);
  } else {
    console.log(a * 10);
  }
}
class bike {
  ride() {
    console.log("ride");
  }
}
class car {
  drive() {
    console.log("drive");
  }
}
function call(a: car | bike) {
  if (a instanceof car) {
    a.drive();
  } else {
    a.ride();
  }
}
const b = new car();
call(b);
enum browser {
  ch = "chrome",
  br = "brave",
  sa = "safari",
}
let select: browser = browser.br;
// console.log(select);
// value(23);
// console.log(emp1);
// console.log(age);

//classes

class session {
  name: string;
  status: boolean;
  constructor(name: string, isactvie: boolean) {
    this.name = name;
    this.status = isactvie;
  }
}

let br = new session("brave", true);
let s = new session("safari", false);
console.log(br.status);
