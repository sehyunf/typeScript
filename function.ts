function implicitReturnFunc(): number {
  return 1234
}

let implicit: number = implicitReturnFunc();

// 매개변수
function funcWithParams(x: number, y: number, z: number): number {
  return x + y + z;
}

function funcWithParams2(x: number, y: number, z: number): String {
  return (x + y + z).toString();
}

function funcWithParams3(x: number, y?: number, z?: number): number {
  if(y == undefined){
    return x;
  }

  if(z == undefined){
    return x + y;
  }
  
  return x + y + z;

}

console.log(funcWithParams(10, 20, 30));
console.log(funcWithParams3(10));
console.log(funcWithParams3(10, 20));
console.log(funcWithParams3(10, 20, 30));

const funcWithParams4 = (...numbers: number[]): number => {
  let total: number = 0
  for(let n of numbers){
    total += n;
  }
  return total;
}

const compareNumber = (a: number, b: number):String => {
  if(a > b) return a + "가 큽니다";
  if(a < b) return b + "가 큽니다";
  return "두 수가 같습니다";
}

console.log(compareNumber(30, 20));
