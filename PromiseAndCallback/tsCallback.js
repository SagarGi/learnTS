// lets suppose we have a add function
// sunchrounous code
var add = function (a, b, printCallback) {
    //   console.log(a + b);
    printCallback("result", a + b);
};
var prettyPrint = function (label, value) {
    console.log("".concat(label, " :: ").concat(value));
    console.log("------------------\n");
};
// add(2, 5, prettyPrint);
// console.log("Before");
setTimeout(function () {
    //   console.log("Welcome");
}, 3000);
// console.log("After");
var printHello = function () {
    console.log("Hello Sagar");
};
setTimeout(printHello, 3000);
