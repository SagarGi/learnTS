"use strict";
exports.__esModule = true;
exports.Sagar = exports.greeting = void 0;
exports.greeting = "Hello from module 2";
// also similarly we can export class, variable , functions
// for example class can be exported
var Sagar = /** @class */ (function () {
    function Sagar(name, age) {
        this.name = name;
        this.age = age;
    }
    Sagar.prototype.getNameAndAge = function () {
        return this.name + "  " + this.age;
    };
    return Sagar;
}());
exports.Sagar = Sagar;
