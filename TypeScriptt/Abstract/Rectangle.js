"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const Shape_1 = require("./Shape");
class Rectangle extends Shape_1.Shape {
    calculateArea() {
        return this.width * this.height;
    }
    constructor(theX, theY, _width, _height) {
        super(theX, theY);
        this._width = _width;
        this._height = _height;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    getInfo() {
        return `Rectangle: ${super.getInfo()}, width: ${this._width}, height: ${this._height}`;
    }
}
exports.Rectangle = Rectangle;
