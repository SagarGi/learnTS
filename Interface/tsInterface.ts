// helps to define the type of class and the objects
interface UserType {
  name: string;
  age: number;
  getHeight: () => number;
}
let users: UserType = {
  name: "sagar",
  age: 30,
  getHeight: function () {
    return 6.1;
  },
};

console.log(users);
