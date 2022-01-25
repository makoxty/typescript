export {};

// 変数名は先頭は大文字にする
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

// Mojiretsuはstringなのでnumber型は代入できないのでエラーになる
// const fooFoo: Mojiretsu = 1;


const example: Profile = {
    name: 'test',
    age: 22
};

// exampleにマウスをあてて推論されて型をエイリアス化することができる
// が、変更に弱いのであまりおすすめしない
type Profile = {
    name: string;
    age: number;
};


// typeofでエイリアスを作成すると変更に強くなる
type Profile2 = typeof example;

const example2: Profile2 = {
    name: 'example2',
    age: 22
};