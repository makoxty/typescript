export {};

// 配列に格納する型の順番も縛る
let profile: [string, number] = ['makoto', 43];
console.log({ profile });

// 下記はエラーになる
// profile = [43, 'makto'];