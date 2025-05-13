// 인터페이스(틀)

export interface Animal {
  species : string;
  canSpeak : boolean;
  numberOfLags ?: number;
}

const myDog : Animal = {
  species : "dog",
  canSpeak : false,
  numberOfLags : 4,
}

const myRabbit: Animal = {
  species : "rabbit",
  canSpeak : false,
  numberOfLags : 4,
}

const mySnake: Animal = {
  species : "snake",
  canSpeak : false
}

// 상속
// Mammal 포유류
interface Mammal extends Animal {
  // species : string;
  // canSpeak : boolean;
  // numberOfLags ?: number;
  age : number;
}

const myHuman: Mammal = {
  age : 20,
  canSpeak : true,
  species : "휴먼",
  numberOfLags : 2
}

// TypeAliases
type AnimalAlias = Animal;
type StringAlias = String;

const myAnimalAlias : AnimalAlias = {
  canSpeak : true,
  species : "토끼",
  numberOfLags : 4
}

// Fixed Value
interface Machine {
  powerLevel : number,
  meterial : "metal" | "plastic" | 456 | "water";
}

const myMachine: Machine = {
  meterial : "metal",
  powerLevel : 20
}

// Union types
type MyUnionType = Animal & Machine & Mammal;

let myUnionVar: MyUnionType = {
  age : 10,
  canSpeak : false,
  meterial : "water",
  powerLevel : 10,
  species : "인간",
  numberOfLags : 3
}

type StringOrNumber = String | Number;

let myStringOrNumbrer: StringOrNumber = "String"
myStringOrNumbrer = 10;

function myUnionFunc(param: String | Number): String | Number {
  return param
}

// Type Intersect
// 여러 타입을 하나의 타입으로 합쳐서 사용할 수 있다.
// 이 때 겹치는 프로퍼티의 type은 같아야하고
// 선택사항은 필수사항이 된다.

interface Type1 {
  prop1 : Number;
  prop2 ?: string;
} 
interface Type2 {
  prop1 : string;
  prop3 : Number;
} 
interface Type3 {
  prop1 : Number;
  prop2 : string;
} 
  
type NewType = Type1 & Type3;

// 선택사항이 필수가 되는 경우
const mytype:NewType = {
  prop1 : 10,
  prop2 : ""
}

// 상수를 모아놓은 형태이며, 값의 의미를 부여함으로서 오타를 방지한다
// 기본적으로 인덱스는 0으로 시작해서 1씩 증가한다.

// 문자열로 넣을 시 인덱스의 증가가 불가능하기 때문에 모두 명시해 줘야함
enum BasicDirection {
  Up = 100,
  Down,
  Left,
  Right
}

enum BasicDirectionString {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

const basicEnumVar = BasicDirection.Right;

console.log(basicEnumVar);



