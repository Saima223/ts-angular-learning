"use strict";
class cCustomer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
}
let mCustomer = new cCustomer("Jinni", "jammi");
console.log(mCustomer.firstName);
console.log(mCustomer.lastName);
