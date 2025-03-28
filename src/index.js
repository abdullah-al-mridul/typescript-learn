"use strict";
// __this practice file is made by abdullah al mridul__
// there are two main ways to defiene type in typescript...
// 1. explicit
// 2. implicit
// explicit type
const fullName = "John Doe";
const age = 30;
const mixed = 30;
const isEmployed = true;
// console.log(fullName, age, mixed, isEmployed);
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
//named tuple array
const tupleArray2 = [
    [
        "str",
        0,
        true,
        (num) => {
            return num.toString();
        },
    ],
    [
        "str",
        0,
        false,
        (num) => {
            return num.toString();
        },
    ],
];
//read only tuple and array
const tupleArrayReadOnly = ["str", 0];
//will throw error
// tupleArrayReadOnly.push("0");
// console.log(names, ages, mixedArray, tupleArray, tupleArray2);
//object types
const person = {
    name: "abdullah",
    age: 17,
    isEmployed: false,
    hobbies: ["coding", 10],
};
// console.log(person);
//object types signature index
const person2 = {
    name: "abdullah",
    age: 17,
    isEmployed: false,
    hobbies: ["coding", 10],
};
// console.log(person2);
//enum is a special type in typescript that allows you to define a set of named constants
var Serial;
(function (Serial) {
    Serial[Serial["one"] = 1] = "one";
    Serial[Serial["two"] = 2] = "two";
    Serial[Serial["three"] = 3] = "three";
    Serial[Serial["four"] = 4] = "four";
    Serial[Serial["five"] = 5] = "five";
})(Serial || (Serial = {}));
const person3 = {
    name: "abdullah",
    age: 17,
    isEmployed: false,
    hobbies: ["coding", 10],
};
const person4 = {
    name: "abdullah",
    age: 17,
    isEmployed: false,
    hobbies: ["coding", 10],
};
const car = {
    name: "abdullah",
    age: 17,
    isEmployed: false,
    hobbies: ["coding", 10],
    brands: ["toyota", "honda", "bmw"],
};
// console.log(car);
//union type
const returnValue = (param) => {
    return param;
};
// console.log(returnValue(50));
