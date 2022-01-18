var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TsClass = /** @class */ (function () {
    function TsClass(name, age) {
        this.name = name;
        this.age = age;
    }
    TsClass.prototype.getName = function () {
        return this.name;
    };
    TsClass.prototype.setName = function (name) {
        this.name = name;
    };
    return TsClass;
}());
var TsClassOne = /** @class */ (function (_super) {
    __extends(TsClassOne, _super);
    function TsClassOne(name, age) {
        return _super.call(this, name, age) || this;
    }
    TsClassOne.prototype.getEmail = function () {
        return this.email;
    };
    return TsClassOne;
}(TsClass));
var obj = new TsClass("sagar", 24);
obj.setName("milan");
// console.log(obj.getName());
var obj1 = new TsClassOne("sagar", 24);
console.log(obj1.getEmail());
