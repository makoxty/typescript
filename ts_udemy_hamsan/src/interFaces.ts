export {};

// interfaceで定義した型を使える
let object: ObjectInterface = {
    name: 'makoto',
    age: 27
}

interface ObjectInterface {
    name: string;
    age: number;
}

console.log(object);