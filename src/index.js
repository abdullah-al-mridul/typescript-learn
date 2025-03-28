"use strict";
// there are two main ways to defiene type in typescript...
// 1. explicit
// 2. implicit
// explicit type
const fullName = "John Doe";
const age = 30;
const isEmployed = true;
// console.log(fullName, age, isEmployed);
// implicit type
let fullNameImplicit = "John Doe"; // guess string
let ageImplicit = 30; // guess number
let isEmployedImplicit = true; // guess boolean
// fullName = 30;
//it will give error because we have defined fullName as string
// console.log(fullNameImplicit, ageImplicit, isEmployedImplicit);
// type any
let anyType = "John Doe";
anyType = 30; // no error cause we have defined anyType as any
// console.log(anyType);
//arrays
//this is a string array
const names = ["John", "Doe", "Jane"];
//this is a number array
const ages = [30, 25, 35];
//mixed array betwen string and number
const mixedArray = ["John", 10];
//this is a tuple array
const tupleArray = ["str", 0];
const tupleArray2 = [
    ["str", 0, true],
    ["str", 0, false],
];
// console.log(names, ages, mixedArray, tupleArray, tupleArray2);
