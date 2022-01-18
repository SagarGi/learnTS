interface Details {
  name: string;
  age: number;
  address: string;
  phone: number[];
}

// we can give a type to objects

let details: Details = {
  name: "sagar",
  age: 24,
  address: "machapokhari",
  phone: [982328732, 982329329],
};

// also while passing object as a parameter

function printDetails(details: Details) {
  // your statements
  console.log(details.name + details.address);
}

printDetails(details);
