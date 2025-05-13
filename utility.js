"use strict";
// 1) Partial
// 인터페이스에서 타입들을 optional로 지정하는 속성
Object.defineProperty(exports, "__esModule", { value: true });
const me1 = {};
const me2 = {
    email: "test@gmail.com"
};
const me3 = {
    email: "test2@gmail.com",
    address: "강남"
};
const myNotebook = {
    id: 1,
    name: "갤럭시 북",
    price: 1000000,
    brand: "삼성",
};
const myPhone = {
    id: 1,
    price: 1000000,
};
