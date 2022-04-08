"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(year, brand) {
        this.year = year;
        this.brand = brand;
    }
    Person.prototype.toString = function () {
        return this.brand + " " + this.year;
    };
    return Person;
}());
exports.Person = Person;
exports.printName = function () {
    console.log("Hello There");
};
