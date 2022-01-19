export let greeting: string = "Hello from module 2";

// also similarly we can export class, variable , functions

// for example class can be exported

export class Sagar {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getNameAndAge() {
    return this.name + "  " + this.age;
  }
}
