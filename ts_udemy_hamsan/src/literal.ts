export {};

let dayOfTheWeek: '日' = '日';

// 日 以外を代入するとエラーになる
// dayOfTheWeek = '月';

// 特定の文字列だけを代入可能にする
let day: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '水';
console.log(day);

// 以下はエラーになる
// day = '21';

// 1〜12だけを許容する
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
console.log(month);

// 以下はエラーになる
// month = 13;

let flg: true | false = false;
console.log(flg);

// 以下はエラーになる
// flg = 4;