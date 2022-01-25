export {};

class MyNumberCard {
    private _owner: string;
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    get owner() {
        return this._owner;
    }

    set setSecretNumber(secretNumber: number) {
        this._secretNumber = secretNumber;
    }

    get getSecretNumber() {
        return this._secretNumber;
    }
}

let card = new MyNumberCard('太郎', 12345678910);
console.log(card.owner);

card.setSecretNumber = 123;
console.log(card.getSecretNumber);