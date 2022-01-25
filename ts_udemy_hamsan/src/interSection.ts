export {};

type Pitcher1 = {
    throwingSpeed: number;
};

type Batter1 = {
    battingAverage: number;
}

const DaimajinSasaki: Pitcher1 = {
    throwingSpeed: 154
};

const OchiaiHiromitsu: Batter1 = {
    battingAverage: 0.367
};

// 既存の型を組み合わせて新たに型を定義する
type TwhoWayPlayer = Pitcher1 & Batter1;

const OtaniShohei: TwhoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286
};

console.log({ OtaniShohei });