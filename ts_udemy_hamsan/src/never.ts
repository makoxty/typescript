export {};

// 呼び元に返らないものに never を付与する
// 10行目でerrorを呼び出しているが、呼び元に返らないので、、5行目のfunctionにneverを付与
function error(message: string): never {
    throw new Error(message);
}

try {
    let result = error('test');
    console.log({ result });
} catch (error) {
    console.log({ error });
    
};