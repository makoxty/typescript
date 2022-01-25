import { Person } from './namespaces';
export { };

namespace Japanese {
    export namespace Kanto {
        export class Person {
            constructor(public name: string) { }
        }
    }
    export namespace Kansai {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string,
            public lastName: string
        ) { }
    }
}

let person1 = new Japanese.Kanto.Person('関東');
console.log(person1.name);

let personKansai = new Japanese.Kansai.Person('関西');
console.log(personKansai.name);

let person2 = new English.Person('firstName', 'lastName');
console.log(person2.firstName + person2.lastName);