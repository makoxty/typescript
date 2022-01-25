export {};

const echo = <T>(arg: T): T => {
    return arg;
}

console.log(echo<number>(100));
console.log(echo<string>('Hello'));
console.log(echo<boolean>(true));