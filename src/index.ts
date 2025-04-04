// __this practice file is made by abdullah al mridul__

// there are two main ways to defiene type in typescript...

// 1. explicit
// 2. implicit

// explicit type

const fullName: string = "John Doe";
const age: number = 30;
const mixed: number | string | string[] = 30;
const isEmployed: boolean = true;

// console.log(fullName, age, mixed, isEmployed);

// implicit type

let fullNameImplicit = "John Doe"; // guess string
let ageImplicit = 30; // guess number
let isEmployedImplicit = true; // guess boolean

// fullName = 30;
//it will give error because we have defined fullName as string

// console.log(fullNameImplicit, ageImplicit, isEmployedImplicit);

// type any
let anyType: any = "John Doe";
anyType = 30; // no error cause we have defined anyType as any

// console.log(anyType);

//arrays

//this is a string array
const names: string[] = ["John", "Doe", "Jane"];
//this is a number array
const ages: number[] = [30, 25, 35];
//mixed array betwen string and number
const mixedArray: (string | number)[] = ["John", 10];
//this is a tuple array
const tupleArray: [string, number] = ["str", 0];
//named tuple array
const tupleArray2: [
  name: string,
  age: number,
  retired: boolean,
  numToString: (num: number) => string
][] = [
  [
    "str",
    0,
    true,
    (num: number) => {
      return num.toString();
    },
  ],
  [
    "str",
    0,
    false,
    (num: number) => {
      return num.toString();
    },
  ],
];
//read only tuple and array
const tupleArrayReadOnly: readonly [string, number] = ["str", 0];
//will throw error
// tupleArrayReadOnly.push("0");

// console.log(names, ages, mixedArray, tupleArray, tupleArray2);

//object types
const person: {
  name: string;
  age: number | string;
  isEmployed: boolean;
  hobbies: [string, number];
  isMarried?: boolean; //optional property
} = {
  name: "abdullah",
  age: 17,
  isEmployed: false,
  hobbies: ["coding", 10],
};

// console.log(person);

//object types signature index
const person2: {
  [key: string]: string | (string | number) | boolean | [string, number];
} = {
  name: "abdullah",
  age: 17,
  isEmployed: false,
  hobbies: ["coding", 10],
};

// console.log(person2);

//enum is a special type in typescript that allows you to define a set of named constants
enum Serial {
  one = 1,
  two,
  three,
  four,
  five,
}

// console.log(Serial.one); // 1
// console.log(Serial.two); // 2

//alias type
type Person = {
  name: string;
  age: number | string;
  isEmployed: boolean;
  hobbies: [string, number];
  isMarried?: boolean; //optional property
};
const person3: Person = {
  name: "abdullah",
  age: 17,
  isEmployed: false,
  hobbies: ["coding", 10],
};

// console.log(person3);

//interfaces
interface PersonInterface {
  name: string;
  age: number | string;
  isEmployed: boolean;
  hobbies: [string, number];
  isMarried?: boolean; //optional property
}
const person4: PersonInterface = {
  name: "abdullah",
  age: 17,
  isEmployed: false,
  hobbies: ["coding", 10],
};

// console.log(person4);

//extend interface

interface Car extends PersonInterface {
  brands: string[];
}
const car: Car = {
  name: "abdullah",
  age: 17,
  isEmployed: false,
  hobbies: ["coding", 10],
  brands: ["toyota", "honda", "bmw"],
};

// console.log(car);

//union type
const returnValue = (param: number | string): number | string => {
  return param;
};

// console.log(returnValue(50));

//void function type for no return value
const voidFunction = (param: number): void => {
  console.log(param);
};
// voidFunction(60);

// optional parameter and default parameter
const optionalParameter = (
  param: number,
  param2?: number,
  param3: number = 5
): void => {
  console.log(param, param2 || 0, param3);
};
// optionalParameter(60, 70);
// optionalParameter(60);

