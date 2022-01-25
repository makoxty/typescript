export {};

let name: any = 'test';

// 以下の方法でもエラーにはならないが、コメントアウトしてない方がもっと早い段階で型を宣言できるので良い
// let length = name.length as number;
let length = (name as string).length;

console.log(length);