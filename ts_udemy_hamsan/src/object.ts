export {};

let profile1: object = { name: 'MAKOTO' };

let profile2: {
    name: string;
} = { name: 'MAKOTO' };

// 以下のyearはprofile2に定義されていないのでエラーになる
// profile2 = { year: 2022 };