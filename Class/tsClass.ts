class TsClass {
  public name: string;
  public age: number;
  protected email: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

class TsClassOne extends TsClass {
  constructor(name: string, age: number) {
    super(name, age);
  }

  public getEmail() {
    return this.email;
  }
}

let obj = new TsClass("sagar", 24);
obj.setName("milan");
// console.log(obj.getName());

let obj1 = new TsClassOne("sagar", 24);
console.log(obj1.getEmail());
