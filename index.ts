// 함축형 문법(implicit type assertion)
// 설명형 문법(explicit type assertion)
// ts는 설명형 문법을 쓴다
let strImpl: string = "string value" // string
let numImpl: number = 0.7;  // number
let boolImpl: boolean = false; // boolean
let arrayImpl: number[] = [1, 2, 3, 4]; // number[]

strImpl = "10";
numImpl = 10;
boolImpl = true;
arrayImpl = [10, 20, 30, 40];

console.log(strImpl);
console.log(numImpl);
console.log(boolImpl);
console.log(arrayImpl);

