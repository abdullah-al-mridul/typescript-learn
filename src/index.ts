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
