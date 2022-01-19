"use strict";
// promise -> pending when created, fulfilled when resolved and when error it is rejeced
exports.__esModule = true;
// example
var axios_1 = require("axios");
var fetch = axios_1["default"].create();
var obj = {};
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
    // console.log(response.data);
    return response.data;
})
    .then(function (result) {
    obj = result;
    console.log(obj);
})["catch"](function (error) {
    console.log(error);
})["finally"](function () { return console.log("END of the promise!!!"); });
