export {};

type Profile = {
    name: string;
    age?: number;
    zipCode: number;
};

// Profileと同じプロパティを定義できる
type PartialType = Partial<Profile>;

// 全て必須のプロパティとしてできる
type RequiredType = Required<Profile>;