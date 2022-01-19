// lets suppose we have a add function
// sunchrounous code

let add = (a: number, b: number, printCallback: (string, any) => void) => {
  //   console.log(a + b);
  printCallback("result", a + b);
};

let prettyPrint = (label: string, value: any) => {
  console.log(`${label} :: ${value}`);
  console.log(`------------------\n`);
};

// add(2, 5, prettyPrint);
// console.log("Before");
setTimeout(() => {
  //   console.log("Welcome");
}, 3000);

// console.log("After");

let printHello = () => {
  console.log("Hello Sagar");
};

setTimeout(printHello, 3000);
