// there are two main ways to defiene type in typescript...

// 1. explicit
// 2. implicit

// explicit type

const fullName: string = "John Doe";
const age: number = 30;
const isEmployed: boolean = true;

// console.log(fullName, age, isEmployed);

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
const tupleArray2: [string, number, boolean][] = [
  ["str", 0, true],
  ["str", 0, false],
];

// console.log(names, ages, mixedArray, tupleArray, tupleArray2);
