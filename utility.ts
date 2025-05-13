// 1) Partial
// 인터페이스에서 타입들을 optional로 지정하는 속성

import { pid } from "process";

interface Address {
  email : string;
  address : string;
}

type MyEmail = Partial<Address>

const me1: MyEmail = {}
const me2: MyEmail = {
  email : "test@gmail.com"
}

const me3: MyEmail = {
  email : "test2@gmail.com",
  address : "강남"
}

// 2) Omit
// 특정 속성함 제거된 타입으로 정의하고 싶을 때
interface Product {
  id : number;
  name : string;
  price : number;
  brand : string;
  stock : number;
}

type shoppingItem = Omit<Product, "stock">
const myNotebook : shoppingItem = {
  id : 1,
  name : "갤럭시 북",
  price : 1000000,
  brand : "삼성",
}

// 3) Pick
type MyProduct = Pick<Product, "id" | "price">
const myPhone: MyProduct = {
  id : 1,
  price : 1000000,
}