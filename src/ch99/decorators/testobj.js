// 只要是函数就有一个原型, 通过".prototype"获取, 这个原型是一个对象, 所以可以说每个函数都有一个原型对象(object类型才叫对象)
// 每个对象都有一个__proto__属性, 可以用来指定一个对象

const u1 = {
  name1: "u1",
  f1() {
    console.log("u1");
  },
};

const u2 = {
  name2: "u2",
  f2() {
    console.log("u2");
  },
};

const u3 = {
  name3: "u3",
  f3() {
    console.log("u3");
  },
};

u1.__proto__ = u2;
u2.__proto__ = u3;
console.log(u3.__proto__.__proto__ === null); // true, 可以说明u3执行的对象执行的对象为null

// 可以说明, 找方法/属性时会沿着原型链往上找,知道找到或者到尽头也找不到就返回undefined
u1.f1(); //u1
u1.f2(); //u2
u1.f3(); //u3
console.log(u1.name1); //u1
console.log(u1.name2); //u2
console.log(u1.name3); //u3
console.log(u1.name4); //undefined
