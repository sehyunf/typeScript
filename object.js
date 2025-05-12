"use strict";
const explicitObject = {
    attr1: 10,
    attr2: 30,
    attr3: "some value",
    attr4: () => { return 15 > 20; },
    attr5: [true, false, true, false]
};
const explicitObject2 = {
    attr1: 10,
    attr2: 30,
    attr3: 40,
    attr4: 100,
    attr5: 80,
};
const user = {
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
            func: () => { return [1, 2, 3]; }
        }
    }
};
const animalsObject = {
    '강아지': '멍멍',
    '얼룩이': '얼룩얼룩',
    '누렁이': '누렁누렁'
};
