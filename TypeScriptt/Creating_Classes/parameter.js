"use strict";
class Ustomer {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
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
let Stomer = new Ustomer("Jinni", "jammi");
console.log(Stomer.firstName);
console.log(Stomer.lastName);
