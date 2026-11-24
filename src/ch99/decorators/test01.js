function myNew(Ctor, ...args) {
  if (typeof Ctor !== "function") {
    throw new TypeError("myNew 的第一个参数必须是函数");
  }

  // 第 1、2 步：造空对象，原型接到 Ctor.prototype
  const proto = Ctor.prototype;
  // `Object.create(xxx)`：创建一个空对象，并且把这个空对象的 `__proto__` 指向 xxx（设置原型）
  const obj = Object.create(
    /*
     * `Object.prototype` 在这段代码里是什么角色？当构造函数的 `.prototype` 被改成了不合法的值（不能作为原型的值），
     * 我们新创建的 `obj` 的 `__proto__` 就指向 `Object.prototype`。
     * */
    proto && typeof proto === "object" ? proto : Object.prototype,
  );

  // 第 3 步：以新对象为 this 执行构造函数
  /*
    Ctor.apply的作用:
      1. 执行 `Ctor` 这个函数
      2. 把函数内部的 `this` **强制改成第一个参数 obj**
      3. 第二个参数是数组，里面的值会拆开当成传给 Ctor 的实参
  */
  const result = Ctor.apply(obj, args);

  // 第 4 步：返回对象/函数就用它，否则忽略返回值、用新对象
  const isObject =
    result !== null &&
    (typeof result === "object" || typeof result === "function");
  return isObject ? result : obj;
}

function User(name, age) {
  this.name = name;
  this.age = age;
}

const u1 = myNew(User, "linyerun", 25);
const u2 = myNew(User, "linyerun", 26);
console.log(u1);
console.log(u2);

// 只要是函数就有一个原型, 通过".prototype"获取, 这个原型是一个对象, 所以可以说每个函数都有一个原型对象(object类型才叫对象)
// 每个对象都有一个__proto__属性, 可以用来指定一个对象
