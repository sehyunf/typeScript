// 인터페이스(틀)

export interface Animal {
  species : string;
  canSpeak : boolean;
  numberOfLags ?: number;
}

const myDog : Animal = {
  species : "dog",
  canSpeak : false,
  numberOfLags : 4,
}

const myRabbit: Animal = {
  species : "rabbit",
  canSpeak : false,
  numberOfLags : 4,
}

const mySnake: Animal = {
  species : "snake",
  canSpeak : false
}