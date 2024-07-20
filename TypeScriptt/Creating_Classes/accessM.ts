class Customerr{
    private _firstName : string;
    private _lastName: string;
    
    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    public get firstName(): string{
        return this._firstName;
    }
    public set firstName(value: string){
        this._firstName = value;
    }
}

let mmyCustomer = new Customerr("Jinni", "jammi");

console.log(mmyCustomer.firstName);
console.log(mmyCustomer.lastName);
