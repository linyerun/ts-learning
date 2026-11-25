export {};

/*
- **类装饰器**：target = 构造函数 `A`
- **实例方法 / 实例属性**：target = `A.prototype`
- **静态方法 / 静态属性**：target = 构造函数 `A`
- **参数装饰器**：实例方法 → `A.prototype`；静态方法、构造函数 → `A`

然后 target1 = 构造函数 `A`；target2 = `A.prototype`，这是target1.prototype === target2

执行时机：代码执行到 class 声明那一刻（模块加载时），也就是 new、构造函数体、任何方法调用之前。

只执行一次，之后永远不再执行。 new 100 次、调用方法 100 次都不会重新触发装饰器；重复 import 也不会（模块缓存）。

this 为什么每个实例不同
  方法只有一份，挂在原型上。 实测 a.plain === b.plain 为 true——不是每个对象复制一个方法。
  this 不是存在函数里的数据，是调用时传入的隐式参数。x.add(1)   ≡   C.prototype.add.call(x, 1)
*/

let pt = null;

function printObjLink(target: any, printPrefix: string) {
  if (typeof target !== "object") {
    return;
  }
  while (true) {
    console.log(printPrefix, target);
    if (target === null) {
      break;
    }
    target = target.__proto__;
  }
}

// 类装饰器
function clsDecorator(name: string): ClassDecorator {
  return (target: any) => {
    /*
     * 类装饰器接受到的这个target是构造函数本身
     * */
    console.log("pt === target.prototype?", pt === target.prototype); //true
    console.log("----------clsDecorator----------");
    printObjLink(target.prototype, "[clsDecorator]");
    console.log("----------clsDecorator----------");
  };
}

// 属性装饰器
function setField(name: string): PropertyDecorator {
  return (target: any, key: string | symbol) => {};
}

// 属性装饰器
const getField: PropertyDecorator = (target: any, key: string | symbol) => {
  pt = target;
  console.log("----------propertyDecorator----------");
  printObjLink(
    typeof target == "function" ? target.prototype : target,
    "[propertyDecorator]",
  );
  console.log("----------propertyDecorator----------");
};

// 参数装饰器
const argDecorator: ParameterDecorator = (
  target: any,
  key: string | symbol,
  parameterIndex: number,
) => {
  console.log("----------argDecorator----------");
  printObjLink(
    typeof target == "function" ? target.prototype : target,
    "[argDecorator]",
  );
  console.log("----------argDecorator----------");
};

// 方法装饰器
const methodDecorator: MethodDecorator = (
  target: any,
  key: string | symbol,
  descriptor: any,
) => {
  console.log("----------methodDecorator----------");
  printObjLink(
    typeof target == "function" ? target.prototype : target,
    "[methodDecorator]",
  );
  console.log("----------methodDecorator----------");
};

@clsDecorator("linyerun")
class Person {
  name1: string;

  @getField
  @setField("lyr")
  name2: string;
  constructor(@argDecorator name1?: string, name2?: string) {
    this.name1 = name1;
    this.name2 = name2;
  }

  @methodDecorator
  getName1() {
    console.log("[getName1]", this.name1);
  }

  setName1(@argDecorator name: string) {
    this.name1 = name;
    console.log("[setName1]", this.name1);
  }
}

/*
 * setField => getField => methodDecorator => argDecorator => clsDecorator => constructor
 * */

function User() {}

printObjLink(User.prototype, "[user]");

const p1 = new Person();
const p2 = new Person();
console.log(p1.getName1 == p2.getName1); // true
