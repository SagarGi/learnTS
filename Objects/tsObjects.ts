let details = {
  name: "sagar",
  age: 24,
};

// console.log(details.sum(3, 4));

function greet(details: { name: string; age: number }) {
  return "Hello " + details.name;
}

console.log(greet(details));
