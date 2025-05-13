"use strict";
// 인터페이스(틀)
Object.defineProperty(exports, "__esModule", { value: true });
const myDog = {
    species: "dog",
    canSpeak: false,
    numberOfLags: 4,
};
const myRabbit = {
    species: "rabbit",
    canSpeak: false,
    numberOfLags: 4,
};
const mySnake = {
    species: "snake",
    canSpeak: false
};
const myHuman = {
    age: 20,
    canSpeak: true,
    species: "휴먼",
    numberOfLags: 2
};
const myAnimalAlias = {
    canSpeak: true,
    species: "토끼",
    numberOfLags: 4
};
const myMachine = {
    meterial: "metal",
    powerLevel: 20
};
let myUnionVar = {
    age: 10,
    canSpeak: false,
    meterial: "water",
    powerLevel: 10,
    species: "인간",
    numberOfLags: 3
};
let myStringOrNumbrer = "String";
myStringOrNumbrer = 10;
function myUnionFunc(param) {
    return param;
}
// 선택사항이 필수가 되는 경우
const mytype = {
    prop1: 10,
    prop2: ""
};
