"use strict";
// <T>() : 어떤 타입을 받을건지
// (params:T) : 들어온 param의 타입
// (): T : return 타입
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
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
// genericText<string>("a")
// genericText<boolean>(true)
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
// const getProductItems = <T extends keyof ProductItem>(item: T): T => {
//   return item
// }
const getProductItems = (item) => {
    return item;
};
const item = {
    name: "상품",
    price: 20000,
    stock: 20,
};
getProductItems(item);
const getUserName = (data) => {
    console.log(data.name);
};
const fetching = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://jsonplaceholder.typicode.com/users");
    const datas = yield response.json();
    return datas;
});
fetching()
    .then((datas) => {
    datas.forEach((data) => {
        getUserName(data);
    });
});
