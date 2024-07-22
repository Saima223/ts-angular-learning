"use strict";
class Customer {
    constructor(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}
let myCustomer = new Customer("Jinni", "jammi");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
