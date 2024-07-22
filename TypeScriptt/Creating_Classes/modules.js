"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utomer = void 0;
class Utomer {
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
exports.Utomer = Utomer;
let myStomer = new Utomer("Jinni", "jammi");
console.log(myStomer.firstName);
console.log(myStomer.lastName);
