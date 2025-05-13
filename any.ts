// any type
// 어떤 타입이 들어와도 산관이 없을 때 사용한다
// 하지만 타입스크립트의 장점이 사라지기 때문에
// 꼭 필요한 순간과 타입을 검증할 때 사용한다.

let anyType: any = 10;

anyType = true;
anyType = "hello world"
anyType = [10,20,30]

// any와 as를 사용하면 안된다.
const myAnyFunc = (myAnyParam: any) => {
  return myAnyParam as string
}

console.log(typeof myAnyFunc(20));
