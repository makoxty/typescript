export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'ichiro';
    static lastName: string = 'satoshi';

    static work() {
        return `workメソッドが呼ばれました。firstNameは${Me.firstName}です。`;
    }
}

console.log(Me.isProgrammer);
console.log(Me.work);