export {};

// 配列の宣言は2通りある
let numbers: number[] = [1, 2, 3];
console.log(numbers);

let numbers2: Array<number> = [4, 5, 6];
console.log({ numbers2 });

let strings: Array<string> = ['一郎', '二郎', '三郎'];
console.log({ strings });

let nijigenHairetsu: number[][] = [
    [50, 100],
    [150, 300]
];
console.log({ nijigenHairetsu });

let hairetsu: (string | number | boolean)[]
= [1, false, 'japan'];
console.log({ hairetsu });