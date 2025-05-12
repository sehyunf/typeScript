const explicitObject: {
  attr1: number;
  attr2: number;
  attr3: string;
  attr4: () => boolean;
  attr5: boolean[];
} = {
  attr1 : 10,
  attr2 : 30,
  attr3 : "some value",
  attr4 : () => {return 15 > 20},
  attr5 : [true, false, true, false]
}

const explicitObject2: { [index: string]: number} = {
  attr1 : 10,
  attr2 : 30,
  attr3 : 40,
  attr4 : 100,
  attr5 : 80,
}

const user: {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      func: () => number[];
    }
  }
} = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
      street: "Kulas Light",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
          lat: -37.3159,
          func: () => { return [1,2,3] }
      }
  }
}

type Examplekeys = '강아지' | '얼룩이' | '누렁이';
const animalsObject: { [k in Examplekeys]?: string} = {
  '강아지' : '멍멍',
  '얼룩이' : '얼룩얼룩',
  '누렁이' : '누렁누렁'
}