// <T>() : 어떤 타입을 받을건지
// (params:T) : 들어온 param의 타입
// (): T : return 타입

// 함수의 선언
function genericText<T>(value: T): T {
  console.log(value);
  return value;
}

// 함수의 선언
const genericText2 = <T>(param: T): T => {
  return param
}

// 함수의 사용
// genericText<string>("a")
// genericText<boolean>(true)

// 제네릭 문법의 타입가드
const genericText3 = <T>(value: T): T | Number => {

  if(typeof value === "string"){
    return value.length;
  }
  return value
}

// 인터페이스 타입을 제네릭으로 선언
interface GenericLogTextFunc {
  <T>(text: T): T;
}

const myFunc2 = <T>(text: T): T => {
  return text
}

let myString:GenericLogTextFunc = myFunc2;

// 제네릭 문법 키 제한
interface ProductItem {
  name: string;
  price : number;
  stock : number;
}

// const getProductItems = <T extends keyof ProductItem>(item: T): T => {
//   return item
// }

const getProductItems = <T extends ProductItem>(item: T): T => {
  return item
}

const item: ProductItem = {
  name : "상품",
  price : 20000,
  stock : 20,
}

getProductItems<ProductItem>(item);
// getProductItems({name : "컴퓨터", price: 10000, stock: 20, address : ""})

// 제네릭 문법을 이용한 REST API 사용 실습
// https://jsonplaceholder.typicode.com/posts
// 1) fetching 후 전체를 console.log로 출력
// 2) fetching 후 (unknown 오류 생김)

// ================================실습1================================
// interface UserData {
//   userId: number;
//   id : number;
//   title : string;
//   body : string
// }

// const getUserData = <T extends UserData>(data: T) => {
//   console.log(data)
// }

// const fetching = async <UserData>(): Promise<UserData[]> => {
//   const response: Response = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const datas: UserData[] = await response.json();

//   return datas;
// }

// // fetching<UserData>()
// //   .then((datas: UserData[]) => {
// //     datas.forEach((data: UserData) => {
// //       getUserData<UserData>(data)    
// //     });
// // })

// fetching<UserData>()
//   .then((datas: UserData[]) => {
//     datas.forEach(getUserData)
// })

// ================================실습2================================
export interface UserData {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}

const getUserName = <T extends UserData>(data: T) => {
  console.log(data.name)
}

const fetching = async <UserData>(): Promise<UserData[]> => {
  const response: Response = await fetch("https://jsonplaceholder.typicode.com/users")
  const datas: UserData[] = await response.json();

  return datas;
}

fetching<UserData>()
  .then((datas: UserData[]) => {
    datas.forEach((data: UserData) => {
      getUserName<UserData>(data)
    });
})


