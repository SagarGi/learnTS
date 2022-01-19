const obj = {
  user1: {
    name: "sagar",
  },
  user2: {
    name: "manish",
  },
};

console.log(obj?.user2.name);

if (obj?.user2) {
  console.log("Optional chain is working");
}

// also

function add(a: number, b?: number): number {
  return b ? a + b : a;
}

console.log(add(10, 20));
console.log(add(5));
