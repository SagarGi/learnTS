// we can give a type to objects
var details = {
    name: "sagar",
    age: 24,
    address: "machapokhari",
    phone: [982328732, 982329329]
};
// also while passing object as a parameter
function printDetails(details) {
    // your statements
    console.log(details.name + details.address);
}
printDetails(details);
