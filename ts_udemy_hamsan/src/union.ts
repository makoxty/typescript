export {};

// 複数の型を定義する
let value: number | string = 1;
console.log(value);

value = 'string';
console.log(value);

// 以下はエラーになる
// value = true;