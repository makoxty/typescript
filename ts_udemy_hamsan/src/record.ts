export {};

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';

type Covid19InfectionInfo = {
    kanji_name: string;
    confirmed_cases: number;
}

// 以下のコメントアウトしたプログラムを簡略化したもの
const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: {kanji_name: '東京', confirmed_cases: 1960 },
    Chiba: {kanji_name: '千葉', confirmed_cases: 1 },
    Tottori: {kanji_name: '鳥取', confirmed_cases: 2 }
}

// const covid19Japan: {
//     Tokyo: Covid19InfectionInfo;
//     Chiba: Covid19InfectionInfo;
//     Tottori: Covid19InfectionInfo;
// } = {
//     Tokyo: {kanji_name: '東京', confirmed_cases: 1960 },
//     Chiba: {kanji_name: '千葉', confirmed_cases: 1 },
//     Tottori: {kanji_name: '鳥取', confirmed_cases: 2 }
// }