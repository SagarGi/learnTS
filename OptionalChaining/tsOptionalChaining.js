var obj = {
    user1: {
        name: "sagar"
    },
    user2: {
        name: "manish"
    }
};
console.log(obj === null || obj === void 0 ? void 0 : obj.user2.name);
if (obj === null || obj === void 0 ? void 0 : obj.user2) {
    console.log("Optional chain is working");
}
// also
function add(a, b) {
    return b ? a + b : a;
}
console.log(add(10, 20));
console.log(add(5));
