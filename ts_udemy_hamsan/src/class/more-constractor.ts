export {};

class Person {
    // コンストラクタにアクセス修飾子をつけると、初期化処理を自動でやってくれる
    constructor(public name: string, protected age: number){}
}

const me = new Person('test', 55);
console.log(me);