//named parameter
function divide({
  dividend,
  divisor,
}: {
  dividend: number;
  divisor: number;
}): number {
  return dividend / divisor;
}

// console.log(divide({ dividend: 10, divisor: 2 })); // 5

//rest parameter
function add(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((p, c) => p + c, 0);
}
// console.log(add(1, 2, 3, 4, 5)); // 15

type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

// console.log(negateFunction(10)); // -10

//casting with as keyword
interface Car2 {
  brand: string;
  model: string;
}

let someObject: any = { brand: "Toyota", model: "Corolla" };

// Casting 'someObject' to the Car interface type
let car2 = someObject as Car2;

// console.log(car2.brand); // Output: Toyota
// console.log(car2.model); // Output: Corolla

// casting with angle bracket syntax
interface Car3 {
  brand: string;
  model: string;
}

let someObject2: any = { brand: "Toyota", model: "Corolla" };

// Casting 'someObject' to the Car interface type
let car3 = <Car3>someObject2;

// console.log(someObject2.brand); // Output: Toyota
// console.log(someObject2.model); // Output: Corolla

//generics with function
function plus<F extends number, S extends number>(first: F, second: S): number {
  return first + second;
}

// console.log(plus(1, 2)); // 3

// type alias generics
type Wrapped<A, B> = { value: A | B };

const wrapObj: Wrapped<string, number> = {
  value: 10,
};
// console.log(wrapObj);

// generic interface
interface GenericInterface<T = string> {
  value: T;
  getValue: () => T;
}

const genericObj: GenericInterface<string> = {
  value: "abdullah",
  getValue: () => {
    return genericObj.value;
  },
};
// console.log(genericObj.getValue()); // abdullah

// utility type partial
type Home = {
  id: number;
  name: string;
  age: number;
  isEmployed: boolean;
};

const home: Partial<Home> = {}; // makes all properties optional

// console.log(home); // {}

// utility type required
type HomeReq = {
  id: number;
  name: string;
  age: number;
  isEmployed: boolean;
};

const homeReq: Required<HomeReq> = {
  id: 1,
  name: "abdullah",
  age: 17,
  isEmployed: false,
}; // makes all properties required

// console.log(homeReq);

// utility type record
const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};
// console.log(nameAgeMap); // { Alice: 21, Bob: 25 }

interface Person2 {
  name: string;
  age: number;
  location?: string;
}

// utility type omit
const bob: Omit<Person2, "age" | "location"> = {
  name: "Bob",
  // `Omit` has removed age and location from the type and they can't be defined here
};

// console.log(bob); // { name: 'Bob' }

// utility type pick
interface Person3 {
  name: string;
  age: number;
  location?: string;
}

const bob2: Pick<Person, "name"> = {
  name: "Bob",
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

// console.log(bob2); // { name: 'Bob' }

// utility type exclude
type Primitive = string | number | boolean;
const value: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.

// console.log(value)

// utility type returntype
type PointGenerator = () => { x: number; y: number };
const point2: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};
// console.log(point2); // { x: 10, y: 20 }

// utility type parameters
type PointPrinter2 = (p: { x: number; y: number }) => void;
const point3: Parameters<PointPrinter2>[0] = {
  x: 10,
  y: 20,
};

// console.log(point3); // { x: 10, y: 20 }

// utility type readonly
interface Person5 {
  name: string;
  age: number;
}
const person5: Readonly<Person5> = {
  name: "Dylan",
  age: 35,
};
// person5.name = "Israel"; //error

// console.log(person5);

// utility type keyof
interface Person6 {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person6, property: keyof Person6) {
  console.log(`Printing person property ${property}: "${person[property]}"`);
}
let person6 = {
  name: "Max",
  age: 27,
};
// printPersonProperty(person6, "name"); // Printing person property name: "Max"

//thank you for reading this practice file. I hope you enjoyed it. if you have any question please feel free to ask me. I will be happy to help you.
