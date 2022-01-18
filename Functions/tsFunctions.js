// normal function
// function add(x, y) {
//   return x + y;
// }
// console.log(add(1, 2));
// with typescript
function add(x, y) {
    return x + y;
}
// console.log(add(1, 2));
// function type
// let myAdd: (x: number, y: number) => number = function (
//   x: number,
//   y: number
// ): number {
//   return x + y;
// };
var myAdd = function (x, y) {
    return x + y;
};
// console.log(myAdd(2, 3));
// function with optional chaining
var optFunction = function (a, b) {
    return b ? a + b : a;
};
console.log(optFunction(10));
