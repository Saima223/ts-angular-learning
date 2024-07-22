"use strict";
class Customerr {
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
let mmyCustomer = new Customerr("Jinni", "jammi");
console.log(mmyCustomer.firstName);
console.log(mmyCustomer.lastName);
