// in this essentials ts we will do basics of if, switch, for loop, while etc...
// 1. If and else statement example
var age = 19;
// if (age > 18) {
//   console.log("You are eligible to vote!!");
// }
if (age < 10) {
    console.log("You are a kid");
}
else if (age == 17) {
    console.log("Please wait for 1 year to vote");
}
else {
    console.log("You are eligible to vote!!");
}
// 2 ternary operator
var x = 10, y = 11;
x > y
    ? console.log("X is greater than Y ")
    : console.log("Y is greater than X");
//   3 switch
var month = 2;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    default:
        console.log("Select num between 1-6");
        break;
}
// 4 loop
var arr = [10, 20, 30, 40];
// arr.forEach((element) => {
//   console.log(element);
// });
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var a = arr_1[_i];
    console.log(a);
}
// 5 while loop
var s = 5;
while (s > 0) {
    console.log("While loop is running !!!");
    s--;
}
