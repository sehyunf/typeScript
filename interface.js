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
// 상수를 모아놓은 형태이며, 값의 의미를 부여함으로서 오타를 방지한다
// 기본적으로 인덱스는 0으로 시작해서 1씩 증가한다.
// 문자열로 넣을 시 인덱스의 증가가 불가능하기 때문에 모두 명시해 줘야함
var BasicDirection;
(function (BasicDirection) {
    BasicDirection[BasicDirection["Up"] = 100] = "Up";
    BasicDirection[BasicDirection["Down"] = 101] = "Down";
    BasicDirection[BasicDirection["Left"] = 102] = "Left";
    BasicDirection[BasicDirection["Right"] = 103] = "Right";
})(BasicDirection || (BasicDirection = {}));
var BasicDirectionString;
(function (BasicDirectionString) {
    BasicDirectionString["Up"] = "UP";
    BasicDirectionString["Down"] = "DOWN";
    BasicDirectionString["Left"] = "LEFT";
    BasicDirectionString["Right"] = "RIGHT";
})(BasicDirectionString || (BasicDirectionString = {}));
const basicEnumVar = BasicDirection.Right;
console.log(basicEnumVar);
