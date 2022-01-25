export {};

class VisaCard {
    readonly owner: string;

    // フィールド変数が1つの場合、以下のように簡略化することもできる
    // constructor(public readonly owner: string) {}

    constructor(owner: string) {
        this.owner = owner;
    }
}

let myVisaCard = new VisaCard('一郎');
console.log(myVisaCard.owner);

// readonlyのため、以下はエラーとなる
// myVisaCard.owner = '二郎';