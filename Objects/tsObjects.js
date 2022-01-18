var details = {
    name: "sagar",
    age: 24,
    sum: function add(a, b) {
        return a + b;
    }
};
// console.log(details.sum(3, 4));
function greet(details) {
    return "Hello " + details.name;
}
function greetWithInterface(details) {
    return ("hello " +
        details.name +
        " Your were born in 2054" +
        "your sum " +
        details.sum(10, 14));
}
