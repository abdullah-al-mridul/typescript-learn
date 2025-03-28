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
