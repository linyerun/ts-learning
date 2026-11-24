function User(age) {
  this.age = age;
}

User.prototype.print = () => console.log("print");

console.log(typeof User.prototype); //object

const u1 = new User(1);
const u2 = new User(2);
console.log(u1.age);
console.log(u2.age);
console.log(User.age);
u1.print();
u2.print();

console.log("----");
let ptr = u1;
while (ptr !== null) {
  console.log(ptr);
  ptr = ptr.__proto__;
}
