// but using generic we can change the type specific at runtime

function getValue<T>(a: T) {
  return a;
}
getValue<number>(10);

// also for objects

interface Person<T, U> {
  name: T;
  age: U;
}
let obj: Person<string, number> = {
  name: "sagar",
  age: 24,
};
