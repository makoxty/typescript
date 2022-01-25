export { };

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
    if (typeof value === 'number') {
        return value * 2;
    } else if (typeof value === 'string') {
        return value + value;
    } else {
        throw 'numberでもstringでもないので、引数の型を確認してください。';
    }
}

// function double(value: string): string {
//     return value + value;
// }

console.log(double(100));
console.log(double('Hello'));

// numberとstring以外を渡すとエラーになる
// console.log(double(true));