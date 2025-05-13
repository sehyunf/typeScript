"use strict";
// <T>() : 어떤 타입을 받을건지
// (params:T) : 들어온 param의 타입
// (): T : return 타입
// 함수의 선언
function genericText(value) {
    console.log(value);
    return value;
}
// 함수의 선언
const genericText2 = (param) => {
    return param;
};
// 함수의 사용
genericText("a");
genericText(true);
// 제네릭 문법의 타입가드
const genericText3 = (value) => {
    if (typeof value === "string") {
        return value.length;
    }
    return value;
};
const myFunc2 = (text) => {
    return text;
};
let myString = myFunc2;
