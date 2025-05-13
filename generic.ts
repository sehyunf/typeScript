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
genericText<string>("a")
genericText<boolean>(true)

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