// TS have 3 variables
// 1. global
// 2. class variables
// 3. local variables

var global_variable = 10; // with global scope

class learnTS {
  class_variable = 13; // inside class

  sum(): number {
    var local_var1 = 20; //inside local scope is the local variable
    var local_var2 = 20;
    return local_var1 + local_var2;
  }
}

console.log(global_variable);
// console.log(class_variable)  cannot be accessed outside the class and same applies for the local variable
