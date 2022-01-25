export {};

enum Months {
    January = 1,
    February,
    March,
    April,
    May,
    Jun,
    July,
    August,
    September,
    October,
    November,
    December
}

console.log(Months.February);
console.log(Months.October);

enum COLORS {
    RED = '#FF000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    BLACK = '#000000'
}

console.log(COLORS.WHITE);

// 別の場所からもenumを追加できる
enum COLORS {
    YELLOW = '#FFFF00'
}

console.log(COLORS.YELLOW);